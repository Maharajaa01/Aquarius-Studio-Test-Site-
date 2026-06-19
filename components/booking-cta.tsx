'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, ArrowRight } from 'lucide-react'

export default function BookingCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#D4AF37]/5 to-[#8B0000]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Bordered designer invite frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border border-[#D4AF37]/20 p-8 md:p-14 bg-gradient-to-b from-[#0c0c0c] to-[#050505] rounded-sm relative group hover:border-[#D4AF37]/45 transition-colors duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
        >
          {/* Top spark indicator */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 rounded-sm">
              <Sparkles size={18} className="text-[#D4AF37]" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Ready To Wear Your <br className="hidden sm:inline" /> Story Forever?
          </h2>

          {/* Subheadline & Urgency */}
          <p className="text-[#9A9A9A] text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed mb-10">
            Consultations are completely free. Let’s sit down, discuss your vision, and draft a unique design. 
            <br />
            <span className="text-[#D4AF37] font-semibold mt-3 block flex items-center justify-center gap-1.5 text-xs tracking-wider uppercase">
              <Calendar size={13} />
              Limited slots available this month
            </span>
          </p>

          {/* Booking CTA Button */}
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-3.5 px-10 py-5 bg-[#D4AF37] text-[#050505] text-xs tracking-[0.25em] uppercase font-bold hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.03] transition-all duration-300"
            >
              <span>Book Your Consultation</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0 stroke-[2.5px]"
              />
            </Link>
          </div>

          {/* Corner frame visual markings */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#D4AF37]/30 pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#D4AF37]/30 pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />

        </motion.div>

      </div>
    </section>
  )
}
