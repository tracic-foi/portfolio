import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroPhrases, personal } from '../data'
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
  const [phraseIdx, setPhraseIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIdx((i) => (i + 1) % heroPhrases.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.content}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p className={styles.greeting} variants={item}>Hi, my name is</motion.p>
        <motion.h1 className={styles.name} variants={item}>{personal.name}.</motion.h1>
        <motion.h2 className={styles.tagline} variants={item}>
          I build things{' '}
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
                {heroPhrases[phraseIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h2>
        <motion.p className={styles.description} variants={item}>
          {personal.description}
        </motion.p>
        <motion.div className={styles.ctas} variants={item}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href={`mailto:${personal.email}`} className={styles.btnOutline}>Get In Touch</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
