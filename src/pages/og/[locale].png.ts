// Imagem de compartilhamento (Open Graph) gerada no build, uma por idioma:
// /og/en.png, /og/pt-br.png e /og/es.png. Usa satori para montar o layout
// e resvg para rasterizar em PNG 1200x630, no visual Tokyo Night do site.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { locales, type Locale } from '../../i18n/config';
import { t } from '../../i18n/strings';
import { site } from '../../data/site';

export const getStaticPaths: GetStaticPaths = () => locales.map((locale) => ({ params: { locale } }));

const W = 1200;
const H = 630;
const CELL = 14;
const C = {
  bg: '#0e0e14',
  text: '#c0caf5',
  secondary: '#a9b1d6',
  muted: '#8b93b8',
  brand: '#9ece6a',
  dim: '#39482e',
  mid: '#678549',
  border: '#24283b',
};

const fontsDir = join(process.cwd(), 'node_modules/@fontsource/jetbrains-mono/files');
const fonts = Promise.all([
  readFile(join(fontsDir, 'jetbrains-mono-latin-400-normal.woff')),
  readFile(join(fontsDir, 'jetbrains-mono-latin-700-normal.woff')),
]);
const photo = sharp(join(process.cwd(), 'src/assets/thiago.jpg'))
  .resize(320, 320)
  .jpeg({ quality: 82 })
  .toBuffer()
  .then((b) => `data:image/jpeg;base64,${b.toString('base64')}`);

// Pixels decorativos, determinísticos: esparsos nas bordas e um chão embaixo,
// como o campo do hero, deixando o miolo livre para o texto.
const hash = (x: number, y: number) => {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};
const pixels = () => {
  const out: { x: number; y: number; c: string }[] = [];
  const cols = Math.ceil(W / CELL);
  const rows = Math.ceil(H / CELL);
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const ox = (c / cols) * 2 - 1;
      const oy = (r / rows) * 2 - 1;
      const radial = Math.max(0, (Math.sqrt(ox * ox + oy * oy * 0.8) - 0.55) / 0.6);
      const ground = r / rows > 0.82 ? ((r / rows - 0.82) / 0.18) ** 1.5 : 0;
      let p = Math.min(0.55, radial * radial * 0.35 + ground * 0.5);
      // sem pixels atrás do texto e da foto
      const x = c * CELL;
      const y = r * CELL;
      const inText = x > 70 && x < 760 && y > 110 && y < 510;
      const inPhoto = x > 820 && x < 1130 && y > 160 && y < 470;
      if (inText || inPhoto) p = 0;
      const h = hash(c, r);
      if (h < p) out.push({ x: c * CELL, y: r * CELL, c: h < p * 0.25 ? C.mid : C.dim });
    }
  return out;
};

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as Locale;
  const s = t(locale);
  const [regular, bold] = await fonts;
  const avatar = await photo;
  const role = s.hero.taglines[0];

  const tree = el('div', { width: W, height: H, display: 'flex', position: 'relative', background: C.bg, fontFamily: 'JetBrains Mono' }, [
    ...pixels().map((p) => el('div', { position: 'absolute', left: p.x, top: p.y, width: CELL - 2, height: CELL - 2, background: p.c })),
    el(
      'div',
      { display: 'flex', alignItems: 'center', gap: 64, padding: '0 96px', width: '100%', height: '100%' },
      [
        el('div', { display: 'flex', flexDirection: 'column', flex: 1 }, [
          el('div', { display: 'flex', fontSize: 26, color: C.brand }, `>_ ~/${site.shortName}`),
          el('div', { display: 'flex', marginTop: 28, fontSize: 64, fontWeight: 700, color: C.text, letterSpacing: -1.5, lineHeight: 1.05 }, site.name),
          el('div', { display: 'flex', marginTop: 22, fontSize: 30, color: C.secondary }, [
            el('span', { color: C.brand, marginRight: 14 }, '>'),
            el('span', {}, role),
          ]),
          el('div', { display: 'flex', marginTop: 14, fontSize: 30, color: C.text, fontWeight: 700 }, s.about.nowValue),
          el('div', { display: 'flex', marginTop: 34, fontSize: 22, color: C.muted }, `${site.location} · ${site.email}`),
        ]),
        {
          type: 'img',
          props: { src: avatar, width: 260, height: 260, style: { borderRadius: 18, border: `2px solid ${C.border}`, objectFit: 'cover' } },
        },
      ],
    ),
  ]);

  const svg = await satori(tree as never, {
    width: W,
    height: H,
    fonts: [
      { name: 'JetBrains Mono', data: regular, weight: 400, style: 'normal' },
      { name: 'JetBrains Mono', data: bold, weight: 700, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
