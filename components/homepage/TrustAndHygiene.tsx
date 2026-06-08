'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Stethoscope, Droplets } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: "Painless Experience",
    description: "Advanced techniques and numbing options available to make your session as comfortable as possible."
  },
  {
    icon: ShieldCheck,
    title: "Medical-Grade Hygiene",
    description: "Hospital-level sterilization, single-use needles, and fully sanitized stations ensure complete safety."
  },
  {
    icon: Droplets,
    title: "Premium 1-Step Aftercare",
    description: "We use advanced second-skin healing wraps. No messy creams, no complicated routines. Just wrap and heal."
  }
]

export default function TrustAndHygiene() {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              World-Class <span className="text-accent">Standards</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We believe that the tattooing process should be as premium as the art itself. 
              We've eliminated the anxiety and complications of traditional tattooing by adopting 
              the highest global standards in pain management, hygiene, and aftercare.
            </p>
            <div className="inline-block border border-accent px-8 py-4 text-accent font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-colors cursor-pointer">
              View Safety Protocols
            </div>
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-6 p-6 bg-[#0f0f0f] border border-white/5 hover:border-accent/50 transition-colors rounded-sm"
                >
                  <div className="shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
