import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experienceMeta } from '../data'
import { useT } from '../i18n/LangContext'
import FadeIn from './FadeIn'
import styles from './Experience.module.css'

export default function Experience() {
  const t = useT()
  const [active, setActive] = useState(0)
  const meta = experienceMeta[active]

  return (
    <section id="experience" style={{ background: 'var(--light-navy)' }}>
      <div className="section-wrap">
        <FadeIn>
          <h2 className="section-title">{t.experience.title}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className={styles.container}>
            <ul className={styles.tabs} role="tablist">
              {experienceMeta.map((exp, i) => (
                <li key={exp.id}>
                  <button
                    role="tab"
                    aria-selected={active === i}
                    className={`${styles.tab} ${active === i ? styles.active : ''}`}
                    onClick={() => setActive(i)}
                    data-cursor="hover"
                  >
                    {exp.company}
                  </button>
                </li>
              ))}
            </ul>

            <div className={styles.panel} role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <h3 className={styles.role}>
                    {t.experience.roles[meta.id]}{' '}
                    <span className={styles.company}>@ {meta.company}</span>
                  </h3>
                  <p className={styles.period}>
                    {t.experience.periods[meta.id]} · {t.experience.locations[meta.id]}
                  </p>
                  <ul className={styles.bullets}>
                    {t.experience.bullets[meta.id].map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className={styles.techRow}>
                    {meta.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
