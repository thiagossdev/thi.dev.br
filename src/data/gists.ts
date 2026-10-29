// Gists públicos exibidos na página /uses, buscados no build pela API do
// GitHub. Usa GITHUB_TOKEN quando existir (no CI) para evitar o limite de
// requisições anônimas. Se a API falhar, o build segue e a página mostra só
// o link de cada Gist.

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

export function getGist(key: GistKey): Promise<Gist | null> {
  const id = GISTS[key];
  if (!cache.has(id)) {
    const token = process.env.GITHUB_TOKEN;
    cache.set(
      id,
      fetch(`https://api.github.com/gists/${id}`, {
        headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      })
        .then(async (res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = (await res.json()) as {
            html_url: string;
            updated_at: string;
            files: Record<string, { filename: string; content?: string }>;
          };
          return {
            id,
            url: data.html_url,
            updated: new Date(data.updated_at),
            files: Object.values(data.files).map((f) => ({ filename: f.filename, content: f.content ?? '' })),
          };
        })
        .catch((err) => {
          console.warn(`[gists] não foi possível carregar ${key} (${id}): ${err.message}`);
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
