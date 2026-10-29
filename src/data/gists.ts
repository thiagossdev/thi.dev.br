// Gists públicos exibidos na página /uses, buscados no build com um clone
// raso de cada Gist (todo Gist é um repositório git). Não usa a API: o
// GITHUB_TOKEN do Actions é de GitHub App e a API de Gists responde 403 para
// ele, e sem token o limite anônimo de 60 requisições/h por IP é dividido entre
// os runners. Localmente, se o clone falhar, o build segue e a página mostra
// só o link; no CI o build falha, para não publicar a página sem os Gists.
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';

const git = promisify(execFile);

export interface GistFile {
  filename: string;
  content: string;
}
export interface Gist {
  id: string;
  url: string;
  updated: Date;
  files: GistFile[];
}

export const GISTS = {
  p10k: '6359b04760061479f7f5be3b45ab79ae',
  vscodeSettings: '5be1285066c9ece015c92df7952da6a6',
  vscodeExtensions: 'b4a0214c397ad29a2c2ca1bb72bba76b',
  rustTools: '949272d3b1bd7308c6209c372658a57e',
  xcompose: '5844ad9d1dda254efd11fc3140416ade',
} as const;

export type GistKey = keyof typeof GISTS;

const cache = new Map<string, Promise<Gist | null>>();

export function gistUrl(key: GistKey): string {
  return `https://gist.github.com/thiagossdev/${GISTS[key]}`;
}

async function cloneGist(id: string): Promise<Gist> {
  const dir = await mkdtemp(join(tmpdir(), 'gist-'));
  try {
    const opts = { timeout: 30_000, env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } };
    await git('git', ['clone', '--depth', '1', '--quiet', `https://gist.github.com/${id}.git`, dir], opts);
    const { stdout } = await git('git', ['-C', dir, 'log', '-1', '--format=%cI'], opts);
    // Ordem alfabética, como a API devolvia.
    const names = (await readdir(dir, { withFileTypes: true }))
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .sort();
    return {
      id,
      url: `https://gist.github.com/thiagossdev/${id}`,
      updated: new Date(stdout.trim()),
      files: await Promise.all(names.map(async (filename) => ({ filename, content: await readFile(join(dir, filename), 'utf8') }))),
    };
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

export function getGist(key: GistKey): Promise<Gist | null> {
  const id = GISTS[key];
  if (!cache.has(id)) {
    cache.set(
      id,
      cloneGist(id).catch((err) => {
        const message = `[gists] não foi possível carregar ${key} (${id}): ${err.message}`;
        if (process.env.CI) throw new Error(message);
        console.warn(message);
        return null;
      }),
    );
  }
  return cache.get(id)!;
}

/** Tira comentários e linhas vazias de um script de shell (o .p10k.zsh tem 90 KB, quase tudo comentário). */
export function stripShellComments(code: string): string {
  return code
    .split('\n')
    .filter((line) => line.trim() !== '' && !line.trim().startsWith('#'))
    .join('\n');
}

/** IDs de extensão do extensions.json exportado do VS Code, sem as extensões nativas. */
export function extensionIds(json: string): string[] {
  const ids = [...json.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]);
  return [...new Set(ids)].filter((id) => !id.startsWith('vscode.') && !id.startsWith('ms-vscode.vscode-'));
}
