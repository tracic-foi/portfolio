import { useEffect, useState } from 'react'
import { useT } from '../i18n/LangContext'
import LangToggle from './LangToggle'
import ThemeToggle from './ThemeToggle'
import styles from './Navbar.module.css'

const SECTION_IDS = ['about', 'now', 'experience', 'projects', 'skills', 'contact'] as const

export default function Navbar() {
  const t = useT()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  const navLinks = [
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.now, href: '#now', id: 'now' },
    { label: t.nav.experience, href: '#experience', id: 'experience' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo} data-cursor="hover">TR</a>

        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.right} ${open ? styles.open : ''}`}>
          <ul className={styles.links}>
            {navLinks.map(({ label, href, id }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={activeId === id ? styles.active : ''}
                  data-cursor="hover"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.toggles}>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
