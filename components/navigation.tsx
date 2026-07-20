'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useMagnetic } from '@/hooks/use-magnetic'

interface NavigationProps {
  isScrolled: boolean
}

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Artists', href: '/artists' },
  { label: 'Services', href: '/#services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Aftercare', href: '/aftercare' },
]

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ctaMag = useMagnetic(0.3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.07]'
          : 'bg-black/10 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Aquarius Tattoo Studio">
            {/* Esoteric Triangle/Eye logo badge */}
            <div className="relative w-8 h-8 flex items-center justify-center border border-[var(--brand-gold)]/30 rounded-sm rotate-45 group-hover:border-[var(--brand-gold)]/80 transition-colors duration-300">
              <div className="-rotate-45 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5 text-[var(--brand-gold)]">
                  <polygon points="12,3 3,20 21,20" />
                  <circle cx="12" cy="13" r="2.5" />
                  <circle cx="12" cy="13" r="0.75" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[1.15rem] font-black tracking-[0.2em] text-white uppercase transition-opacity duration-300 group-hover:text-[var(--brand-gold)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                AQUARIUS
              </span>
              <span className="text-[0.5rem] tracking-[0.44em] text-[var(--brand-gold)]/60 uppercase font-bold mt-[1px]">
                TATTOO STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-[0.62rem] tracking-[0.24em] uppercase text-white/50 hover:text-white/90 transition-colors duration-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1.5 h-px w-full origin-left scale-x-0 bg-[var(--brand-gold)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Right side: CTA + mobile toggle */}
          <div className="flex items-center gap-5">
            <motion.div
              ref={ctaMag.ref}
              animate={{ x: ctaMag.offset.x, y: ctaMag.offset.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 16, mass: 0.1 }}
              onMouseMove={ctaMag.onMouseMove}
              onMouseLeave={ctaMag.onMouseLeave}
              className="hidden md:block"
            >
              <Link
                href="/book"
                className="inline-flex items-center px-6 py-2.5 text-[0.62rem] tracking-[0.24em] uppercase font-medium nav-cta-glow"
                style={{ color: 'var(--brand-gold)', border: '1px solid var(--brand-gold)' }}
              >
                Book Now
              </Link>
            </motion.div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/55 hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.18 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden border-t border-white/[0.06]"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-6 py-7 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2.5 text-[0.68rem] tracking-[0.22em] uppercase text-white/50 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.055 + 0.05, duration: 0.3 }}
                className="pt-5 border-t border-white/[0.07]"
              >
                <Link
                  href="/book"
                  className="inline-flex items-center px-7 py-3 text-[0.62rem] tracking-[0.24em] uppercase font-bold text-black"
                  style={{
                    background: 'var(--brand-gold)',
                    boxShadow: '0 0 22px rgba(197, 168, 92, 0.45)',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
