# thi.dev.br

Site pessoal de Thiago Sousa Santos. Astro + Tailwind v4, temas Tokyo Night e Catppuccin Latte, JetBrains Mono, publicado no GitHub Pages.

## Rodando

As versões de Node e pnpm estão fixadas no `mise.toml`.

```sh
mise install
pnpm install
pnpm dev         # http://localhost:4321/thi.dev.br/
pnpm check       # checagem de tipos
pnpm build       # gera ./dist
pnpm cv:pdf      # PDFs do currículo, depois do build
pnpm preview
```

## Onde editar

| O quê                                  | Arquivo                        |
| -------------------------------------- | ------------------------------ |
| Textos da interface, bio, hobbies      | `src/i18n/strings.ts`          |
| Nome, links, e-mail, stack             | `src/data/site.ts`             |
| Experiência profissional               | `src/content/experience.yaml`  |
| Projetos em destaque                   | `src/content/projects.yaml`    |
| Cores dos temas e container            | `src/styles/global.css`        |
| Foto                                   | `src/assets/thiago.jpg`        |

## Idiomas

Inglês fica na raiz (`/`), português em `/pt-br/` e espanhol em `/es/`. Todo texto traduzido existe nos três idiomas: em `src/i18n/strings.ts` para a interface e nos campos `en`, `pt-br` e `es` dos YAML. O schema em `src/content.config.ts` falha o build se faltar algum idioma.

## Temas

Há dois temas: Tokyo Night, o escuro, e Catppuccin Latte, o claro, ambos com os tokens do omarchy.org. No claro, o azul do Latte vira verde. Os tokens ficam em `src/styles/global.css`, nos blocos `:root` e `:root[data-theme='latte']`.

O tema segue o sistema na primeira visita. O botão do header troca e salva a escolha no navegador. Um script inline no `<head>` aplica o tema antes da primeira pintura.

Para adicionar outro tema, crie um bloco `:root[data-theme="nome"]` com as mesmas variáveis `--t-*` e inclua o nome em `ThemeToggle.astro` e no script do `Base.astro`.

## Deploy e CI

O workflow `.github/workflows/deploy.yml` roda `pnpm check` e `pnpm build` em todo pull request e push. Em push na `main`, depois da checagem, ele faz o build de produção, gera os PDFs do currículo e publica no GitHub Pages.

Enquanto `public/CNAME` não existe, o site sai em `https://thiagossdev.github.io/thi.dev.br/`. Quando o DNS de `thi.dev.br` estiver apontando para o GitHub Pages, crie o arquivo:

```sh
echo "thi.dev.br" > public/CNAME
```

O `astro.config.mjs` detecta o arquivo e troca `site` e `base` para o domínio próprio.

## Currículo

As páginas `/cv/`, `/pt-br/cv/` e `/es/cv/` montam o currículo a partir dos mesmos dados do site. O PDF sai dessas páginas com `pnpm build` seguido de `pnpm cv:pdf`. O script serve o `dist/` num servidor HTTP próprio e imprime com o Chromium do Playwright. Na primeira vez, baixe o navegador com `pnpm exec playwright install --only-shell chromium` (e `--with-deps` se faltarem bibliotecas do sistema). No CI isso roda sozinho.

## Página /uses

As páginas `/uses/`, `/pt-br/uses/` e `/es/uses/` seguem a convenção do [uses.tech](https://uses.tech): o que uso no dia a dia e as configs dos meus Gists públicos. Os Gists são buscados no build por `src/data/gists.ts`, com um `git clone` raso de cada um, sem a API do GitHub nem token. Se o clone falhar localmente, o build continua e a página mostra só os links; no CI o build falha.

## Compartilhamento e busca

As imagens `/og/<idioma>.png` são geradas no build por `src/pages/og/[locale].png.ts`. Cada página também tem um JSON-LD schema.org Person.

Para ligar o Cloudflare Web Analytics, crie a variável de repositório `CF_BEACON_TOKEN` com o token do site, em Settings, Secrets and variables, Actions, aba Variables. Sem ela, o script não entra no HTML.

## Dependências

O `.github/dependabot.yml` abre PRs semanais para pacotes npm e GitHub Actions. Os alertas de segurança e as correções automáticas são ligados nas configurações do repositório, em Settings, Code security.

## Créditos das imagens

As artes de Soul Eater pertencem a Atsushi Ohkubo e Square Enix e aparecem aqui como homenagem de fã.

| Imagem | Origem |
| --- | --- |
| Maka Albarn | site antigo, thi.dev.br |
| Black☆Star | PNGitem, recorte de arte do anime |
| Death the Kid | render de BLACKrangers123 no DeviantArt |
| Shinigami-sama | Soul Eater Wiki (Fandom), "Render death" |
