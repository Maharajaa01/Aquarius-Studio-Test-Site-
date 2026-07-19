'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CoverupSlider() {
  return (
    <section className="py-24 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Masterful Coverups
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Regret an old tattoo? Don't worry. Our coverup specialists can transform unwanted ink into a breathtaking masterpiece.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm bg-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <Image
            src="/tattoos/blackwork/cover_up.jpg"
            alt="Real coverup transformation — old tribal tattoo reworked into a detailed portrait piece"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </motion.div>
      </div>
    </section>
  )
}
