export interface NowItem {
  label: string
  text: string
}

export interface Dict {
  nav: { about: string; now: string; experience: string; projects: string; skills: string; contact: string }
  hero: { greeting: string; taglinePrefix: string; phrases: string[]; description: string; viewWork: string; getInTouch: string; downloadCV: string }
  about: { title: string; p1prefix: string; p1highlight: string; p1suffix: string; p2prefix: string; p2highlight: string; p2suffix: string; p3: string; education: string; eduInstitution: string; eduDegree: string; eduMeta: string; links: string; resume: string }
  now: { title: string; subtitle: string; items: NowItem[] }
  experience: {
    title: string
    locations: { sofascore: string; uvea: string; zen: string }
    roles: { sofascore: string; uvea: string; zen: string }
    periods: { sofascore: string; uvea: string; zen: string }
    bullets: { sofascore: string[]; uvea: string[]; zen: string[] }
  }
  projects: {
    title: string
    items: { web: { title: string; description: string }; mobile: { title: string; description: string }; renderer: { title: string; description: string }; game: { title: string; description: string } }
  }
  skills: { title: string; groups: { Languages: string; Frontend: string; Backend: string; Tools: string } }
  contact: { overline: string; title: string; body: string; cta: string; footer: string }
}

export const en: Dict = {
  nav: {
    about: 'About',
    now: 'Now',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, my name is',
    taglinePrefix: 'I build things',
    phrases: ['for the web.', 'for mobile.', 'for games.', 'with care.'],
    description:
      "I'm a software developer based in Croatia, currently a participant at the Sofascore Frontend Academy. I enjoy crafting clean UIs and robust backends — from WebSocket messaging systems to 3D renderers with custom GLSL shaders.",
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    downloadCV: 'Download CV',
  },
  about: {
    title: 'About Me',
    p1prefix: "I'm a software developer based in Croatia with a strong foundation in full-stack development. I'm currently a selected participant at the ",
    p1highlight: 'Sofascore Frontend Academy',
    p1suffix: ', where I work alongside mentors and engineers on real-world projects using React, TypeScript, and modern frontend architecture.',
    p2prefix: 'I hold a ',
    p2highlight: "Bachelor's degree in Informatics",
    p2suffix: ' from the Faculty of Organization and Informatics, University of Zagreb. My background spans web, desktop, and mobile — from architecting secure WebSocket messaging systems at Uvea to building a 3D renderer with custom GLSL shaders from scratch.',
    p3: "I like working across the whole stack and care deeply about clean code, good UX, and shipping things that actually work. Outside of coding, you'll find me at the gym, hiking, or cooking.",
    education: 'Education',
    eduInstitution: 'Faculty of Organization and Informatics',
    eduDegree: 'Bachelor of Informatics',
    eduMeta: 'University of Zagreb · 2026',
    links: 'Links',
    resume: 'Download Resume',
  },
  now: {
    title: 'Right Now',
    subtitle: "A snapshot of what I'm up to.",
    items: [
      { label: 'Frontend Academy', text: 'Participating in the Sofascore Frontend Academy' },
      { label: 'Learning', text: 'Going deep on React patterns, TypeScript, and frontend architecture' },
      { label: 'Building', text: 'This portfolio — Vite + React + TS + Three.js' },
      { label: 'Reading', text: 'Refactoring UI and Designing Data-Intensive Applications' },
    ],
  },
  experience: {
    title: "Where I've Worked",
    locations: { sofascore: 'Zagreb, Croatia', uvea: 'Zagreb, Croatia', zen: 'Zagreb, Croatia' },
    roles: { sofascore: 'Academy Participant', uvea: 'Software Engineer', zen: 'Web Developer' },
    periods: { sofascore: '2026 – Present', uvea: 'Aug 2024 – Sept 2025', zen: 'Aug 2023 – Jul 2024' },
    bullets: {
      sofascore: [
        'Selected participant in a competitive frontend academy focused on modern web development.',
        'Working with React, TypeScript, modern JavaScript, and frontend architecture.',
        'Collaborating with mentors and engineers from Sofascore on real-world projects and challenges.',
      ],
      uvea: [
        'Architected a real-time, secure WebSocket messaging system for private, group, and thematic chats.',
        'Developed advanced modules for End-to-End Encryption (E2EE) and on-the-fly message translation.',
        'Designed and implemented RESTful APIs with Django Rest Framework for complex data flow.',
        'Improved API response times by an estimated 25–40% by resolving N+1 query issues in Django ORM.',
      ],
      zen: [
        'Developed Next.js frontend features with Chakra UI and SWR for data fetching from Django.',
        'Managed code versions using Git workflows (PRs, code reviews) and participated in Agile/Scrum.',
        'Contributed to database optimizations that reduced page load times by 20% on key data-heavy pages.',
      ],
    },
  },
  projects: {
    title: "Things I've Built",
    items: {
      web: { title: 'Full-Stack Web Application', description: 'Full-stack platform using Angular and Nest.js (TypeScript). Designed REST APIs and relational database models for user management, authentication, and reporting. Integrated the TMDB API for third-party data.' },
      mobile: { title: 'Android & Desktop Apps', description: 'Interconnected Android (Kotlin) and Desktop (C#/.NET) apps sharing a unified web service and database, implementing real-time sync and CRUD. Translated Figma prototypes into pixel-perfect UIs.' },
      renderer: { title: '3D Scene Renderer', description: 'Custom 3D rendering engine implementing the camera/perspective matrix pipeline. Translated the Phong reflection model into custom GLSL shaders and applied texture mapping with UV coordinates.' },
      game: { title: 'MMORPG SpriteStacking Game', description: 'Core game systems for animation, sprite stacking, and multiplayer interaction. Built the backend with database support and web services handling player data and networking.' },
    },
  },
  skills: {
    title: 'Skills',
    groups: { Languages: 'Languages', Frontend: 'Frontend', Backend: 'Backend', Tools: 'Tools' },
  },
  contact: {
    overline: "What's Next?",
    title: 'Get In Touch',
    body: "Whether you have an opportunity, a project idea, or just want to say hi — my inbox is always open. I'll do my best to get back to you!",
    cta: 'Say Hello',
    footer: 'Designed & Built by Tin Račić',
  },
}
