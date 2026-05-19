import './App.css'
import { LangProvider } from './i18n/LangContext'
import { ThemeProvider } from './theme/ThemeContext'
import SmoothScroll from './components/SmoothScroll'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Now from './components/Now'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <SmoothScroll>
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Now />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <BackToTop />
        </SmoothScroll>
      </LangProvider>
    </ThemeProvider>
  )
}

export default App
