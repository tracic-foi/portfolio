import { motion } from 'framer-motion'
import { useT } from '../i18n/LangContext'
import FadeIn from './FadeIn'
import styles from './Now.module.css'

export default function Now() {
  const t = useT()

  return (
    <section id="now">
      <div className="section-wrap">
        <FadeIn>
          <h2 className="section-title">{t.now.title}</h2>
          <p className={styles.subtitle}>{t.now.subtitle}</p>
        </FadeIn>
        <div className={styles.grid}>
          {t.now.items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07}>
              <div className={styles.card}>
                <div className={styles.dot}>
                  {i === 0 && (
                    <motion.span
                      className={styles.pulse}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </div>
                <div>
                  <p className={styles.label}>{item.label}</p>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
