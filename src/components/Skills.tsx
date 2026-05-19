import { motion } from 'framer-motion'
import { skillGroups } from '../data'
import { useT } from '../i18n/LangContext'
import FadeIn from './FadeIn'
import styles from './Skills.module.css'

const chipStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const chipItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

type GroupKey = keyof ReturnType<typeof useT>['skills']['groups']

export default function Skills() {
  const t = useT()
  return (
    <section id="skills" style={{ background: 'var(--light-navy)' }}>
      <div className="section-wrap">
        <FadeIn>
          <h2 className="section-title">{t.skills.title}</h2>
        </FadeIn>
        <div className={styles.grid}>
          {Object.entries(skillGroups).map(([group, items], gi) => (
            <FadeIn key={group} delay={gi * 0.08}>
              <div className={styles.group}>
                <p className={styles.groupTitle}>{t.skills.groups[group as GroupKey]}</p>
                <motion.div
                  className={styles.chips}
                  variants={chipStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {items.map((skill) => (
                    <motion.span key={skill} variants={chipItem} className="tag">
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
