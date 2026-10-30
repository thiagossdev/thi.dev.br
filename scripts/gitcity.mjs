// Baixa o card do perfil na Git City (thegitcity.com), a imagem de
// compartilhamento que eles geram a cada pedido, sem cache nenhum.
//
//   pnpm gitcity           salva src/assets/gitcity.png, a versão versionada no
//                          repositório. Rode de vez em quando para atualizar os números.
//   pnpm gitcity --build   salva dist/gitcity.webp, depois do `pnpm build`. Se a Git
//                          City estiver fora do ar, avisa e sai sem erro: a página
//                          fica com a versão do repositório.
//
// Na página, um script troca a versão do repositório pela do build e depois pela
// ao vivo, conforme cada uma carrega (src/components/Projects.astro).
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, relative } from 'node:path';
import sharp from 'sharp';

const HANDLE = 'thiagossdev';
const GITCITY_CARD = `https://www.thegitcity.com/dev/${HANDLE}/opengraph-image`;
const build = process.argv.includes('--build');
const out = build ? 'dist/gitcity.webp' : 'src/assets/gitcity.png';

try {
  // A Git City leva de 3 a 6 s para gerar o card.
  const res = await fetch(GITCITY_CARD, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  if (!res.headers.get('content-type')?.startsWith('image/')) throw new Error(`resposta não é imagem (${res.headers.get('content-type')})`);

  const png = Buffer.from(await res.arrayBuffer());
  // Uma página de erro com cara de imagem não passa daqui.
  const { width, height } = await sharp(png).metadata();
  if (width !== 1200 || height !== 630) throw new Error(`tamanho inesperado ${width}x${height}`);

  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, build ? await sharp(png).webp({ quality: 85 }).toBuffer() : png);
  console.log(`✓ ${relative(process.cwd(), out)}`);
} catch (err) {
  const message = `[gitcity] não foi possível baixar o card: ${err.message}`;
  if (!build) {
    console.error(message);
    process.exit(1);
  }
  console.warn(`${message}. A página usa a versão do repositório.`);
}
