'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion'
import { ArrowRight, Compass, Sun, Flower, Skull, Flame } from 'lucide-react'
import { useMagnetic } from '@/hooks/use-magnetic'

// ── Images to rotate in Hero ──
const slides = [
  {
    title: "Divine Vision",
    artist: "Aswin",
    image: "/Images/hero_occult_hands.png",
    details: "All-seeing eye of providence"
  },
  {
    title: "Occult Owl",
    artist: "Aravind",
    image: "/Images/hero_occult_owl.png",
    details: "Minerva's alchemical owl"
  },
  {
    title: "Celestial Deity",
    artist: "Aravind",
    image: "/Images/hero_occult_deity.png",
    details: "Golden multi-armed spiritual deity"
  },
  {
    title: "Occult Wolf",
    artist: "Aswin",
    image: "/Images/hero_occult_wolf.png",
    details: "Sacred geometry wolf guide"
  },
  {
    title: "Sacred Geometry",
    artist: "Aswin",
    image: "/Images/hero_occult_pattern.png",
    details: "Esoteric multi-armed geometric patterns"
  },
  {
    title: "Celestial Call",
    artist: "Aravind",
    image: "/Images/hero_occult_illustration.png",
    details: "Alchemical multi-armed illustration"
  }
]

// ── Rotating headlines list ──
const headlines = [
  "ARCANE ARTISTRY. INKED FOREVER.",
  "SACRED GEOMETRY. SACRED SKIN.",
  "THE SANCTUM OF SACRED INK.",
  "WE DON'T COPY. WE CONSECRATE."
]

// ── Floating sketch designs (minimal inline outlines) ──
const floatingSketches = [
  {
    name: "Mandala Sketch",
    top: "12%",
    left: "5%",
    size: 140,
    rotateSpeed: 100,
    delay: 0,
    svg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-white/5">
        <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="15" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x2 = (50 + 45 * Math.cos(angle)).toFixed(4)
          const y2 = (50 + 45 * Math.sin(angle)).toFixed(4)
          return <line key={i} x1="50" y1="50" x2={x2} y2={y2} />
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180
          const cx = (50 + 30 * Math.cos(angle)).toFixed(4)
          const cy = (50 + 30 * Math.sin(angle)).toFixed(4)
          return <circle key={i} cx={cx} cy={cy} r="6" />
        })}
      </svg>
    )
  },
  {
    name: "Compass Sketch",
    top: "65%",
    left: "15%",
    size: 110,
    rotateSpeed: -140,
    delay: 2,
    svg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-white/5">
        <circle cx="50" cy="50" r="42" />
        <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
        <path d="M50 8L54 42L50 46L46 42L50 8Z" fill="currentColor" className="text-white/5" />
        <path d="M50 92L46 58L50 54L54 58L50 92Z" fill="currentColor" className="text-white/5" />
        <path d="M92 50L58 54L54 50L58 46L92 50Z" fill="currentColor" className="text-white/5" />
        <path d="M8 50L42 46L46 50L42 54L8 50Z" fill="currentColor" className="text-white/5" />
        <circle cx="50" cy="50" r="4" fill="currentColor" className="text-white/10" />
      </svg>
    )
  },
  {
    name: "Skull Sketch",
    top: "22%",
    left: "40%",
    size: 90,
    rotateSpeed: 180,
    delay: 4,
    svg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-white/5">
        <path d="M30 40C30 20 70 20 70 40C70 52 64 56 62 62L60 74H40L38 62C36 56 30 52 30 40Z" />
        <circle cx="42" cy="42" r="5" />
        <circle cx="58" cy="42" r="5" />
        <path d="M47 54L50 50L53 54Z" fill="currentColor" className="text-white/5" />
        <path d="M44 68H56M44 72H56M48 68V74M52 68V74" />
      </svg>
    )
  },
  {
    name: "Rose Sketch",
    top: "75%",
    left: "38%",
    size: 130,
    rotateSpeed: -90,
    delay: 1,
    svg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-white/5">
        <circle cx="50" cy="50" r="8" />
        <path d="M50 42C45 42 42 45 42 50C42 55 45 58 50 58C55 58 58 55 58 50" />
        <path d="M50 34C40 34 34 40 34 50C34 60 40 66 50 66C60 66 66 60 66 50" />
        <path d="M50 26C35 26 26 35 26 50C26 65 35 74 50 74C65 74 74 65 74 50" />
        <path d="M50 74C50 74 46 86 52 94M50 82C38 86 36 90 36 90" />
      </svg>
    )
  },
  {
    name: "Snake Sketch",
    top: "5%",
    left: "26%",
    size: 100,
    rotateSpeed: 120,
    delay: 3,
    svg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-white/5">
        <path d="M50 10C55 10 57 15 50 22C43 29 42 37 50 44C58 51 59 59 50 66C41 73 40 81 50 88C55 92 50 94 48 94" />
        <path d="M50 10L52 6M50 10L48 6" />
        <circle cx="50" cy="10" r="1.5" fill="currentColor" className="text-white/5" />
      </svg>
    )
  }
]

