import { projects } from '../data'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <h2 className="section-title">
          <span className="section-number">03.</span> Things I've Built
        </h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <FolderIcon />
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
              <div className={styles.tech}>
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FolderIcon() {
  return (
    <svg
      className={styles.folderIcon}
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}
