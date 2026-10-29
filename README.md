# thi.dev.br

Site pessoal de Thiago Sousa Santos. Astro + Tailwind v4, tema Tokyo Night, JetBrains Mono, publicado no GitHub Pages.

## Rodando

As versões de Node e pnpm estão fixadas no `mise.toml`.

```sh
mise install
pnpm install
pnpm dev         # http://localhost:4321/thi.dev.br/
pnpm build       # gera ./dist
pnpm preview
```

## Onde editar

| O quê                      | Arquivo                        |
| -------------------------- | ------------------------------ |
| Nome, bio, links, stack    | `src/data/site.ts`             |
| Experiência profissional   | `src/content/experience.yaml`  |
| Projetos em destaque       | `src/content/projects.yaml`    |
| Cores do tema              | `src/styles/global.css`        |
| Foto                       | `src/assets/thiago.jpg`        |

Para adicionar outro tema, crie um bloco `:root[data-theme="nome"]` em `global.css` com as mesmas variáveis `--t-*` e troque o atributo `data-theme` em `src/layouts/Base.astro`.

## Deploy

Todo push na `main` roda `.github/workflows/deploy.yml` e publica no GitHub Pages.

Enquanto `public/CNAME` não existe, o site sai em `https://thiagossdev.github.io/thi.dev.br/`. Quando o DNS de `thi.dev.br` estiver apontando para o GitHub Pages, crie o arquivo:

```sh
echo "thi.dev.br" > public/CNAME
```

O `astro.config.mjs` detecta o arquivo e troca `site` e `base` para o domínio próprio.
