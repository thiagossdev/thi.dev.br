import type { Locale } from './config';

const en = {
  meta: {
    title: 'Thiago Sousa Santos · full stack developer',
    description:
      'Full stack developer from Teresina, Brazil. Systems Analyst at RevGás. BSc in Computer Science from UFPI.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Home',
    sections: 'Sections',
    social: 'Social links',
    language: 'Language',
    technologies: 'Technologies',
    until: 'to',
    photo: 'Photo of Thiago Sousa Santos',
  },
  nav: { about: 'about', experience: 'experience', projects: 'projects', stack: 'stack', contact: 'contact' },
  hero: {
    taglines: [
      'full stack developer',
      'systems analyst at RevGás',
      'computer science graduate',
      'gamer since 1992',
      'custom keyboard builder',
    ],
    intro:
      'I have been building web systems for over ten years, from PHP to Kubernetes. I like to understand the problem before writing code, to estimate well and to keep the team flowing.',
    cta: 'see projects',
  },
  about: {
    paragraphs: [
      'I am self-taught and always looking for new knowledge. I enjoy challenges, especially understanding the problem before jumping to a solution.',
      'I like to estimate and organize tasks and to set realistic deadlines. That keeps the work aligned with the team and lets development flow.',
    ],
    current: {
      before: 'Today I work at ',
      after:
        ', on fiscal and management systems for LPG resellers. Before that I was CTO at Expandr for six years, an edtech focused on student acquisition.',
    },
    facts: { location: 'location', languages: 'languages', now: 'now' },
    languagesValue: 'Portuguese, English (B1/B2)',
    nowValue: 'RevGás, since 2021',
    offCode: 'Off the clock',
    hobbies: {
      keyboards: { title: 'keyboards', text: 'I build and customize mechanical keyboards.' },
      games: { title: 'games', text: 'Playing since 1992, and sometimes making my own in Godot.' },
      music: { title: 'music', text: 'Soundtrack for the whole day, coding included.' },
    },
  },
  experience: {
    lead: 'git log --oneline, newest first.',
    present: 'present',
    months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    education: 'education',
    degree: 'BSc in Computer Science',
    educationNotes: [
      'Undergraduate research in computer vision: feature selection for detecting helmet use by motorcyclists.',
      'Teaching assistant.',
    ],
    testimonial: {
      quote:
        'Thiago and I have worked together for a while, and he keeps surprising me with his organization and risk mitigation in our projects. Definitely one of the best programmers I have ever met.',
      role: 'COO, managed Thiago directly at Expandr',
      note: 'Translated from Portuguese.',
    },
  },
  projects: {
    lead: 'A selection. Most of what I build at work has no public repository.',
    work: 'work',
    personal: 'personal',
    more: 'More at',
  },
  stack: {
    lead: 'What I use or have used in production.',
    groups: { languages: 'languages', frontend: 'frontend', backend: 'backend', mobile: 'mobile & desktop', data: 'data', infra: 'infra', testing: 'testing', tools: 'tools' },
  },
  contact: {
    lead: 'Email is the fastest way to reach me. I also reply on LinkedIn.',
    builtWith: 'Built with',
    hostedOn: 'hosted on GitHub Pages.',
    source: 'source code',
  },
};

export type Strings = typeof en;

const ptBr: Strings = {
  meta: {
    title: 'Thiago Sousa Santos · desenvolvedor full stack',
    description:
      'Desenvolvedor full stack em Teresina, PI. Analista de Sistemas na RevGás. Bacharel em Ciência da Computação pela UFPI.',
  },
  a11y: {
    skip: 'Pular para o conteúdo',
    home: 'Início',
    sections: 'Seções',
    social: 'Redes',
    language: 'Idioma',
    technologies: 'Tecnologias',
    until: 'até',
    photo: 'Foto de Thiago Sousa Santos',
  },
  nav: { about: 'sobre', experience: 'experiência', projects: 'projetos', stack: 'stack', contact: 'contato' },
  hero: {
    taglines: [
      'desenvolvedor full stack',
      'analista de sistemas na RevGás',
      'bacharel em ciência da computação',
      'gamer desde 1992',
      'monto teclados custom',
    ],
    intro:
      'Desenvolvo sistemas web há mais de dez anos, de PHP a Kubernetes. Gosto de entender o problema antes de escrever código, de estimar bem e de deixar o time fluir.',
    cta: 'ver projetos',
  },
  about: {
    paragraphs: [
      'Sou autodidata e busco sempre novos conhecimentos. Gosto de desafios, principalmente de entender o problema antes de partir para a solução.',
      'Gosto de estimar e organizar o tempo das tarefas e de estabelecer prazos realistas. Assim alinho o trabalho com a equipe e deixo o desenvolvimento fluir.',
    ],
    current: {
      before: 'Hoje trabalho na ',
      after:
        ', em sistemas fiscais e gerenciais para revendas de GLP. Antes disso fui CTO da Expandr por seis anos, numa edtech de captação de alunos.',
    },
    facts: { location: 'local', languages: 'idiomas', now: 'agora' },
    languagesValue: 'português, inglês (B1/B2)',
    nowValue: 'RevGás, desde 2021',
    offCode: 'Fora do código',
    hobbies: {
      keyboards: { title: 'teclados', text: 'Monto e customizo teclados mecânicos.' },
      games: { title: 'games', text: 'Jogando desde 1992, e às vezes fazendo os meus em Godot.' },
      music: { title: 'música', text: 'Trilha sonora do dia inteiro, código incluso.' },
    },
  },
  experience: {
    lead: 'git log --oneline, do mais recente para o mais antigo.',
    present: 'hoje',
    months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    education: 'formação',
    degree: 'Bacharel em Ciência da Computação',
    educationNotes: [
      'Iniciação científica em visão computacional: seleção de atributos para detecção de uso de capacete por motociclistas.',
      'Monitoria.',
    ],
    testimonial: {
      quote:
        'Thiago e eu trabalhamos juntos há algum tempo, e ele continuamente me surpreende com sua organização e mitigação de riscos em nossos projetos. Definitivamente, um dos melhores programadores que já conheci.',
      role: 'COO, supervisionou Thiago na Expandr',
      note: '',
    },
  },
  projects: {
    lead: 'Uma seleção. A maior parte do que faço no trabalho não tem repositório público.',
    work: 'trabalho',
    personal: 'pessoal',
    more: 'Mais em',
  },
  stack: {
    lead: 'O que uso ou já usei em produção.',
    groups: { languages: 'linguagens', frontend: 'frontend', backend: 'backend', mobile: 'mobile e desktop', data: 'dados', infra: 'infra', testing: 'testes', tools: 'ferramentas' },
  },
  contact: {
    lead: 'O jeito mais rápido é e-mail. Também respondo no LinkedIn.',
    builtWith: 'Feito com',
    hostedOn: 'hospedado no GitHub Pages.',
    source: 'código-fonte',
  },
};

