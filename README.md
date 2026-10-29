# thi.dev.br

Site pessoal de Thiago Sousa Santos. Astro + Tailwind v4, tema Tokyo Night, JetBrains Mono, publicado no GitHub Pages.

## Rodando

As versões de Node e pnpm estão fixadas no `mise.toml`.

```sh
mise install
pnpm install
pnpm dev         # http://localhost:4321/thi.dev.br/
pnpm check       # checagem de tipos
pnpm build       # gera ./dist
pnpm preview
```

## Onde editar

| O quê                                  | Arquivo                        |
| -------------------------------------- | ------------------------------ |
| Textos da interface, bio, hobbies      | `src/i18n/strings.ts`          |
| Nome, links, e-mail, stack             | `src/data/site.ts`             |
| Experiência profissional               | `src/content/experience.yaml`  |
| Projetos em destaque                   | `src/content/projects.yaml`    |
| Cores do tema e container              | `src/styles/global.css`        |
| Foto                                   | `src/assets/thiago.jpg`        |

## Idiomas

Inglês fica na raiz (`/`), português em `/pt-br/` e espanhol em `/es/`. Todo texto traduzido existe nos três idiomas: em `src/i18n/strings.ts` para a interface e nos campos `en`, `pt-br` e `es` dos YAML. O schema em `src/content.config.ts` falha o build se faltar algum idioma.

Para adicionar outro tema, crie um bloco `:root[data-theme="nome"]` em `global.css` com as mesmas variáveis `--t-*` e troque o atributo `data-theme` em `src/layouts/Base.astro`.

## Deploy

Todo push na `main` roda `.github/workflows/deploy.yml` e publica no GitHub Pages.

Enquanto `public/CNAME` não existe, o site sai em `https://thiagossdev.github.io/thi.dev.br/`. Quando o DNS de `thi.dev.br` estiver apontando para o GitHub Pages, crie o arquivo:

```sh
echo "thi.dev.br" > public/CNAME
```

O `astro.config.mjs` detecta o arquivo e troca `site` e `base` para o domínio próprio.
