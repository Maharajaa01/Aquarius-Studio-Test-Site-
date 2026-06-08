'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { stagger, fadeUp, inkReveal, scaleReveal, vp } from '@/lib/motion'

const stories = [
  {
    id: 1,
    title: 'A Tribute to Mother',
    description: "Abhishek's eternal memory beautifully captured in a realism portrait.",
    image: '/placeholder.jpg',
    link: '/gallery',
  },
  {
    id: 2,
    title: 'The Phoenix Coverup',
    description: 'Rising from the ashes: A massive back coverup symbolizing resilience.',
    image: '/placeholder.jpg',
    link: '/gallery',
  },
  {
    id: 3,
    title: 'Spiritual Awakening',
    description: 'A full sleeve combining geometric patterns with Lord Shiva elements.',
    image: '/placeholder.jpg',
    link: '/gallery',
  },
]

export default function BehindTheInk() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading with ink-reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.12, 0)}
          className="text-center mb-16"
        >
          <motion.h2
            variants={inkReveal}
            className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4 uppercase"
          >
            Behind The Ink
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every tattoo has a story. Discover the profound meanings, emotional journeys, and artistic triumphs of our clients.
          </motion.p>

          {/* Animated ink underline */}
          <motion.div
            className="h-[3px] mx-auto mt-6"
            style={{ background: 'var(--brand-red)' }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '6rem', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>

        {/* Story cards — staggered scale reveal */}
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stories.map((story) => (
            <motion.div
              key={story.id}
              variants={scaleReveal}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden bg-black border border-white/5 hover:border-accent transition-colors duration-500 cursor-pointer rounded-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {story.description}
                </p>
                <Link
                  href={story.link}
                  className="text-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 flex items-center gap-2"
                >
                  Read Story
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>

              {/* Corner accent that grows on hover */}
              <div
                className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-500"
                style={{ borderTop: '2px solid var(--brand-red)', borderLeft: '2px solid var(--brand-red)' }}
              />
              <div
                className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-500"
                style={{ borderBottom: '2px solid var(--brand-red)', borderRight: '2px solid var(--brand-red)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
