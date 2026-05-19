import { useLang } from '../i18n/LangContext'
import type { Lang } from '../i18n/LangContext'
import styles from './LangToggle.module.css'

const options: Lang[] = ['en', 'hr']

export default function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className={styles.wrap} role="radiogroup" aria-label="Language">
      {options.map((opt) => (
        <button
          key={opt}
          className={`${styles.opt} ${lang === opt ? styles.active : ''}`}
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          data-cursor="hover"
        >
          {opt.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
