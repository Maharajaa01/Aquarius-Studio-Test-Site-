'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Paintbrush2, Hand, Gem, BookOpen, Shirt, Sparkles } from 'lucide-react'
import { stagger, fadeUp, inkReveal, vp } from '@/lib/motion'

const services = [
  {
    icon: Paintbrush2,
    name: 'Permanent Tattoos',
    description: 'Professional custom tattoo designs executed by certified artists',
    link: '/services/tattoos',
  },
  {
    icon: Hand,
    name: 'Temporary Tattoos',
    description: 'Hand poking techniques for experimental or temporary designs',
    link: '/services/temporary-tattoos',
  },
  {
    icon: Gem,
    name: 'Body Piercing',
    description: 'Safe and hygienic piercing services with premium jewelry options',
    link: '/services/piercings',
  },
  {
    icon: BookOpen,
    name: 'Tattoo Training',
    description: 'Learn professional tattoo techniques from certified masters',
    link: '/services/training',
  },
  {
    icon: Shirt,
    name: 'Clothing Art',
    description: 'Custom designs on t-shirts, shoes, and wearable art',
    link: '/services/clothing-art',
  },
  {
    icon: Sparkles,
    name: 'Canvas & Gallery',
    description: 'Original artwork, prints, and exclusive gallery collections',
    link: '/gallery',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary border-y border-border">
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
            variants={inkReveal}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
          >
            Our Services
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive artistic solutions for all your creative needs
          </motion.p>
        </motion.div>

        {/* Grid — staggered fade-up */}
        <motion.div
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                variants={fadeUp}
                className="group"
              >
                <Link
                  href={service.link}
                  className="p-8 border border-border hover:border-accent bg-background transition-all duration-300 block"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-8 h-8 text-accent mb-4 inline-block"
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>

                  {/* Bottom ink line reveal */}
                  <div
                    className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: 'var(--brand-red)', opacity: 0.5 }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/calculator"
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all inline-block"
          >
            CALCULATE PRICE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
