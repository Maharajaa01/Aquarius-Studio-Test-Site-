'use client'

import { motion } from 'framer-motion'

const WHATSAPP_LINK = 'https://wa.me/919663074724?text=' + encodeURIComponent(
  "Hi! I'd like to book the 4th Anniversary Special – ₹99 tattoo offer."
)

export default function AnniversaryOffer() {
  return (
    <section className="relative py-16 md:py-24 bg-[#050505] border-y border-[var(--brand-gold)]/15 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-gold)]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative border border-[var(--brand-gold)]/30 bg-[#0a0a0a] rounded-lg px-6 py-10 sm:px-12 sm:py-14 text-center overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--brand-gold)]/40 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--brand-gold)]/40 pointer-events-none" />

          {/* 4 Year badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-[var(--brand-gold)]" />
            <span className="text-[0.6rem] tracking-[0.35em] font-bold text-[var(--brand-gold)] uppercase">
              4 Year Anniversary Special
            </span>
            <div className="h-px w-6 bg-[var(--brand-gold)]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-2 text-white font-display tracking-tight uppercase"
            style={{ textShadow: '0 0 20px rgba(212, 175, 55, 0.15)' }}
          >
            Get A Tattoo
          </h2>

          <div className="text-6xl sm:text-7xl font-black mb-3 text-[var(--brand-gold)] font-display tracking-tight">
            ₹99<span className="text-2xl sm:text-3xl align-top">/-*</span>
          </div>

          <p className="text-sm sm:text-base text-[#F5F5F5] font-semibold mb-6">
            Any tattoo worth up to ₹1,500 (up to 4 sq. inches)
          </p>

          {/* Conditions */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-[#121212] border border-white/[0.06] rounded-md px-5 py-3 mb-6 mx-auto w-fit">
            <span className="text-[0.62rem] tracking-[0.15em] text-white/80 uppercase font-bold">Follow Our Page</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[0.62rem] tracking-[0.15em] text-white/80 uppercase font-bold">Limited Slots Only</span>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-[var(--brand-gold)] text-black font-bold tracking-widest text-xs sm:text-sm uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-sm"
          >
            Book Your Appointment Now
          </a>

          <p className="text-[0.62rem] text-[#9A9A9A] mt-5 leading-relaxed">
            *Applicable on selected tattoos only. Terms &amp; conditions apply.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
