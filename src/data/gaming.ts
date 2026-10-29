// Setup de jogos da página /uses. Os nomes do hardware não se traduzem; os
// rótulos (processador, memória...) vêm de strings.ts.

export type SpecKey = 'cpu' | 'cooler' | 'board' | 'ram' | 'gpu' | 'storage' | 'fans' | 'case' | 'psu';

export interface Rig {
  key: 'desktop' | 'notebook';
  name: string;
  specs: [SpecKey, string][];
}

export const rigs: Rig[] = [
  {
    key: 'desktop',
    name: 'ASUS TUF Gaming',
    specs: [
      ['cpu', 'AMD Ryzen 9 9900X · 12C/24T · 5.6 GHz'],
      ['gpu', 'ASUS TUF Gaming GeForce RTX 4060 Ti OC · 8 GB'],
      ['ram', '64 GB DDR5-6000 · Kingston Fury Beast RGB (4×16 GB)'],
      ['storage', 'Kingston Fury Renegade 1 TB · NVMe PCIe 4.0'],
      ['board', 'ASUS TUF Gaming X670E-Plus Wi-Fi'],
      ['cooler', 'ASUS TUF Gaming LC 360 II ARGB · 360 mm'],
      ['fans', '10× ASUS TUF Gaming TF120 ARGB'],
      ['case', 'ASUS TUF Gaming GT502'],
      ['psu', 'ASUS TUF Gaming 850 W · 80 Plus Gold'],
    ],
  },
  {
    key: 'notebook',
    name: 'Lenovo',
    specs: [
      ['cpu', 'Intel Core i7-10750H · 6C/12T'],
      ['gpu', 'NVIDIA GeForce RTX 2060'],
      ['ram', '64 GB'],
      ['storage', 'WD PC SN730 512 GB · NVMe'],
    ],
  },
];

export const steamProfile = 'https://steamcommunity.com/id/dextherz/';
export const steamGames = 439;
export const twitch = 'https://www.twitch.tv/dextherz';

/** Mais jogados. Horas do perfil da Steam em outubro de 2026; sem horas para os de fora da Steam. */
export const games: { name: string; hours?: number; platform?: string }[] = [
  { name: 'Awesomenauts', hours: 1518 },
  { name: 'Path of Exile', hours: 1482 },
  { name: 'Apex Legends', hours: 517 },
  { name: 'Tree of Savior', hours: 412 },
  { name: 'Dota 2', hours: 412 },
  { name: 'WAKFU', hours: 379 },
  { name: 'Path of Exile 2', hours: 339 },
  { name: 'Granblue Fantasy: Relink', hours: 78 },
  { name: 'League of Legends', platform: 'Riot' },
  { name: 'Minecraft' },
];
