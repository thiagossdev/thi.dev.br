// Enfeites de Natal em pixel art. Cada linha é uma fileira de pixels e cada
// letra, uma cor da paleta --x-* (src/styles/christmas.css); '.' é vazio.
//   k contorno · r/R vermelho · w/W branco · g/G verde · y/Y dourado · b/B biscoito
const bauble = (body: string, shade: string) =>
  [
    '....kkk....',
    '....kyk....',
    '...kkkkk...',
    '..kbbbbbk..',
    '.kbbwbbbbk.',
    'kbbwbbbbbsk',
    'kbbbbbbbbsk',
    'kbbbbbbbbsk',
    'kbbbbbbbssk',
    '.kbbbbbssk.',
    '..ksssssk..',
    '...kkkkk...',
  ].map((row) => row.replaceAll('b', body).replaceAll('s', shade));

/** Completa as linhas com vazio até a largura da mais comprida. */
function pad(rows: string[]): string[] {
  const width = Math.max(...rows.map((row) => row.length));
  return rows.map((row) => row.padEnd(width, '.'));
}

export const sprites = {
  'bauble-red': bauble('r', 'R'),
  'bauble-green': bauble('g', 'G'),
  'bauble-white': [
    '....kkk....',
    '....kyk....',
    '...kkkkk...',
    '..kwwwwwk..',
    '.kwwwwwwwk.',
    'kwwwwwwwwWk',
    'krrrrrrrrrk',
    'kRRRRRRRRRk',
    'kwwwwwwwWWk',
    '.kwwwwwWWk.',
    '..kWWWWWk..',
    '...kkkkk...',
  ],
  'candy-cane': [
    '..kkkk....',
    '.kwrrwk...',
    'kwrkkrwk..',
    'krwk.kwrk.',
    'kwrk.krwk.',
    '.kk..kwrk.',
    '.....krwk.',
    '.....kwrk.',
    '.....krwk.',
    '.....kwrk.',
    '.....krwk.',
    '.....kwrk.',
    '......kk..',
  ],
  gingerbread: [
    '...kkkkk...',
    '..kbbbbbk..',
    '..kbwbwbk..',
    '..kbbbbbk..',
    'kkkkbrbkkkk',
    'kbbbbbbbbbk',
    'kwbbbgbbbwk',
    'kkkkbbbkkkk',
    '...kbrbk...',
    '..kbbkbbk..',
    '..kbbkbbk..',
    '..kwbkbwk..',
    '..kkk.kkk..',
  ],
  holly: [
    '..G.G.......G.G..',
    '.GgGgG.G.G.GgGgG.',
    'GggggGGgGgGGggggG',
    '.GgggggggggggggG.',
    '..GggggrrrggggG..',
    '...G.GgrwRgG.G...',
    '....rrr.R.rrr....',
    '....rwR...rwR....',
    '....rRR...rRR....',
  ],
  star: [
    '....k....',
    '...kyk...',
    '...kyk...',
    'kkkkyykkk',
    'kyyyyyyYk',
    '.kyyyyYk.',
    '..kyyYk..',
    '.kyyYyYk.',
    '.kyYkkYk.',
    '.kkk.kkk.',
  ],
  hat: pad([
    '...........kkk',
    '.........kkrrrkk',
    '........krrrrrrRk',
    '.......krrrrrrrRRk',
    '......krrrrrrrrRRRk',
    '.....krrrrrrrrrRRRRk',
    '....krrrrrrrrrrRRkRRk',
    '....krrrrrrrrrRRRkkRRk',
    '...krrrrrrrrrrRRRk.kRRk',
    '...krrrrrrrrrRRRRk.kkkkk',
    '..krrrrrrrrrrRRRRk.kwwwk',
    '.kkkkkkkkkkkkkkkkkkkwwwwk',
    'kwwwwwwwwwwwwwwwwwwkwwwWk',
    'kwwwwwwwwwwwwwwwwwwk.kkk',
    'kWWWWWWWWWWWWWWWWWWk',
    '.kkkkkkkkkkkkkkkkkk',
  ]),
} satisfies Record<string, string[]>;

export type SpriteName = keyof typeof sprites;

/** Cor de cada letra dos desenhos. */
export const spriteFill: Record<string, string> = {
  k: 'var(--x-ink)',
  r: 'var(--x-red)',
  R: 'var(--x-red-dark)',
  w: 'var(--x-white)',
  W: 'var(--x-white-shade)',
  g: 'var(--x-green)',
  G: 'var(--x-green-dark)',
  y: 'var(--x-gold)',
  Y: 'var(--x-gold-dark)',
  b: 'var(--x-cookie)',
  B: 'var(--x-cookie-dark)',
};
