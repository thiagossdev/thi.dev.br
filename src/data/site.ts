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
  nav: ['about', 'experience', 'projects', 'stack', 'otaku', 'contact'],
  // Baseado no levantamento dos projetos próprios e de trabalho (out/2026), sem cursos.
  stack: [
    { group: 'languages', icon: 'code', items: ['TypeScript', 'Java', 'Kotlin', 'PHP', 'Ruby', 'Python', 'JavaScript', 'Go', 'Rust', 'GDScript', 'SQL'] },
    { group: 'frontend', icon: 'layout', items: ['Angular', 'Angular Material', 'Hotwire', 'Tailwind CSS', 'Storybook', 'Vite', 'React', 'Livewire'] },
    { group: 'backend', icon: 'server', items: ['Ruby on Rails', 'Spring Boot', 'CakePHP', 'Laminas', 'Laravel', 'NestJS', 'Express', 'FastAPI', 'Flask', 'Struts 2'] },
    { group: 'mobile', icon: 'smartphone', items: ['Android', 'Jetpack Compose', 'Room', 'Koin', 'Firebase', 'Tauri', 'Godot'] },
    { group: 'data', icon: 'database', items: ['MySQL', 'PostgreSQL', 'SQLite', 'DynamoDB', 'Redis', 'Prisma', 'Doctrine'] },
    { group: 'infra', icon: 'cloud', items: ['AWS Lambda', 'AWS CDK', 'S3', 'SQS', 'CodeBuild', 'Serverless Framework', 'Docker', 'Kamal', 'Kubernetes', 'Argo CD', 'GitHub Actions', 'GitLab CI'] },
    { group: 'testing', icon: 'flask', items: ['Playwright', 'Vitest', 'Jest', 'JUnit', 'PHPUnit', 'Capybara', 'GUT', 'k6'] },
    { group: 'tools', icon: 'wrench', items: ['zsh', 'Git', 'mise', 'pnpm', 'Rollbar', 'Twilio', 'WhatsApp API', 'Zendesk', 'Jira'] },
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
  Kotlin: 'var(--t-magenta)',
  Go: 'var(--t-cyan)',
  Rust: 'var(--t-orange)',
  PHP: 'var(--t-blue)',
  JavaScript: 'var(--t-yellow)',
  Java: 'var(--t-orange)',
  Python: 'var(--t-magenta)',
};
