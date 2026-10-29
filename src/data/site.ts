// Dados que não mudam com o idioma. Textos traduzidos ficam em src/i18n/strings.ts.
export const site = {
  name: 'Thiago Sousa Santos',
  shortName: 'thi.dev.br',
  handle: 'thiagossdev',
  email: 'ssthiago.dev@gmail.com',
  location: 'Teresina, PI',
  repo: 'https://github.com/thiagossdev/thi.dev.br',
  links: [
    { label: 'github', icon: 'github', href: 'https://github.com/thiagossdev' },
    { label: 'linkedin', icon: 'linkedin', href: 'https://www.linkedin.com/in/thiagosousasantos' },
    { label: 'x', icon: 'x', href: 'https://x.com/thiagossdev' },
    { label: 'instagram', icon: 'instagram', href: 'https://instagram.com/thiagossdev' },
    { label: 'spotify', icon: 'spotify', href: 'https://open.spotify.com/user/thiagos.xsantos' },
  ],
  // ids de âncora iguais em todos os idiomas; o rótulo vem de strings.nav
  nav: ['about', 'experience', 'projects', 'stack', 'contact'],
  stack: [
    { group: 'languages', icon: 'code', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP', 'Ruby', 'Go', 'GDScript'] },
    { group: 'backend', icon: 'server', items: ['Node.js', 'Ruby on Rails', 'PHP (Zend, CakePHP)', 'Flutter', 'REST', 'SQL'] },
    { group: 'data', icon: 'database', items: ['PostgreSQL', 'MariaDB', 'MySQL'] },
    { group: 'infra', icon: 'cloud', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Nginx', 'Linux'] },
    { group: 'tools', icon: 'wrench', items: ['Git', 'n8n', 'Twilio', 'WhatsApp API', 'Zendesk', 'Jira', 'Godot'] },
  ],
  education: {
    school: 'Universidade Federal do Piauí',
    url: 'https://ufpi.br',
    period: '2010 – 2014',
  },
  testimonialAuthor: 'Renan Tourinho',
} as const;

/** Cor por linguagem, mapeada para a paleta do tema. */
export const languageColor: Record<string, string> = {
  Shell: 'var(--t-brand)',
  GDScript: 'var(--t-blue)',
  Ruby: 'var(--t-red)',
  TypeScript: 'var(--t-cyan)',
  JavaScript: 'var(--t-yellow)',
  Java: 'var(--t-orange)',
  Python: 'var(--t-magenta)',
};
