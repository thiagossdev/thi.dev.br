// @ts-check
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Enquanto `public/CNAME` não existir, o site é publicado em
// https://thiagossdev.github.io/thi.dev.br/ (project page) e precisa de `base`.
// Ao criar o arquivo CNAME com "thi.dev.br", o build passa a usar o domínio próprio.
const hasCustomDomain = existsSync(new URL('./public/CNAME', import.meta.url));

export default defineConfig({
  site: hasCustomDomain ? 'https://thi.dev.br' : 'https://thiagossdev.github.io',
  base: hasCustomDomain ? '/' : '/thi.dev.br',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
