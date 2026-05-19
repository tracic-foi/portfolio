import { skills } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <h2 className="section-title">
          <span className="section-number">04.</span> Skills
        </h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.group}>
              <p className={styles.groupTitle}>{group}</p>
              <div className={styles.chips}>
                {items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
