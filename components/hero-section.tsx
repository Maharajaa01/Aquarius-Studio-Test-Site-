'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion'
import { ArrowRight, Compass, Sun, Flower, Skull, Flame } from 'lucide-react'
import { useMagnetic } from '@/hooks/use-magnetic'

// ── Images to rotate in Hero ──
const slides = [
  {
    title: "Realism Tattoo",
    artist: "Aravind",
    image: "/Images/hero_artist_sleeve.jpg",
    details: "Black & grey realism sleeve"
  },
  {
    title: "Japanese Dragon",
    artist: "Aravind",
    image: "/Images/hero_client_sleeve.jpg",
    details: "Custom irezumi layout"
  },
  {
    title: "Fine Line & Floral",
    artist: "Aswin",
    image: "/Images/hero_tattoo_collage.jpg",
    details: "High-precision geometric art"
  },
  {
    title: "Black & Grey Sleeve",
    artist: "Aravind",
    image: "/Images/hero_tattoo_machine.jpg",
    details: "Intricate portraiture & shading"
  }
]

// ── Rotating headlines list ──
const headlines = [
  "YOUR STORY. INKED FOREVER.",
  "ART THAT LIVES WITH YOU.",
  "EVERY TATTOO HAS A STORY.",
  "WE DON'T COPY. WE CREATE."
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
    filter: 'blur(10px) brightness(0.1) drop-shadow(0 0 12px rgba(139,0,0,0.6))',
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
      className="relative w-full min-h-screen bg-[#050505] flex items-center overflow-hidden z-10 select-none"
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
        className="absolute pointer-events-none rounded-full blur-[140px] opacity-[0.14] z-[10]"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          bottom: '-10%',
          left: '-10%',
          y: backgroundY
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full blur-[160px] opacity-[0.11] z-[10]"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, #8B0000 0%, transparent 70%)',
          top: '-10%',
          right: '25%',
          y: useTransform(scrollY, [0, 900], [0, -40])
        }}
      />

      {/* ── Layer 4: Slow floating tattoo sketches ── */}
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

      {/* ── SPLIT HERO LAYOUT ── */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        
        {/* Left Side: Emotional Messaging & Headlines */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center text-left"
          style={{ y: textParallaxY }}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[0.62rem] tracking-[0.3em] font-bold text-[#D4AF37] uppercase">
              Aquarius Luxury Tattoo Studio
            </span>
          </motion.div>

          {/* Rotating Headline with Ink Reveal */}
          <div className="min-h-[145px] sm:min-h-[185px] lg:min-h-[220px] flex items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={headlineIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap gap-x-4 gap-y-1 sm:gap-y-3"
              >
                {headlines[headlineIndex].split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIdx) => {
                      const isSpecial = char === '.'
                      return (
                        <motion.span
                          key={charIdx}
                          variants={letterVariants}
                          className={`inline-block font-black tracking-tight text-[clamp(2.1rem,5.5vw,4.8rem)] leading-[0.95] ${
                            isSpecial ? 'text-[#D4AF37]' : 'text-[#F5F5F5]'
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
            className="mt-6 text-[#9A9A9A] text-sm md:text-base font-light leading-[1.8] max-w-lg"
          >
            Custom tattoos crafted by Bangalore's elite artists. From fine line designs to full sleeve masterpieces, every piece is designed exclusively for you.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center"
          >
            {/* Primary CTA (Magnetic Interaction) */}
            <motion.div
              ref={ctaMag.ref}
              animate={{ x: ctaMag.offset.x, y: ctaMag.offset.y }}
              transition={{ type: 'spring', stiffness: 180, damping: 15, mass: 0.1 }}
              onMouseMove={ctaMag.onMouseMove}
              onMouseLeave={ctaMag.onMouseLeave}
              className="inline-flex"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-[#D4AF37] text-[#050505] text-[0.65rem] tracking-[0.28em] uppercase font-bold hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
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
              className="relative group px-8 py-4.5 overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 flex items-center justify-center"
            >
              {/* Border shine animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase font-semibold text-[#9A9A9A] group-hover:text-white transition-colors duration-300">
                Explore Portfolio
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Showcase Slideshow */}
        <motion.div
          className="lg:col-span-6 w-full flex justify-center lg:justify-end"
          style={{ y: imageParallaxY }}
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-[3/4] bg-[#0c0c0c] border border-white/10 p-2.5 rounded-sm overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] group/showcase hover:border-[#D4AF37]/50 transition-colors duration-500">
            
            {/* Slideshow image container */}
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0, scale: 1.0 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={slides[slideIndex].image}
                    alt={slides[slideIndex].title}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out scale-100 group-hover/showcase:scale-105"
                  />
                  {/* Subtle darkening overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-black/10 group-hover/showcase:bg-black/0 transition-colors duration-500" />
                </motion.div>
              </AnimatePresence>

              {/* Slider details/captions at bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-30 flex justify-between items-end">
                <div>
                  <motion.p
                    key={`cat-${slideIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-1"
                  >
                    {slides[slideIndex].title}
                  </motion.p>
                  <motion.h4
                    key={`det-${slideIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-lg font-bold font-display"
                  >
                    {slides[slideIndex].details}
                  </motion.h4>
                </div>
                <div className="text-right">
                  <span className="text-[0.55rem] tracking-[0.15em] text-[#9A9A9A] uppercase block mb-1">
                    Art By
                  </span>
                  <motion.span
                    key={`art-${slideIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white text-sm font-semibold tracking-wide"
                  >
                    {slides[slideIndex].artist}
                  </motion.span>
                </div>
              </div>

              {/* Interactive slide counters/ticks */}
              <div className="absolute top-6 right-6 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded-sm">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className="group/btn relative w-6 h-1 bg-white/20 transition-all duration-300"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {slideIndex === i && (
                      <motion.div
                        layoutId="activeSlideTick"
                        className="absolute inset-0 bg-[#D4AF37]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Corner styling accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-white/20 pointer-events-none group-hover/showcase:border-[#D4AF37]/50 transition-colors duration-500" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-white/20 pointer-events-none group-hover/showcase:border-[#D4AF37]/50 transition-colors duration-500" />
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
            className="absolute left-0 w-full h-[40%] bg-[#D4AF37]"
            animate={{ top: ['0%', '150%'] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

    </section>
  )
}
