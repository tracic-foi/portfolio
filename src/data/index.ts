export const personal = {
  name: 'Tin Račić',
  role: 'Full-Stack Developer',
  tagline: 'I build things for the web.',
  description:
    "I'm a software developer based in Croatia, currently a participant at the Sofascore Frontend Academy. I enjoy crafting clean UIs and robust backends — from WebSocket messaging systems to 3D renderers with custom GLSL shaders.",
  email: 'tin.racic@gmail.com',
  github: 'https://github.com/tracic-foi',
  linkedin: 'https://linkedin.com/in/tin-racic',
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Sofascore Academy',
    role: 'Academy Participant',
    period: '2026 – Present',
    location: 'Zagreb, Croatia',
    bullets: [
      'Selected participant in a competitive frontend academy focused on modern web development.',
      'Working with React, TypeScript, modern JavaScript, and frontend architecture.',
      'Collaborating with mentors and engineers from Sofascore on real-world projects and challenges.',
    ],
    tech: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    company: 'Uvea',
    role: 'Software Engineer',
    period: 'Aug 2024 – Sept 2025',
    location: 'Zagreb, Croatia',
    bullets: [
      'Architected a real-time, secure WebSocket messaging system for private, group, and thematic chats.',
      'Developed advanced modules for End-to-End Encryption (E2EE) and on-the-fly message translation.',
      'Designed and implemented RESTful APIs with Django Rest Framework for complex data flow.',
      'Improved API response times by an estimated 25–40% by resolving N+1 query issues in Django ORM.',
    ],
    tech: ['Python', 'Django', 'WebSockets', 'E2EE', 'REST API'],
  },
  {
    company: 'Zen Zone Media',
    role: 'Web Developer',
    period: 'Aug 2023 – Jul 2024',
    location: 'Zagreb, Croatia',
    bullets: [
      'Developed Next.js frontend features with Chakra UI and SWR for data fetching from Django.',
      'Managed code versions using Git workflows (PRs, code reviews) and participated in Agile/Scrum.',
      'Contributed to database optimizations that reduced page load times by 20% on key data-heavy pages.',
    ],
    tech: ['Next.js', 'Chakra UI', 'SWR', 'Django', 'Git'],
  },
]

export interface ProjectItem {
  title: string
  year: string
  description: string
  tech: string[]
  iconKey: 'web' | 'mobile' | 'renderer' | 'game'
  color: string
  github?: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Full-Stack Web Application',
    year: '2025',
    iconKey: 'web',
    color: '#38bdf8',
    description:
      'Full-stack platform using Angular and Nest.js (TypeScript). Designed REST APIs and relational database models for user management, authentication, and reporting. Integrated the TMDB API for third-party data.',
    tech: ['Angular', 'TypeScript', 'Nest.js', 'REST API'],
  },
  {
    title: 'Android & Desktop Apps',
    year: '2025',
    iconKey: 'mobile',
    color: '#4ade80',
    description:
      'Interconnected Android (Kotlin) and Desktop (C#/.NET) apps sharing a unified web service and database, implementing real-time sync and CRUD. Translated Figma prototypes into pixel-perfect UIs.',
    tech: ['Kotlin', 'C#', '.NET', 'Android Studio', 'Figma'],
  },
  {
    title: '3D Scene Renderer',
    year: '2024',
    iconKey: 'renderer',
    color: '#fb923c',
    description:
      'Custom 3D rendering engine implementing the camera/perspective matrix pipeline. Translated the Phong reflection model into custom GLSL shaders and applied texture mapping with UV coordinates.',
    tech: ['Python', 'PyOpenGL', 'Pygame', 'GLSL'],
  },
  {
    title: 'MMORPG SpriteStacking Game',
    year: '2023',
    iconKey: 'game',
    color: '#f472b6',
    description:
      'Core game systems for animation, sprite stacking, and multiplayer interaction. Built the backend with database support and web services handling player data and networking.',
    tech: ['C#', 'PyGame', 'PostgreSQL', 'REST API', 'SQL'],
  },
]

export const heroPhrases = ['for the web.', 'for mobile.', 'for games.', 'with care.']

export const skills: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Kotlin', 'Dart', 'SQL', 'GLSL', 'Java'],
  Frontend: ['React', 'Angular', 'Next.js', 'Chakra UI', 'SWR', 'Figma'],
  Backend: ['.NET', 'Django', 'Nest.js', 'RESTful APIs', 'WebSockets'],
  Tools: ['Git', 'Docker', 'AWS', 'Linux', 'PostgreSQL', 'MySQL', 'Android Studio'],
}
