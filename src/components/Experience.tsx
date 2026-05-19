import { useState } from 'react'
import { experience } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  const [active, setActive] = useState(0)
  const item = experience[active]

  return (
    <section id="experience" style={{ background: 'var(--light-navy)' }}>
      <div className="section-wrap">
        <h2 className="section-title">
          Where I've Worked
        </h2>
        <div className={styles.container}>
          <ul className={styles.tabs} role="tablist">
            {experience.map((exp, i) => (
              <li key={exp.company}>
                <button
                  role="tab"
                  aria-selected={active === i}
                  className={`${styles.tab} ${active === i ? styles.active : ''}`}
                  onClick={() => setActive(i)}
                >
                  {exp.company}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.panel} role="tabpanel">
            <h3 className={styles.role}>
              {item.role}{' '}
              <span className={styles.company}>@ {item.company}</span>
            </h3>
            <p className={styles.period}>
              {item.period} · {item.location}
            </p>
            <ul className={styles.bullets}>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className={styles.techRow}>
              {item.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
