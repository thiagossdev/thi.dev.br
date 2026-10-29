// Gera os PDFs do currículo a partir das páginas /cv/ já construídas em dist/.
// Uso: pnpm build && pnpm cv:pdf
// Precisa do Chromium do Playwright: pnpm exec playwright install --only-shell chromium
//
// Serve o dist/ com um servidor HTTP no próprio processo, em vez do `astro
// preview`: sem processo filho, nada fica órfão nem prende o job do CI.
import { existsSync, mkdirSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { chromium } from 'playwright';

const locales = ['en', 'pt-br', 'es'];
const base = existsSync('public/CNAME') ? '/' : '/thi.dev.br/';
const cvPath = (l) => `${base}${l === 'en' ? '' : `${l}/`}cv/`;
const root = resolve('dist');
const STEP_TIMEOUT = 30_000;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

// Caminho no disco para uma URL, ou null se for inválida ou sair de dist/.
// relative() pega `..%2F` decodificado e irmãos como dist-evil/, que um
// startsWith('dist') deixaria passar.
const resolveFile = (url) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(url ?? '/', 'http://localhost').pathname);
  } catch {
    return null;
  }
  if (!pathname.startsWith(base) || pathname.includes('\0')) return null;
  const file = resolve(root, pathname.slice(base.length));
  const rel = relative(root, file);
  if (rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel)) return null;
  return file;
};

const server = createServer(async (req, res) => {
  try {
    let file = resolveFile(req.url);
    if (!file) return res.writeHead(404).end();
    if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' }).end(body);
  } catch {
    if (!res.headersSent) res.writeHead(404);
    res.end();
  }
});

const listen = () =>
  new Promise((ok, fail) => {
    server.once('error', fail);
    // Porta aleatória por padrão, para não colidir com outro servidor local.
    server.listen(Number(process.env.CV_PDF_PORT ?? 0), '127.0.0.1', () => {
      server.off('error', fail);
      ok(server.address().port);
    });
  });

// Ordem recomendada pelo Node: close() primeiro, depois derrubar as conexões abertas.
const close = () =>
  new Promise((ok, fail) => {
    server.close((err) => (err && err.code !== 'ERR_SERVER_NOT_RUNNING' ? fail(err) : ok()));
    server.closeAllConnections();
  });

// page.pdf() não aceita timeout; este limite vale para qualquer etapa.
const withTimeout = (promise, label) => {
  let timer;
  const limit = new Promise((_, fail) => {
    timer = setTimeout(() => fail(new Error(`${label}: passou de ${STEP_TIMEOUT / 1000}s`)), STEP_TIMEOUT);
  });
  return Promise.race([promise, limit]).finally(() => clearTimeout(timer));
};

let browser;
try {
  const port = await listen();
  browser = await chromium.launch();
  const page = await browser.newPage();
  page.setDefaultTimeout(STEP_TIMEOUT);

  for (const locale of locales) {
    const out = join(root, cvPath(locale).slice(base.length), `thiago-sousa-santos-cv-${locale}.pdf`);
    mkdirSync(dirname(out), { recursive: true });

    // 'load' em vez de 'networkidle', que a documentação do Playwright desaconselha.
    const response = await page.goto(`http://127.0.0.1:${port}${cvPath(locale)}`, { waitUntil: 'load' });
    if (!response?.ok()) throw new Error(`HTTP ${response?.status()} em ${cvPath(locale)}`);

    // Sem isso o PDF pode sair com a fonte de fallback ou com imagens em branco.
    const broken = await page.evaluate(async () => {
      await document.fonts.ready;
      return [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.currentSrc || img.src);
    });
    if (broken.length) throw new Error(`Imagens não carregadas em ${locale}: ${broken.join(', ')}`);

    await withTimeout(page.pdf({ path: out, printBackground: true, preferCSSPageSize: true }), `PDF ${locale}`);
    console.log(`✓ ${relative(process.cwd(), out)}`);
  }
} finally {
  await browser?.close();
  await close();
}
