'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export function StickyBookingButton() {
  const { scrollY } = useScroll()
  
  // Only show the button after scrolling down 300px
  const opacity = useTransform(scrollY, [0, 300, 400], [0, 0, 1])
  const y = useTransform(scrollY, [0, 300, 400], [20, 20, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <Link
        href="/calculator"
        className="flex items-center gap-2 bg-accent text-black font-bold tracking-wide px-6 py-4 rounded-full shadow-[0_0_20px_rgba(var(--accent),0.4)] hover:shadow-[0_0_30px_rgba(var(--accent),0.6)] hover:bg-white transition-all duration-300"
      >
        <Calendar size={20} />
        <span className="hidden sm:inline">BOOK APPOINTMENT</span>
      </Link>
    </motion.div>
  )
}
