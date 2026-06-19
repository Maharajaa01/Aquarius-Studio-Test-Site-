'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { X, Clock, User, Sparkles, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

interface ShowcaseTattoo {
  name: string
  artist: string
  style: string
  hours: string
  image: string
}

const featuredTattoos: ShowcaseTattoo[] = [
  {
    name: "Sacred Geometric Sleeve",
    artist: "Aswin",
    style: "Geometric / Mandala",
    hours: "24 Hours",
    image: "/Images/hero_client_sleeve.jpg"
  },
  {
    name: "Crimson Ryu Backpiece",
    artist: "Aravind",
    style: "Japanese Irezumi",
    hours: "36 Hours",
    image: "/Images/hero_tattoo_collage.jpg"
  },
  {
    name: "Hyper-Realism Portrait",
    artist: "Aravind",
    style: "Black & Grey Realism",
    hours: "18 Hours",
    image: "/Images/hero_artist_sleeve.jpg"
  },
  {
    name: "Minimalist Celestial Forearm",
    artist: "Aswin",
    style: "Fine Line & Minimalist",
    hours: "6 Hours",
    image: "/Images/hero_client_sleeve.jpg"
  },
  {
    name: "Industrial Core Machine Piece",
    artist: "Aravind",
    style: "Bio-Mechanical Realism",
    hours: "15 Hours",
    image: "/Images/hero_tattoo_machine.jpg"
  }
]

export default function TattooShowcase() {
  const [selectedTattoo, setSelectedTattoo] = useState<ShowcaseTattoo | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#D4AF37]/5 to-[#8B0000]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#D4AF37]" />
              <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                Luxury Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#F5F5F5] tracking-tight uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              Featured Work
            </h2>
          </div>
          <p className="text-[#9A9A9A] max-w-md text-sm md:text-base font-light leading-relaxed">
            Every piece is custom designed, placement oriented, and executed with surgical precision. Explore some of our latest creations.
          </p>
        </div>

        {/* Horizontal scroll container with custom styling */}
        <div className="relative group/scroll select-none">
          <div 
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 md:gap-8 pb-8 scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {featuredTattoos.map((tattoo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedTattoo(tattoo)}
                className="flex-shrink-0 w-[290px] sm:w-[350px] aspect-[3/4] group cursor-pointer relative bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-500 rounded-sm overflow-hidden"
              >
                {/* Visual Image */}
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={tattoo.image}
                    alt={tattoo.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 290px, 350px"
                    loading="lazy"
                  />
                  
                  {/* Bottom Vignette shading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5 group-hover:via-black/50 transition-all duration-300" />
                </div>

                {/* Hover Details Panel (Premium Glassmorphism Overlay) */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-4">
                    <div>
                      <span className="text-[0.55rem] tracking-[0.2em] text-[#D4AF37] uppercase font-bold block mb-1">
                        {tattoo.style}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-wide font-display">
                        {tattoo.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-white/10 pt-3">
                      <div className="flex items-center gap-2 text-xs text-[#9A9A9A]">
                        <User size={13} className="text-[#D4AF37]" />
                        <span>Artist: <strong className="text-white font-medium">{tattoo.artist}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#9A9A9A]">
                        <Clock size={13} className="text-[#D4AF37]" />
                        <span>Duration: <strong className="text-white font-medium">{tattoo.hours}</strong></span>
                      </div>
                    </div>

                    {/* Booking CTA Button Inside Card */}
                    <div 
                      className="mt-2 w-full py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 hover:from-[#D4AF37]/90 hover:to-[#D4AF37] text-black text-[0.62rem] tracking-[0.25em] uppercase font-bold text-center flex items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.hash = "#contact";
                      }}
                    >
                      <Sparkles size={11} />
                      <span>Book Design</span>
                    </div>
                  </div>
                </div>

                {/* Subtle outer outline frames */}
                <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-white/10 pointer-events-none group-hover:border-[#D4AF37]/40 transition-colors duration-300" />
                <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-white/10 pointer-events-none group-hover:border-[#D4AF37]/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Slider Side Gradient Fades */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />
        </div>

      </div>

      {/* Fullscreen portfolio preview modal */}
      {selectedTattoo && (
        <div
          className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-6 backdrop-blur-md"
          onClick={() => setSelectedTattoo(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedTattoo(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-[#D4AF37] transition-colors p-2 z-[100000]"
            aria-label="Close Design Preview"
          >
            <X size={28} />
          </button>

          <div 
            className="w-full max-w-4xl bg-[#0c0c0c] border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.9)] scale-up-anim" 
            onClick={e => e.stopPropagation()}
          >
            {/* Left side: Image */}
            <div className="relative w-full md:w-3/5 aspect-square md:aspect-auto md:h-[75vh] bg-black">
              <Image
                src={selectedTattoo.image}
                alt={selectedTattoo.name}
                fill
                className="object-contain md:object-cover"
                quality={95}
              />
            </div>
            
            {/* Right side: Detailed Information */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-between bg-gradient-to-b from-[#0c0c0c] to-[#050505]">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-1.5">
                    {selectedTattoo.style}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide font-display">
                    {selectedTattoo.name}
                  </h3>
                </div>

                <div className="space-y-4 border-y border-white/5 py-6">
                  <div className="flex items-center gap-3">
                    <User size={16} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#9A9A9A]">
                      Master Artist: <strong className="text-white font-medium">{selectedTattoo.artist}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#9A9A9A]">
                      Completion Time: <strong className="text-white font-medium">{selectedTattoo.hours}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles size={16} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#9A9A9A]">
                      Status: <strong className="text-[#D4AF37] font-semibold">Exclusively Booked</strong>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  This work is an original design crafted specifically for the client's muscle structure and silhouette. We offer completely personalized sketch development for each session.
                </p>
              </div>

              {/* Book consultation CTA */}
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={() => setSelectedTattoo(null)}
                  className="w-full py-4 bg-[#D4AF37] text-black text-xs tracking-[0.25em] uppercase font-bold text-center hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <BookOpen size={14} />
                  <span>Book Consultation</span>
                </Link>
                <button
                  onClick={() => setSelectedTattoo(null)}
                  className="w-full py-3 border border-white/10 hover:border-white/20 text-[#9A9A9A] hover:text-white text-[0.62rem] tracking-[0.25em] uppercase font-semibold text-center transition-colors"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .scale-up-anim {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  )
}
