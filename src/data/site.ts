export const site = {
  name: 'Thiago Sousa Santos',
  shortName: 'thi.dev.br',
  handle: 'thiagossdev',
  title: 'Thiago Sousa Santos · desenvolvedor full stack',
  description:
    'Desenvolvedor full stack em Teresina, PI. Analista de Sistemas na RevGás. Bacharel em Ciência da Computação pela UFPI.',
  email: 'ssthiago.dev@gmail.com',
  location: 'Teresina, PI, Brasil',
  repo: 'https://github.com/thiagossdev/thi.dev.br',
  // frases que o hero "digita" em sequência
  taglines: [
    'desenvolvedor full stack',
    'analista de sistemas na RevGás',
    'bacharel em ciência da computação',
    'gamer desde 1992',
    'monto teclados custom',
  ],
  links: [
    { label: 'github', href: 'https://github.com/thiagossdev' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/thiagosousasantos' },
    { label: 'x', href: 'https://x.com/thiagossdev' },
    { label: 'instagram', href: 'https://instagram.com/thiagossdev' },
    { label: 'spotify', href: 'https://open.spotify.com/user/thiagos.xsantos' },
  ],
  nav: [
    { label: 'sobre', href: '#sobre' },
    { label: 'experiência', href: '#experiencia' },
    { label: 'projetos', href: '#projetos' },
    { label: 'stack', href: '#stack' },
    { label: 'contato', href: '#contato' },
  ],
  stack: [
    { group: 'linguagens', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP', 'Ruby', 'Go', 'GDScript'] },
    { group: 'backend', items: ['Node.js', 'Ruby on Rails', 'PHP (Zend, CakePHP)', 'Flutter', 'REST', 'SQL'] },
    { group: 'dados', items: ['PostgreSQL', 'MariaDB', 'MySQL'] },
    { group: 'infra', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Nginx', 'Linux'] },
    { group: 'ferramentas', items: ['Git', 'n8n', 'Twilio', 'WhatsApp API', 'Zendesk', 'Jira', 'Godot'] },
  ],
  education: {
    degree: 'Bacharel em Ciência da Computação',
    school: 'Universidade Federal do Piauí',
    url: 'https://ufpi.br',
    period: '2010 – 2014',
    notes: [
      'Iniciação científica em visão computacional: seleção de atributos para detecção de uso de capacete por motociclistas.',
      'Monitoria.',
    ],
  },
  testimonial: {
    quote:
      'Thiago e eu trabalhamos juntos há algum tempo, e ele continuamente me surpreende com sua organização e mitigação de riscos em nossos projetos. Definitivamente, um dos melhores programadores que já conheci.',
    author: 'Renan Tourinho',
    role: 'COO, supervisionou Thiago na Expandr',
  },
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
