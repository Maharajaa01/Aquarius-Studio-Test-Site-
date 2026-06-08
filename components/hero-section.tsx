'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useMagnetic } from '@/hooks/use-magnetic'

const R   = 'var(--brand-red)'
const RGB = '196, 30, 58'

// ── Animation variants ───────────────────────────────────────────────────

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const revealUp = {
  hidden:  { opacity: 0, y: 72 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] as const } },
}

function fadeUp(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }
}

const stats = [
  { value: '3000+', label: 'Tattoos Done',   accent: true  },
  { value: '5+',    label: 'Master Artists', accent: false },
  { value: '100%',  label: 'Safe & Hygienic', accent: false },
]

// ── Component ────────────────────────────────────────────────────────────

export default function HeroSection() {
  const { scrollY } = useScroll()

  // Parallax: background glows drift upward slower than the page
  const glow1Y = useTransform(scrollY, [0, 700], [0, -80])
  const glow2Y = useTransform(scrollY, [0, 700], [0, -40])
  const glow1O = useTransform(scrollY, [0, 500], [1, 0.35])

  // Magnetic hover for primary CTA
  const ctaMag = useMagnetic(0.36)

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden"
    >

      {/* ── BG: primary crimson glow — bottom-left, parallax ── */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          y: glow1Y,
          opacity: glow1O,
          width:  'min(88vw, 980px)',
          height: 'min(88vw, 980px)',
          bottom: '-28%',
          left:   '-22%',
          background: `radial-gradient(circle, rgba(${RGB},0.22) 0%, rgba(${RGB},0.07) 40%, transparent 68%)`,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── BG: secondary glow — top-right, slower parallax ── */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          y: glow2Y,
          width:  'min(58vw, 680px)',
          height: 'min(58vw, 680px)',
          top:   '-18%',
          right: '-14%',
          background: `radial-gradient(circle, rgba(${RGB},0.11) 0%, rgba(${RGB},0.03) 50%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* ── Grain / film-noise texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          opacity: 0.038,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '175px 175px',
        }}
      />

      {/* ── Subtle grid overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Left-edge accent line ── */}
      <div
        aria-hidden="true"
        className="absolute left-6 lg:left-10 top-0 bottom-0 w-px pointer-events-none z-[1] hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)' }}
      />

      {/* ── SVG: ink-draw decorative strokes ── */}
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 w-full h-full pointer-events-none z-[1]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Long ink stroke — draws itself on load */}
        <motion.path
          d="M 1260 -60 Q 1120 200 1320 450 Q 1450 620 1220 840 Q 1060 970 1140 1080"
          stroke={`rgba(${RGB},0.30)`}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 3.8, delay: 1.2, ease: 'easeInOut' },
            opacity:    { duration: 0.8, delay: 1.2 },
          }}
        />
        {/* Secondary stroke */}
        <motion.path
          d="M 1390 80 Q 1240 300 1400 540"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2.5, delay: 2.2, ease: 'easeInOut' },
            opacity:    { duration: 0.8, delay: 2.2 },
          }}
        />
        {/* Outer circle — draws itself */}
        <motion.circle
          cx="1330" cy="210" r="130"
          stroke={`rgba(${RGB},0.12)`}
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 4.5, delay: 0.8, ease: 'easeInOut' },
            opacity:    { duration: 1, delay: 0.8 },
          }}
        />
        {/* Inner circle */}
        <motion.circle
          cx="1330" cy="210" r="68"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 3.5, delay: 1.5, ease: 'easeInOut' },
            opacity:    { duration: 1, delay: 1.5 },
          }}
        />
      </svg>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-36 pb-24 lg:pt-44 lg:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-center">

          {/* Left column */}
          <div className="flex-1 lg:pr-20">

            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-10">
              <div className="h-px w-10 flex-shrink-0" style={{ background: R }} />
              <span className="text-[0.58rem] tracking-[0.40em] uppercase text-white/40 font-light">
                Jayanagar · Bangalore · Est. 2019
              </span>
            </motion.div>

            {/* Headline — staggered mask-reveal */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <h1>
                <div className="overflow-hidden">
                  <motion.span
                    variants={revealUp}
                    className="block leading-[0.90] font-light text-white"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(3.2rem, 8.2vw, 8.4rem)',
                    }}
                  >
                    Where Skin
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    variants={revealUp}
                    className="block leading-[0.90] font-semibold text-white"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(3.2rem, 8.2vw, 8.4rem)',
                    }}
                  >
                    Becomes Art<span style={{ color: R }}>.</span>
                  </motion.span>
                </div>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.88)}
              className="mt-8 text-white/45 text-[0.95rem] lg:text-[1.02rem] font-light leading-[1.8] max-w-[400px]"
            >
              Premium tattoo &amp; piercing artistry in the heart of Bangalore.
              Every line placed with intention. Every piece, yours forever.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(1.08)} className="mt-10 flex flex-col sm:flex-row gap-4">

              {/* Primary — magnetic */}
              <motion.div
                ref={ctaMag.ref}
                animate={{ x: ctaMag.offset.x, y: ctaMag.offset.y }}
                transition={{ type: 'spring', stiffness: 180, damping: 16, mass: 0.1 }}
                onMouseMove={ctaMag.onMouseMove}
                onMouseLeave={ctaMag.onMouseLeave}
                className="inline-flex"
              >
                <Link
                  href="#contact"
                  className="group hero-cta-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.65rem] tracking-[0.26em] uppercase font-medium text-white"
                  style={{ background: R }}
                >
                  <span>Book Your Session</span>
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                  />
                </Link>
              </motion.div>

              {/* Secondary */}
              <Link
                href="/gallery"
                className="hero-cta-secondary inline-flex items-center justify-center px-8 py-4 text-[0.65rem] tracking-[0.26em] uppercase font-medium text-white/60 hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.17)' }}
              >
                View Portfolio
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(1.32)}
              className="mt-14 pt-8 grid grid-cols-3 gap-8 max-w-[380px]"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[2.1rem] lg:text-[2.5rem] font-light leading-none"
                    style={{ fontFamily: 'var(--font-display)', color: s.accent ? R : 'white' }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[0.56rem] tracking-[0.32em] uppercase text-white/32">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — placeholder circle (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
          >
            <div className="relative">

              {/* Breathing outer glow */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ transform: 'scale(1.2)' }}
                animate={{
                  boxShadow: [
                    `0 0 60px rgba(${RGB},0.18), 0 0 120px rgba(${RGB},0.07)`,
                    `0 0 95px rgba(${RGB},0.30), 0 0 190px rgba(${RGB},0.12)`,
                    `0 0 60px rgba(${RGB},0.18), 0 0 120px rgba(${RGB},0.07)`,
                  ],
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/*
                ── PLACEHOLDER ──
                When studio images are ready, replace the inner <div> with:
                <Image src="/studio-portrait.jpg" fill className="object-cover" alt="Studio" />
              */}
              <div
                className="relative w-[300px] h-[300px] xl:w-[355px] xl:h-[355px] rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(148deg, rgba(${RGB},0.10) 0%, rgba(0,0,0,0.65) 55%, rgba(${RGB},0.04) 100%)`,
                  border: `1px solid rgba(${RGB},0.20)`,
                }}
              >
                <div className="flex flex-col items-center gap-3 select-none">
                  <span
                    className="text-[5rem] leading-none font-light"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: `rgba(255,255,255,0.055)` }}
                  >
                    A
                  </span>
                  <div className="h-px w-9" style={{ background: `rgba(${RGB},0.25)` }} />
                  <p className="text-[0.52rem] tracking-[0.38em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>
                    Studio · Work
                  </p>
                </div>
              </div>

              {/* Glowing accent dot */}
              <motion.div
                className="absolute top-4 right-5 w-2.5 h-2.5 rounded-full"
                style={{ background: R, boxShadow: `0 0 16px rgba(${RGB},0.95)` }}
                animate={{ scale: [1, 1.55, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Hollow ring dot */}
              <motion.div
                className="absolute bottom-9 left-2.5 w-2 h-2 rounded-full"
                style={{ border: `1.5px solid rgba(${RGB},0.45)` }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.45, 0.78, 0.45] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — animated traveling line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2.5"
      >
        <span className="text-[0.52rem] tracking-[0.48em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>
          Scroll
        </span>
        <div
          className="relative w-px h-12 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <motion.div
            className="absolute left-0 w-full"
            style={{ height: '45%', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.55))' }}
            animate={{ top: ['0%', '160%'] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
