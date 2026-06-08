'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getTattooImages, TattooImage } from '@/lib/images'
import { stagger, fadeUp, scaleReveal, vp } from '@/lib/motion'

export default function StylesSection() {
  const [categories, setCategories] = useState<{ name: string; cover: string }[]>([])

  useEffect(() => {
    getTattooImages().then(({ categories: cats, allImages }) => {
      setCategories(
        cats.map((cat) => {
          const cover = allImages.find((img: TattooImage) => img.category === cat) ?? { src: '/hero-tattoo.jpg' }
          return { name: cat, cover: cover.src }
        }),
      )
    }).catch(console.error)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.1, 0)}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
          >
            Tattoo Styles We Master
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
            From intricate realism to bold traditional designs, our certified artists specialize in all major tattoo styles.
          </motion.p>
        </motion.div>

        {/* Grid — staggered scale reveal */}
        <motion.div
          key={categories.length}
          variants={stagger(0.07, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {categories.map((style, index) => (
            <motion.div
              key={index}
              variants={scaleReveal}
              className="group relative h-72 overflow-hidden bg-black cursor-pointer rounded-sm border border-white/10 hover:border-accent transition-colors"
            >
              <Image
                src={style.cover}
                alt={`${style.name} tattoo style`}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 transition-transform duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:-translate-y-2 transition-transform duration-300">
                  {style.name}
                </h3>
                <div className="h-[2px] w-0 bg-accent mt-2 group-hover:w-16 transition-all duration-500 shadow-[0_0_10px_rgba(var(--accent),0.8)]" />
                <div className="absolute inset-0 border-[3px] border-accent/0 group-hover:border-accent/40 scale-95 group-hover:scale-100 transition-all duration-300 rounded-sm pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
