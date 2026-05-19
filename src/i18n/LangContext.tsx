import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from './en'
import type { Dict } from './en'
import { hr } from './hr'

export type Lang = 'en' | 'hr'

const dicts: Record<Lang, Dict> = { en, hr }

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const LangContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'portfolio.lang'

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (stored === 'en' || stored === 'hr') return stored
  return navigator.language?.toLowerCase().startsWith('hr') ? 'hr' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useT must be used within LangProvider')
  return ctx.t
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return { lang: ctx.lang, setLang: ctx.setLang }
}
