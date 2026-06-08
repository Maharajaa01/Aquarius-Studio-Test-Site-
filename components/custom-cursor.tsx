'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function CursorInner() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)

  const dotX = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.25 })
  const dotY = useSpring(my, { stiffness: 300, damping: 30, mass: 0.25 })
  const ringX = useSpring(mx, { stiffness: 90,  damping: 20, mass: 0.5 })
  const ringY = useSpring(my, { stiffness: 90,  damping: 20, mass: 0.5 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
    }
    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)
    const onCheck  = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHovering(!!el?.closest('a, button, [role="button"], [data-cursor="hover"]'))
    }

    document.addEventListener('mousemove', onMove,  { passive: true })
    document.addEventListener('mousemove', onCheck, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousemove', onCheck)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mx, my])

  return (
    <>
      {/* ── Inner dot ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          width: 6, height: 6,
          background: 'var(--brand-red)',
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
        }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />

      {/* ── Outer ring ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border"
        style={{
          width: 36, height: 36,
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.65 : 1,
          borderColor: hovering ? 'var(--brand-red)' : 'rgba(255,255,255,0.28)',
        }}
        transition={{ duration: 0.22 }}
      />
    </>
  )
}

export default function CustomCursor() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) {
      setShow(true)
      document.documentElement.classList.add('custom-cursor')
    }
    return () => {
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  return show ? <CursorInner /> : null
}
