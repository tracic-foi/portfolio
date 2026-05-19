import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { personal } from '../data'
import { useT } from '../i18n/LangContext'
import styles from './Hero.module.css'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Hero() {
  const t = useT()
  const phrases = t.hero.phrases
  const [phraseIdx, setPhraseIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIdx((i) => (i + 1) % phrases.length)
    }, 2800)
    return () => clearInterval(id)
  }, [phrases.length])

  useEffect(() => {
    setPhraseIdx(0)
  }, [phrases])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          style={{ maxWidth: 640 }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p className={styles.greeting} variants={item}>{t.hero.greeting}</motion.p>
          <motion.h1 className={styles.name} variants={item}>{personal.name}.</motion.h1>
          <motion.h2 className={styles.tagline} variants={item}>
            {t.hero.taglinePrefix}{' '}
            <span className={styles.rotator}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIdx}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' as const }}
                  className={styles.rotatorWord}
                >
                  {phrases[phraseIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h2>
          <motion.p className={styles.description} variants={item}>
            {t.hero.description}
          </motion.p>
          <motion.div className={styles.ctas} variants={item}>
            <a href="#projects" className={styles.btnPrimary} data-cursor="hover">{t.hero.viewWork}</a>
            <a href={`mailto:${personal.email}`} className={styles.btnOutline} data-cursor="hover">{t.hero.getInTouch}</a>
            <a
              href={`${import.meta.env.BASE_URL}${personal.resumeFile}`}
              download
              className={styles.btnGhost}
              data-cursor="hover"
            >
              {t.hero.downloadCV}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
