import { personal } from '../data'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a software developer based in Croatia with a strong foundation in full-stack
              development. I'm currently a selected participant at the{' '}
              <strong>Sofascore Frontend Academy</strong>, where I work alongside mentors and
              engineers on real-world projects using React, TypeScript, and modern frontend
              architecture.
            </p>
            <p>
              I hold a <strong>Bachelor's degree in Informatics</strong> from the Faculty of
              Organization and Informatics, University of Zagreb. My background spans web, desktop,
              and mobile — from architecting secure WebSocket messaging systems at Uvea to
              building a 3D renderer with custom GLSL shaders from scratch.
            </p>
            <p>
              I like working across the whole stack and care deeply about clean code, good UX,
              and shipping things that actually work. Outside of coding, you'll find me at
              the gym, hiking, or cooking.
            </p>
          </div>

          <div className={styles.sidebar}>
            <div>
              <p className={styles.sideTitle}>Education</p>
              <div className={styles.eduCard}>
                <p className={styles.eduInst}>Faculty of Organization and Informatics</p>
                <p className={styles.eduDeg}>Bachelor of Informatics</p>
                <p className={styles.eduYear}>University of Zagreb · 2026</p>
              </div>
            </div>

            <div>
              <p className={styles.sideTitle}>Links</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <GithubIcon /> GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <LinkedinIcon /> LinkedIn
                </a>
                <a href={`mailto:${personal.email}`} className={styles.socialLink}>
                  <MailIcon /> {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
