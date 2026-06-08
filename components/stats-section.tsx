'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stagger, fadeUp, vp } from '@/lib/motion'

// ── Count-up hook ─────────────────────────────────────────────────────────

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    setValue(0)
    const start = performance.now()

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(tick)
      else setValue(target)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return value
}

// ── Individual stat card ──────────────────────────────────────────────────

function StatCard({
  n, suffix, label, description, accent = false,
}: {
  n: number; suffix: string; label: string; description: string; accent?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const count = useCountUp(n, inView)

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center group">
      <p
        className="text-5xl md:text-6xl font-light mb-2 tabular-nums"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className={accent ? 'text-[var(--brand-red)]' : 'text-accent'}>
          {count}{suffix}
        </span>
      </p>
      <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2">{label}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────

const statsData = [
  { n: 3000, suffix: '+',  label: 'Tattoos Done',      description: 'From intricate designs to bold statements', accent: true  },
  { n: 5,    suffix: '+',  label: 'Certified Artists', description: 'Masters of their craft',                   accent: false },
  { n: 100,  suffix: '%',  label: 'Safe & Hygienic',   description: 'Studio-grade sterilization',               accent: false },
  { n: 7,    suffix: '/7', label: 'Days Available',    description: 'Open 7 days a week for you',               accent: false },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-background border-t border-b border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ink-line entering animation */}
        <motion.div
          className="h-px mx-auto mb-14"
          style={{ background: 'var(--brand-red)' }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '3.5rem', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
