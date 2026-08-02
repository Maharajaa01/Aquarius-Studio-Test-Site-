'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'
import { useMagnetic } from '@/hooks/use-magnetic'

// ── Full-Screen Background Hero Slides (Yantra Tattoos Masters of Ink Aesthetic) ──
const heroSlides = [
  {
    id: 1,
    tagline: "AQUARIUS LUXURY TATTOO STUDIO",
    headlineMain1: "AQUARIUS",
    headlineMain2: "TATTOOS",
    scriptOverlay: "masters of",
    headlineMain3: "INK",
    subtext: "Custom tattoos crafted by Bangalore's elite artists in our sterile sanctum",
    image: "/Images/hero_tattoo_machine.jpg",
    link: "/book"
  },
  {
    id: 2,
    tagline: "SACRED GEOMETRY & MANDALA ART",
    headlineMain1: "SACRED",
    headlineMain2: "GEOMETRY",
    scriptOverlay: "sanctum of",
    headlineMain3: "SKIN",
    subtext: "Precision fine line & geometric mandala artwork designed exclusively for you",
    image: "/Images/hero_tattoo_slide2_geometric.png",
    link: "/gallery"
  },
  {
    id: 3,
    tagline: "BLACKWORK REALISM & DRAGON ART",
    headlineMain1: "ARCANE",
    headlineMain2: "BLACKWORK",
    scriptOverlay: "masters of",
    headlineMain3: "WARRIOR INK",
    subtext: "Japanese blackwork & detailed dark dragon sleeve tattoos consecrated in Bangalore",
    image: "/Images/hero_tattoo_slide3_v2.png",
    link: "/artists"
  },
  {
    id: 4,
    tagline: "SPIRITUAL ART & SACRED GEOMETRY",
    headlineMain1: "SPIRITUAL",
    headlineMain2: "REALISM",
    scriptOverlay: "consecrated in",
    headlineMain3: "SPIRIT",
    subtext: "Bespoke Lord Shiva spiritual tattoos & sacred geometry body art",
    image: "/Images/hero_tattoo_slide4_v2.png",
    link: "/services/tattoos"
  }
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const ctaMag = useMagnetic(0.3)

  // Auto slide rotation (5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[720px] bg-[#020202] flex flex-col justify-between items-center overflow-hidden z-10 select-none pt-20"
    >
      {/* ── Layer 1: Full-Bleed Background Slideshow Stage ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroSlides[activeSlide].image}
            alt={heroSlides[activeSlide].tagline}
            fill
            priority
            className={`object-cover object-center filter transition-all duration-700 ${
              activeSlide === 0
                ? 'brightness-[0.92] contrast-[1.08] opacity-100'
                : 'brightness-[0.82] contrast-[1.1] opacity-95'
            }`}
            sizes="100vw"
          />

          {/* Luxury Gradient Dark Vignette Overlays for High-Contrast Readability */}
          <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${
            activeSlide === 0
              ? 'bg-gradient-to-t from-[#020202] via-[#020202]/30 to-[#020202]/50'
              : 'bg-gradient-to-t from-[#020202] via-[#020202]/45 to-[#020202]/65'
          }`} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/70 via-transparent to-[#020202]/70 z-10" />
          <div className="absolute inset-0 luxury-grain opacity-30 z-10 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ── Layer 2: Left Side Navigation Control & Slide Counter ── */}
      <div className="absolute left-4 sm:left-10 lg:left-14 top-1/2 -translate-y-1/2 z-30 flex items-center gap-3">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[var(--brand-gold)] bg-black/40 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <span className="hidden md:inline-block text-[0.62rem] tracking-[0.25em] font-bold text-white/40 uppercase">
          0{activeSlide + 1} <span className="text-[var(--brand-gold)]">/</span> 0{heroSlides.length}
        </span>
      </div>

      {/* ── Layer 3: Right Side Navigation Control & Slide Counter ── */}
      <div className="absolute right-4 sm:right-10 lg:right-14 top-1/2 -translate-y-1/2 z-30 flex items-center gap-3">
        <span className="hidden md:inline-block text-[0.62rem] tracking-[0.25em] font-bold text-white/40 uppercase">
          0{activeSlide + 1} <span className="text-[var(--brand-gold)]">/</span> 0{heroSlides.length}
        </span>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[var(--brand-gold)] bg-black/40 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* ── Layer 4: Center Stacked Masterpiece Typography (Yantra Style) ── */}
      <div className="w-full max-w-6xl mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center flex-grow pt-10 pb-16">
        
        {/* Top Tagline */}
        <motion.div
          key={`tag-${activeSlide}`}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-2 sm:mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
          <span className="text-[0.62rem] sm:text-[0.72rem] tracking-[0.35em] font-bold text-[var(--brand-gold)] uppercase">
            {heroSlides[activeSlide].tagline}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
        </motion.div>

        {/* Stacked Giant Typography with Script Overlay */}
        <div className="relative flex flex-col items-center justify-center select-none my-1 sm:my-2">
          
          {/* Top Block Line */}
          <motion.h1
            key={`h1-${activeSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-black uppercase tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] font-display leading-[0.9]"
          >
            {heroSlides[activeSlide].headlineMain1} {heroSlides[activeSlide].headlineMain2}
          </motion.h1>

          {/* Overlaid Cursive Script (Diagonal handwritten calligraphic overlay) */}
          <motion.span
            key={`script-${activeSlide}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--brand-gold)] -my-3 sm:-my-6 lg:-my-8 drop-shadow-[0_0_30px_rgba(197,168,92,0.8)] z-20 transform select-none"
          >
            {heroSlides[activeSlide].scriptOverlay}
          </motion.span>

          {/* Bottom Block Line */}
          <motion.h2
            key={`h2-${activeSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-black uppercase tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] font-display leading-[0.9]"
          >
            {heroSlides[activeSlide].headlineMain3}
          </motion.h2>

        </div>

        {/* Subheadline Text */}
        <motion.p
          key={`sub-${activeSlide}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-3 text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-xl px-4"
        >
          {heroSlides[activeSlide].subtext}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center z-30"
        >
          <motion.div
            ref={ctaMag.ref}
            animate={{ x: ctaMag.offset.x, y: ctaMag.offset.y }}
            transition={{ type: 'spring', stiffness: 180, damping: 15, mass: 0.1 }}
            onMouseMove={ctaMag.onMouseMove}
            onMouseLeave={ctaMag.onMouseLeave}
          >
            <Link
              href={heroSlides[activeSlide].link}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[var(--brand-gold)] text-black text-[0.68rem] tracking-[0.25em] uppercase font-bold hover:shadow-[0_0_35px_rgba(197,168,92,0.6)] hover:scale-[1.03] transition-all duration-300 rounded-sm"
            >
              <span>Book Consultation</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0 stroke-[2.5px]"
              />
            </Link>
          </motion.div>
        </motion.div>

      </div>

      {/* ── Layer 5: Traditional Ink Wave Vector Frame at Bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none opacity-90">
        <svg
          className="relative block w-full h-[60px] sm:h-[90px] md:h-[110px] text-[#020202]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Subtle golden wave highlight backdrop */}
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            opacity="0.3"
            fill="var(--brand-gold)"
          />
          {/* Main solid dark wave border */}
          <path
            d="M0,30 C200,100 450,10 650,70 C850,120 1050,30 1200,75 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* ── Layer 6: Bottom Center Explore Link Above Wave ── */}
      <div className="relative z-30 pb-5">
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 text-white/70 hover:text-[var(--brand-gold)] text-[0.68rem] tracking-[0.3em] font-bold uppercase transition-colors duration-300 drop-shadow-md"
        >
          <span>Explore Tattoos</span>
          <ChevronRight size={14} className="text-[var(--brand-gold)] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </section>
  )
}
