'use client'

import Link from 'next/link'
import { motion as motionEffect } from 'framer-motion'
import { Paintbrush, Sparkles, Gem, BookOpen, Shirt, FileText, ArrowRight } from 'lucide-react'

interface ServiceData {
  icon: any
  name: string
  tag: string
  description: string
  details: string[]
  link: string
  featured?: boolean
}

const premiumServices: ServiceData[] = [
  {
    icon: Paintbrush,
    name: 'Bespoke Permanent Tattoos',
    tag: 'Elite Artistry',
    description: 'Custom illustrations engineered specifically for your body silhouette and personal narrative. Formulated with elite medical-grade pigments.',
    details: ['Fine Line & Micro Realism', 'Full Sleeves & Large Scale Irezumi', 'Precision Coverups & Restoration'],
    link: '/services/tattoos',
    featured: true
  },
  {
    icon: Gem,
    name: 'Advanced Body Piercing',
    tag: 'Aseptic Studio',
    description: 'Surgical-grade piercing procedures featuring our signature collection of implant-grade titanium and 18K solid gold jewelry.',
    details: ['Implant-grade Titanium', 'Solid 18K Gold Selection', 'Strict Sterilization Protocol'],
    link: '/services/piercings'
  },
  {
    icon: BookOpen,
    name: 'Master Tattoo Training',
    tag: 'Certification',
    description: 'Intense academic and practical bootcamps covering machine kinetics, design theory, skin anatomy, and studio operations.',
    details: ['One-on-One Mentorship', 'Live Human Skin Practice', 'Licensed Safety Certifications'],
    link: '/services/training'
  },
  {
    icon: Shirt,
    name: 'Curated Wearable Art',
    tag: 'Exclusive Series',
    description: 'Custom hand-painted streetwear, original gallery canvas works, and leather customizations created by our founding artists.',
    details: ['Custom Hand-Painted Leather', 'Original Prints & Canvases', 'Limited Apparel Drops'],
    link: '/services/clothing-art'
  },
  {
    icon: Sparkles,
    name: 'Digital Pre-Visualization',
    tag: 'Consultation Detail',
    description: 'Collaborative consultations utilizing advanced digital overlays on photos of your skin to match contours before needle application.',
    details: ['3D Anatomy Layout Mapping', 'Contrast & Color Testing', 'Free Design Adjustments'],
    link: '#contact'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#8B0000]/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              Creative Solutions
            </span>
            <span className="w-5 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F5F5F5] tracking-tight uppercase mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our Services
          </h2>
          <p className="text-[#9A9A9A] max-w-xl text-sm md:text-base font-light leading-relaxed">
            From bespoke custom sleeves to sterile modifications and masterclass training, explore the high-end creative solutions we offer.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {premiumServices.map((service, index) => {
            const Icon = service.icon
            const isFeatured = !!service.featured
            return (
              <motionEffect.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between p-8 md:p-10 bg-[#0c0c0c] border ${
                  isFeatured ? 'border-[#D4AF37]/30 lg:col-span-2' : 'border-white/5'
                } hover:border-[#D4AF37]/45 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-sm overflow-hidden`}
              >
                
                {/* Background glow trail on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-500 rounded-sm">
                      <Icon className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[0.55rem] tracking-[0.2em] text-[#D4AF37] uppercase font-bold px-3 py-1 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm">
                      {service.tag}
                    </span>
                  </div>

                  {/* Text details */}
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-4 font-display">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#9A9A9A] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Structural bullet list */}
                  <ul className="space-y-2.5 border-t border-white/5 pt-6 mb-8">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs text-[#9A9A9A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Arrow Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2.5 text-[0.65rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold group-hover:text-white transition-colors mt-auto pt-4"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>

                {/* Corner Frame Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/5 pointer-events-none group-hover:border-[#D4AF37]/30 transition-colors duration-500" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/5 pointer-events-none group-hover:border-[#D4AF37]/30 transition-colors duration-500" />
                
              </motionEffect.div>
            )
          })}
        </div>

        {/* Pricing Calculator Redirect */}
        <motionEffect.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            href="/calculator"
            className="px-10 py-5 bg-[#D4AF37] text-black font-bold tracking-[0.25em] uppercase hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.03] transition-all duration-300 inline-block text-xs rounded-sm"
          >
            Calculate Design Price
          </Link>
        </motionEffect.div>

      </div>
    </section>
  )
}
