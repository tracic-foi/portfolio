import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 22 })
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 22 })
  const isHover = useRef(false)
  const ringScale = useMotionValue(1)
  const ringScaleSpring = useSpring(ringScale, { stiffness: 250, damping: 20 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return

    document.body.classList.add('cursor-custom')

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="hover"]')) {
        isHover.current = true
        ringScale.set(1.8)
      }
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="hover"]')) {
        isHover.current = false
        ringScale.set(1)
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)

    return () => {
      document.body.classList.remove('cursor-custom')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [cursorX, cursorY, ringScale])

  return (
    <>
      {/* dot */}
      <motion.div
        className={styles.dot}
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* ring */}
      <motion.div
        className={styles.ring}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', scale: ringScaleSpring }}
      />
    </>
  )
}