// ── Particle details for canvas smoke ──
class SmokeParticle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  alpha: number
  rotation: number
  rotationSpeed: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 0.3
    this.vy = -0.2 - Math.random() * 0.3
    this.life = 0
    this.maxLife = 150 + Math.random() * 120
    this.size = 40 + Math.random() * 60
    this.alpha = 0.02 + Math.random() * 0.04
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.005
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.rotation += this.rotationSpeed
    this.life++

    const progress = this.life / this.maxLife
    if (progress < 0.25) {
      this.alpha = (progress / 0.25) * 0.06
    } else {
      this.alpha = (1 - progress) * 0.06
    }
    this.size += 0.25
  }
}

// ── Letter Animations for Ink Reveal ──
const letterVariants: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(10px) brightness(0.1) drop-shadow(0 0 12px rgba(197, 168, 92, 0.45))',
    scale: 1.25,
    y: 8
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px) brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))',
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 14
    }
  },
  exit: {
    opacity: 0,
    filter: 'blur(6px) brightness(0.2)',
    scale: 0.9,
    y: -8,
    transition: {
      duration: 0.35,
      ease: 'easeIn'
    }
  }
}

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)
  
  const smokeCanvasRef = useRef<HTMLCanvasElement>(null)
  const ctaMag = useMagnetic(0.35)
  const { scrollY } = useScroll()

  // Parallax transform variables
  const backgroundY = useTransform(scrollY, [0, 900], [0, -120])
  const textParallaxY = useTransform(scrollY, [0, 900], [0, 80])
  const imageParallaxY = useTransform(scrollY, [0, 900], [0, -60])

  // Headline rotation (4 seconds)
  useEffect(() => {
    const headlineTimer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(headlineTimer)
  }, [])

  // Showcase slideshow rotation (4 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(slideTimer)
  }, [])

  // Canvas-based cinematic smoke simulation
  useEffect(() => {
    const canvas = smokeCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const particles: SmokeParticle[] = []
    
    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Spawn new particles slowly
      if (Math.random() < 0.05 && particles.length < 35) {
        const spawnX = Math.random() * canvas.width
        const spawnY = canvas.height + 20
        particles.push(new SmokeParticle(spawnX, spawnY))
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.update()

        if (p.life >= p.maxLife || p.alpha <= 0 || p.y < -50) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        
        // Soft round smoke gradient
        const radGrd = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size)
        radGrd.addColorStop(0, `rgba(20, 20, 20, ${p.alpha})`)
        radGrd.addColorStop(0.5, `rgba(15, 15, 15, ${p.alpha * 0.4})`)
        radGrd.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = radGrd
        ctx.beginPath()
        ctx.arc(0, 0, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[100vh] bg-[#020202] esoteric-crack-bg flex flex-col justify-center items-center overflow-y-auto lg:overflow-hidden z-10 select-none py-16 lg:py-10"
    >
      {/* ── Layer 1: Drifting smoke canvas in background ── */}
      <canvas
        ref={smokeCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[11] opacity-70"
      />

      {/* ── Layer 2: Moving luxury film grain ── */}
      <div className="absolute inset-0 luxury-grain pointer-events-none z-[12]" />

      {/* ── Layer 3: Glowing parallax background blur elements ── */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full blur-[140px] opacity-[0.16] z-[10]"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #C5A85C 0%, transparent 70%)',
          top: '20%',
          left: '20%',
          y: backgroundY
        }}
      />
      
      {/* ── Layer 4: Floating Deities Flanking & Mobile Watermarks (Pro Illuminate Theme) ── */}
      {/* Mobile Occult Deity Watermark (centered behind text on phones/tablets) */}
      <div className="absolute inset-0 flex items-center justify-center lg:hidden opacity-[0.05] pointer-events-none z-[10] mix-blend-screen">
        <img
          src="/Images/hero_occult_deity.png"
          alt="Occult watermark"
          className="w-[320px] aspect-[4/5] object-contain"
        />
      </div>

      {/* Mobile Bottom-Left Deity Frame */}
      <motion.div
        className="absolute left-0 bottom-6 w-[120px] sm:w-[150px] aspect-[4/5] pointer-events-none z-10 mix-blend-screen opacity-[0.16] block lg:hidden"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1.5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="/Images/hero_occult_deity.png"
          alt="Occult Deity Mobile"
          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(197,168,92,0.1)]"
        />
      </motion.div>

      {/* Mobile Bottom-Right Deity Frame */}
      <motion.div
        className="absolute right-0 bottom-6 w-[120px] sm:w-[150px] aspect-[4/5] pointer-events-none z-10 mix-blend-screen opacity-[0.20] block lg:hidden"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -1.5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <img
          src="/Images/hero_occult_pattern.png"
          alt="Occult Pattern Mobile"
          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        />
      </motion.div>

      {/* Left Golden Deity (Desktop & Laptop) */}
      <motion.div
        className="absolute left-[1%] lg:left-[2%] xl:left-[3%] top-[22%] hidden lg:block w-[200px] xl:w-[280px] aspect-[4/5] pointer-events-none z-[13] mix-blend-screen opacity-40 xl:opacity-50"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="/Images/hero_occult_deity.png"
          alt="Occult Deity"
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(197,168,92,0.15)]"
        />
      </motion.div>

      {/* Right Geometric Silhouette (Desktop & Laptop) */}
      <motion.div
        className="absolute right-[1%] lg:right-[2%] xl:right-[3%] top-[22%] hidden lg:block w-[200px] xl:w-[280px] aspect-[4/5] pointer-events-none z-[13] mix-blend-screen opacity-45 xl:opacity-55"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -2, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <img
          src="/Images/hero_occult_pattern.png"
          alt="Occult Geometric Pattern"
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"
        />
      </motion.div>

      {/* ── Layer 5: Slow floating tattoo sketches ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-[11]">
        {floatingSketches.map((sketch, idx) => (
          <motion.div
            key={idx}
            className="absolute hidden md:block"
            style={{
              top: sketch.top,
              left: sketch.left,
              width: sketch.size,
              height: sketch.size
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              rotate: [0, 8, 0]
            }}
            transition={{
              duration: 10 + idx * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sketch.delay
            }}
          >
            {sketch.svg}
          </motion.div>
        ))}
      </div>

      {/* ── CENTERED HERO CONTENT ── */}
      <div className="w-full max-w-5xl mx-auto px-6 text-center relative z-20 flex flex-col items-center">
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-3"
        >
          <div className="h-px w-6 bg-[var(--brand-gold)] opacity-50" />
          {/* Small Occult Symbol in Tagline */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[var(--brand-gold)]">
            <polygon points="12,3 3,20 21,20" />
            <circle cx="12" cy="13" r="2" />
          </svg>
          <span className="text-[0.62rem] tracking-[0.35em] font-bold text-[var(--brand-gold)] uppercase">
            Aquarius Luxury Tattoo Studio
          </span>
          <div className="h-px w-6 bg-[var(--brand-gold)] opacity-50" />
        </motion.div>

        {/* Rotating Headline with Ink Reveal */}
        <div className="min-h-[110px] sm:min-h-[135px] md:min-h-[150px] flex items-center justify-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={headlineIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap gap-x-4 gap-y-1 sm:gap-y-3 justify-center text-center max-w-4xl"
            >
              {headlines[headlineIndex].split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIdx) => {
                    const isSpecial = char === '.' || char === '!' || char === '&'
                    return (
                      <motion.span
                        key={charIdx}
                        variants={letterVariants}
                        className={`inline-block font-black tracking-tight text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[0.95] drop-shadow-[0_0_12px_rgba(197,168,92,0.15)] ${
                          isSpecial ? 'text-[var(--brand-gold)]' : 'text-[#F5F5F5]'
                        }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                        transition={{
                          delay: (wordIdx * 4 + charIdx) * 0.035
                        }}
                      >
                        {char}
                      </motion.span>
                    )
                  })}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.95 }}
          className="mt-3 text-[#9A9A9A] text-xs md:text-sm font-light leading-[1.6] max-w-xl"
        >
          Custom tattoos crafted by Bangalore's elite artists. From fine line designs to full sleeve masterpieces, every piece is designed exclusively for you in our sanctum.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          {/* Primary CTA (Magnetic Interaction) */}
          <motion.div
            ref={ctaMag.ref}
            animate={{ x: ctaMag.offset.x, y: ctaMag.offset.y }}
            transition={{ type: 'spring', stiffness: 180, damping: 15, mass: 0.1 }}
            onMouseMove={ctaMag.onMouseMove}
            onMouseLeave={ctaMag.onMouseLeave}
            className="inline-flex w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[var(--brand-gold)] text-black text-[0.6rem] tracking-[0.25em] uppercase font-bold hover:shadow-[0_0_35px_rgba(197,168,92,0.45)] hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book Consultation</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0 stroke-[2.5px]"
              />
            </Link>
          </motion.div>

          {/* Secondary CTA (Animated border glow) */}
          <Link
            href="#showcase"
            className="relative group px-8 py-3.5 overflow-hidden border border-[var(--brand-gold)]/20 hover:border-[var(--brand-gold)] transition-all duration-500 flex items-center justify-center w-full sm:w-auto"
          >
            {/* Border shine animation */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[var(--brand-gold)]/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <span className="text-[0.65rem] tracking-[0.28em] uppercase font-semibold text-[#9A9A9A] group-hover:text-white transition-colors duration-300">
              Explore Portfolio
            </span>
          </Link>
        </motion.div>

        {/* ── Visual Portal: Rotating Occult Circular Slideshow ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.0 }}
          className="relative mt-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] flex items-center justify-center z-20 group/portal"
        >
          {/* Giant All-Seeing Eye outline backdrop (circular slideshow acts as the iris/pupil) */}
          <div className="absolute inset-[-45px] sm:inset-[-70px] pointer-events-none z-10 opacity-25 group-hover/portal:opacity-40 transition-opacity duration-700 select-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--brand-gold)" strokeWidth="0.25" className="w-full h-full text-[var(--brand-gold)]">
              <path d="M 5,50 C 25,15 75,15 95,50" />
              <path d="M 5,50 C 25,85 75,85 95,50" />
              <circle cx="50" cy="50" r="28" strokeDasharray="1 1" />
              <circle cx="50" cy="50" r="24" />
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 22.5 * Math.PI) / 180
                const x1 = 50 + 28 * Math.cos(angle)
                const y1 = 50 + 28 * Math.sin(angle)
                const x2 = 50 + 48 * Math.cos(angle)
                const y2 = 50 + 48 * Math.sin(angle)
                if (i === 0 || i === 8) return null
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.2" />
              })}
            </svg>
          </div>
          {/* Outer rotating ring (clockwise) */}
          <motion.div
            className="absolute inset-[-10px] pointer-events-none z-30 opacity-40 group-hover/portal:opacity-70 transition-opacity duration-700"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--brand-gold)" strokeWidth="0.2" className="w-full h-full">
              <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
              <polygon points="50,5 11,73 89,73" strokeWidth="0.15" />
              <circle cx="50" cy="5" r="1" fill="var(--brand-gold)" />
              <circle cx="11" cy="73" r="1" fill="var(--brand-gold)" />
              <circle cx="89" cy="73" r="1" fill="var(--brand-gold)" />
            </svg>
          </motion.div>

          {/* Inner rotating ring (counter-clockwise) */}
          <motion.div
            className="absolute inset-[-3px] pointer-events-none z-30 opacity-50 group-hover/portal:opacity-80 transition-opacity duration-700"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--brand-gold)" strokeWidth="0.25" className="w-full h-full">
              <circle cx="50" cy="50" r="44" strokeDasharray="1 2" />
              <polygon points="50,95 11,27 89,27" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="32" />
            </svg>
          </motion.div>

          {/* Main Circular Portal frame */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-[var(--brand-gold)]/40 p-1.5 group-hover/portal:border-[var(--brand-gold)]/80 transition-colors duration-500 bg-[#080808] shadow-[0_0_50px_rgba(197,168,92,0.25)]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0, scale: 1.0 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={slides[slideIndex].image}
                    alt={slides[slideIndex].title}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out scale-100 group-hover/portal:scale-105"
                  />
                  {/* Subtle bottom-only darkening overlay for text contrast */}
                  <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/95 to-transparent z-10" />
                </motion.div>
              </AnimatePresence>

              {/* Slider captions at bottom of portal */}
              <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center text-center px-4">
                <motion.p
                  key={`cat-${slideIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[0.48rem] tracking-[0.2em] text-[var(--brand-gold)] uppercase font-bold mb-0.5"
                >
                  {slides[slideIndex].title}
                </motion.p>
                <motion.h4
                  key={`det-${slideIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white text-[0.62rem] font-bold font-display uppercase tracking-widest max-w-[170px]"
                >
                  {slides[slideIndex].details}
                </motion.h4>
              </div>

              {/* Ticks inside the portal */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className="w-2.5 h-0.75 bg-white/20 transition-all duration-300 relative rounded-sm"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {slideIndex === i && (
                      <motion.div
                        layoutId="activePortalTick"
                        className="absolute inset-0 bg-[var(--brand-gold)] rounded-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator with gold highlight */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2">
        <span className="text-[0.52rem] tracking-[0.4em] uppercase text-[#9A9A9A]">
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-10 bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute left-0 w-full h-[40%] bg-[var(--brand-gold)]"
            animate={{ top: ['0%', '150%'] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

    </section>
  )
}
