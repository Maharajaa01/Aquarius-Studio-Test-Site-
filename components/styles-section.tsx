'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, User, ArrowRight } from 'lucide-react'

interface TattooStyle {
  name: string
  key: string
  description: string
  image: string
  expert: string
  sessionEstimate: string
}

const stylesList: TattooStyle[] = [
  {
    name: "Realism",
    key: "realism",
    description: "Life-like portraits, wildlife, and structural figures rendered with absolute depth, soft gradients, and photographic precision.",
    image: "/Images/hero_artist_sleeve.jpg",
    expert: "Aravind",
    sessionEstimate: "4 - 8 Hours"
  },
  {
    name: "Japanese",
    key: "japanese",
    description: "Flowing backgrounds of clouds and waves representing ancient mythological stories of dragons, koi fish, and irezumi traditional masks.",
    image: "/Images/hero_tattoo_collage.jpg",
    expert: "Aravind",
    sessionEstimate: "6 - 12 Hours"
  },
  {
    name: "Minimalist",
    key: "minimalist",
    description: "Elegant, clean, and understated designs carrying profound personal values in thin, simple structures.",
    image: "/tattoos/minimal/2f8280d3f093c22e470e8adbd748f9b8.jpg",
    expert: "Aswin",
    sessionEstimate: "1 - 3 Hours"
  },
  {
    name: "Fine Line",
    key: "fineline",
    description: "Intricate line-art, delicate sketches, and botanical illustrations crafted using precise micro-single-needles.",
    image: "/Images/hero_client_sleeve.jpg",
    expert: "Aswin",
    sessionEstimate: "2 - 5 Hours"
  },
  {
    name: "Blackwork",
    key: "blackwork",
    description: "Bold, highly saturated solid black pigments creating graphic illustrative panels, abstract flows, and high contrast designs.",
    image: "/Images/hero_tattoo_machine.jpg",
    expert: "Aravind",
    sessionEstimate: "3 - 7 Hours"
  },
  {
    name: "Geometric",
    key: "geometric",
    description: "Sacred geometry, structural alignment, and complex mathematical mandala grids placed in harmony with body silhouettes.",
    image: "/tattoos/mandala/c33e35a7e271661721825735011260be.jpg",
    expert: "Aswin",
    sessionEstimate: "4 - 8 Hours"
  },
  {
    name: "Portrait",
    key: "portrait",
    description: "Capturing the emotional details and structural fidelity of human faces or animal companions with photorealistic mastery.",
    image: "/Images/hero_artist_sleeve.jpg",
    expert: "Aravind",
    sessionEstimate: "5 - 9 Hours"
  },
  {
    name: "Traditional",
    key: "traditional",
    description: "Bold black outlines, high saturation solid primary color packs, and iconic old-school/neo-traditional motifs.",
    image: "/Images/hero_tattoo_collage.jpg",
    expert: "Aravind",
    sessionEstimate: "3 - 6 Hours"
  }
]

export default function StylesSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="styles" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-gradient-to-r from-[#D4AF37]/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#D4AF37]" />
            <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              Artistic Directions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F5F5F5] tracking-tight uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            Styles We Master
          </h2>
        </div>

        {/* Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Styles List */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/5 border-y border-white/5">
            {stylesList.map((style, idx) => {
              const isActive = activeIdx === idx
              return (
                <div
                  key={style.key}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="py-5 md:py-6 cursor-pointer group transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Glowing background line highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStyleHighlight"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex justify-between items-center pl-4 pr-2">
                    <h3 
                      className={`text-xl md:text-2xl font-bold tracking-wide uppercase transition-all duration-300 ${
                        isActive ? 'text-[#D4AF37] translate-x-2' : 'text-[#9A9A9A] group-hover:text-white'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {style.name}
                    </h3>
                    
                    <span 
                      className={`text-xs transition-all duration-300 ${
                        isActive ? 'opacity-100 text-[#D4AF37] translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Dynamic Preview Card Panel */}
          <div className="lg:col-span-7 w-full flex flex-col gap-6">
            <div className="relative w-full aspect-[16/10] bg-[#0c0c0c] border border-white/5 p-2.5 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              
              {/* Image Frame with AnimatePresence cross-fade */}
              <div className="relative w-full h-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1.02 }}
                    exit={{ opacity: 0, scale: 1.0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={stylesList[activeIdx].image}
                      alt={stylesList[activeIdx].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Subtitle tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-sm flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#D4AF37]" />
                  <span className="text-[0.55rem] tracking-[0.2em] uppercase font-bold text-white">
                    Premium Style
                  </span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/10 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/10 pointer-events-none" />
            </div>

            {/* Dynamic Metadata Panel */}
            <div className="bg-[#0c0c0c] border border-white/5 p-6 md:p-8 rounded-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wide mb-3 font-display">
                      {stylesList[activeIdx].name} Masterclass
                    </h4>
                    <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                      {stylesList[activeIdx].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white/5 flex items-center justify-center rounded-sm">
                        <User size={15} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <span className="text-[0.55rem] tracking-[0.1em] text-[#9A9A9A] uppercase block">
                          Recommended Specialist
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {stylesList[activeIdx].expert}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white/5 flex items-center justify-center rounded-sm">
                        <span className="text-xs text-[#D4AF37] font-bold">EST</span>
                      </div>
                      <div>
                        <span className="text-[0.55rem] tracking-[0.1em] text-[#9A9A9A] uppercase block">
                          Average Duration
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {stylesList[activeIdx].sessionEstimate}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
