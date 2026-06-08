'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function ServiceCTA({ title, description, buttonText, buttonLink }: ServiceCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0f0f0f]">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href={buttonLink}
            className="inline-block px-10 py-5 bg-accent text-black font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(var(--accent),0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