const es: Strings = {
  meta: {
    title: 'Thiago Sousa Santos · desarrollador full stack',
    description:
      'Desarrollador full stack en Teresina, Brasil. Analista de Sistemas en RevGás. Licenciado en Ciencias de la Computación por la UFPI.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    home: 'Inicio',
    sections: 'Secciones',
    social: 'Redes',
    language: 'Idioma',
    technologies: 'Tecnologías',
    until: 'hasta',
    photo: 'Foto de Thiago Sousa Santos',
  },
  nav: { about: 'sobre mí', experience: 'experiencia', projects: 'proyectos', stack: 'stack', contact: 'contacto' },
  hero: {
    taglines: [
      'desarrollador full stack',
      'analista de sistemas en RevGás',
      'licenciado en computación',
      'gamer desde 1992',
      'armo teclados custom',
    ],
    intro:
      'Desarrollo sistemas web desde hace más de diez años, de PHP a Kubernetes. Me gusta entender el problema antes de escribir código, estimar bien y dejar que el equipo fluya.',
    cta: 'ver proyectos',
  },
  about: {
    paragraphs: [
      'Soy autodidacta y siempre busco nuevos conocimientos. Me gustan los desafíos, sobre todo entender el problema antes de pasar a la solución.',
      'Me gusta estimar y organizar el tiempo de las tareas y fijar plazos realistas. Así alineo el trabajo con el equipo y dejo que el desarrollo fluya.',
    ],
    current: {
      before: 'Hoy trabajo en ',
      after:
        ', en sistemas fiscales y de gestión para revendedores de GLP. Antes fui CTO de Expandr durante seis años, una edtech de captación de alumnos.',
    },
    facts: { location: 'ubicación', languages: 'idiomas', now: 'ahora' },
    languagesValue: 'portugués, inglés (B1/B2)',
    nowValue: 'RevGás, desde 2021',
    offCode: 'Fuera del código',
    hobbies: {
      keyboards: { title: 'teclados', text: 'Armo y personalizo teclados mecánicos.' },
      games: { title: 'juegos', text: 'Jugando desde 1992, y a veces haciendo los míos en Godot.' },
      music: { title: 'música', text: 'Banda sonora de todo el día, código incluido.' },
    },
  },
  experience: {
    lead: 'git log --oneline, del más reciente al más antiguo.',
    present: 'hoy',
    months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    education: 'formación',
    degree: 'Licenciatura en Ciencias de la Computación',
    educationNotes: [
      'Iniciación científica en visión por computadora: selección de atributos para detectar el uso de casco en motociclistas.',
      'Ayudantía de cátedra.',
    ],
    testimonial: {
      quote:
        'Thiago y yo trabajamos juntos desde hace tiempo, y él me sorprende continuamente con su organización y su mitigación de riesgos en nuestros proyectos. Sin duda, uno de los mejores programadores que he conocido.',
      role: 'COO, supervisó a Thiago en Expandr',
      note: 'Traducido del portugués.',
    },
  },
  projects: {
    lead: 'Una selección. La mayor parte de lo que hago en el trabajo no tiene repositorio público.',
    work: 'trabajo',
    personal: 'personal',
    more: 'Más en',
  },
  stack: {
    lead: 'Lo que uso o he usado en producción.',
    groups: { languages: 'lenguajes', frontend: 'frontend', backend: 'backend', mobile: 'móvil y escritorio', data: 'datos', infra: 'infra', testing: 'pruebas', tools: 'herramientas' },
  },
  contact: {
    lead: 'El email es la forma más rápida de contactarme. También respondo en LinkedIn.',
    builtWith: 'Hecho con',
    hostedOn: 'alojado en GitHub Pages.',
    source: 'código fuente',
  },
};

export const strings: Record<Locale, Strings> = { en, 'pt-br': ptBr, es };

export function t(locale: Locale): Strings {
  return strings[locale];
}
