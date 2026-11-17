// @ts-check
import { existsSync, readFileSync } from 'node:fs';
import { parseEnv } from 'node:util';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Enquanto `public/CNAME` não existir, o site é publicado em
// https://thiagossdev.github.io/thi.dev.br/ (project page) e precisa de `base`.
// Ao criar o arquivo CNAME com "thi.dev.br", o build passa a usar o domínio próprio.
const hasCustomDomain = existsSync(new URL('./public/CNAME', import.meta.url));

// Opções versionadas do site (site.env). A variável de ambiente real ganha do arquivo.
const siteEnv = parseEnv(readFileSync(new URL('./site.env', import.meta.url), 'utf8'));
const SEASONS = ['none', 'christmas'];
const season = process.env.SEASON || siteEnv.SEASON || 'none';
if (!SEASONS.includes(season)) {
  throw new Error(`SEASON="${season}" não existe. Use um destes em site.env: ${SEASONS.join(', ')}.`);
}

export default defineConfig({
  site: hasCustomDomain ? 'https://thi.dev.br' : 'https://thiagossdev.github.io',
  base: hasCustomDomain ? '/' : '/thi.dev.br',
  trailingSlash: 'ignore',
  // inglês na raiz, português em /pt-br/ e espanhol em /es/
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'pt-br': 'pt-BR', es: 'es' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Constante de build: com 'none', o código de Natal é removido do bundle.
    define: { __SEASON__: JSON.stringify(season) },
  },
});
