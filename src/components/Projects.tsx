import type { CSSProperties, ReactElement } from 'react'
import { motion } from 'framer-motion'
import type { ProjectId } from '../data'
import { projectMeta } from '../data'
import { useT } from '../i18n/LangContext'
import FadeIn from './FadeIn'
import styles from './Projects.module.css'

const icons: Record<ProjectId, ReactElement> = {
  web: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  mobile: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  renderer: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  game: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M6 9H4a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-4a2 2 0 0 0-2-2h-2" />
      <path d="M6 9V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
    </svg>
  ),
}

export default function Projects() {
  const t = useT()
  return (
    <section id="projects">
      <div className="section-wrap">
        <FadeIn>
          <h2 className="section-title">{t.projects.title}</h2>
        </FadeIn>
        <div className={styles.grid}>
          {projectMeta.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.card}
              style={{ '--card-color': p.color } as CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              data-cursor="hover"
            >
              <div className={styles.cardTop}>
                <span className={styles.icon}>{icons[p.id]}</span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3 className={styles.title}>{t.projects.items[p.id].title}</h3>
              <p className={styles.description}>{t.projects.items[p.id].description}</p>
              <div className={styles.tech}>
                {p.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
