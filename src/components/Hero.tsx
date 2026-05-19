import { personal } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
<p className={styles.greeting}>Hi, my name is</p>
      <h1 className={styles.name}>{personal.name}.</h1>
      <h2 className={styles.tagline}>{personal.tagline}</h2>
      <p className={styles.description}>{personal.description}</p>
      <div className={styles.ctas}>
        <a href="#projects" className={styles.btnPrimary}>View My Work</a>
        <a href={`mailto:${personal.email}`} className={styles.btnOutline}>Get In Touch</a>
      </div>
    </section>
  )
}
