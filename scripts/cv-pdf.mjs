// Gera os PDFs do currículo a partir das páginas /cv/ já construídas em dist/.
// Uso: pnpm build && pnpm cv:pdf
// Precisa de um navegador Chromium (Chrome, Chromium ou Edge). Use CHROME_PATH
// para apontar um binário específico.
import { execFileSync, execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const locales = ['en', 'pt-br', 'es'];
const port = 4330;
const base = existsSync('public/CNAME') ? '/' : '/thi.dev.br/';
const cvPath = (l) => `${base}${l === 'en' ? '' : `${l}/`}cv/`;

const findBrowser = () => {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  for (const bin of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'microsoft-edge']) {
    try {
      return execSync(`command -v ${bin}`, { encoding: 'utf8' }).trim();
    } catch {}
  }
  throw new Error('Nenhum navegador Chromium encontrado. Defina CHROME_PATH.');
};

const waitFor = async (url, tries = 60) => {
  for (let i = 0; i < tries; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Preview não respondeu em ${url}`);
};

const browser = findBrowser();
execSync(`pnpm astro preview --port ${port}`, { stdio: 'inherit' });
try {
  await waitFor(`http://localhost:${port}${cvPath('en')}`);
  for (const locale of locales) {
    const out = join('dist', cvPath(locale).slice(base.length), `thiago-sousa-santos-cv-${locale}.pdf`);
    mkdirSync(dirname(out), { recursive: true });
    execFileSync(browser, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--no-pdf-header-footer',
      '--virtual-time-budget=5000',
      `--print-to-pdf=${out}`,
      `http://localhost:${port}${cvPath(locale)}`,
    ]);
    if (!existsSync(out)) throw new Error(`PDF não gerado: ${out}`);
    console.log(`✓ ${out}`);
  }
} finally {
  execSync('pnpm astro preview stop', { stdio: 'inherit' });
}
