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
  { label: 'Gallery', href: '/gallery' },
  { label: 'Artists', href: '/artists' },
  { label: 'Services', href: '#services' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Aquarius Tattoo Studio">
            <span
              className="text-[1.3rem] font-light tracking-[0.28em] text-white uppercase transition-opacity duration-300 group-hover:opacity-80"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AQUARIUS
            </span>
            <span className="text-[0.52rem] tracking-[0.44em] text-white/38 uppercase font-light mt-[3px]">
              TATTOO STUDIO
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.62rem] tracking-[0.24em] uppercase text-white/50 hover:text-white/90 transition-colors duration-300"
              >
                {item.label}
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
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 text-[0.62rem] tracking-[0.24em] uppercase font-medium nav-cta-glow"
                style={{ color: 'var(--brand-red)', border: '1px solid var(--brand-red)' }}
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
                  href="#contact"
                  className="inline-flex items-center px-7 py-3 text-[0.62rem] tracking-[0.24em] uppercase font-medium text-white"
                  style={{
                    background: 'var(--brand-red)',
                    boxShadow: '0 0 22px rgba(196, 30, 58, 0.45)',
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
