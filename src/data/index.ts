export const personal = {
  name: 'Tin Račić',
  email: 'tin.racic@gmail.com',
  github: 'https://github.com/tracic-foi',
  linkedin: 'https://linkedin.com/in/tin-racic',
  resumeFile: 'CV_Tin_Racic.pdf',
}

export type ExperienceId = 'sofascore' | 'uvea' | 'zen'

export interface ExperienceMeta {
  id: ExperienceId
  company: string
  tech: string[]
}

export const experienceMeta: ExperienceMeta[] = [
  {
    id: 'sofascore',
    company: 'Sofascore Academy',
    tech: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'uvea',
    company: 'Uvea',
    tech: ['Python', 'Django', 'WebSockets', 'E2EE', 'REST API'],
  },
  {
    id: 'zen',
    company: 'Zen Zone Media',
    tech: ['Next.js', 'Chakra UI', 'SWR', 'Django', 'Git'],
  },
]

export type ProjectId = 'web' | 'mobile' | 'renderer' | 'game'

export interface ProjectMeta {
  id: ProjectId
  year: string
  color: string
  tech: string[]
}

export const projectMeta: ProjectMeta[] = [
  { id: 'web', year: '2025', color: '#38bdf8', tech: ['Angular', 'TypeScript', 'Nest.js', 'REST API'] },
  { id: 'mobile', year: '2025', color: '#4ade80', tech: ['Kotlin', 'C#', '.NET', 'Android Studio', 'Figma'] },
  { id: 'renderer', year: '2024', color: '#fb923c', tech: ['Python', 'PyOpenGL', 'Pygame', 'GLSL'] },
  { id: 'game', year: '2023', color: '#f472b6', tech: ['C#', 'PyGame', 'PostgreSQL', 'REST API', 'SQL'] },
]

export const skillGroups: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Kotlin', 'Dart', 'SQL', 'GLSL', 'Java'],
  Frontend: ['React', 'Angular', 'Next.js', 'Chakra UI', 'SWR', 'Figma'],
  Backend: ['.NET', 'Django', 'Nest.js', 'RESTful APIs', 'WebSockets'],
  Tools: ['Git', 'Docker', 'AWS', 'Linux', 'PostgreSQL', 'MySQL', 'Android Studio'],
}
