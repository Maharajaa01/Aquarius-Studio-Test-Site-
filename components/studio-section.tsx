'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react'

// Define the asset types
type StudioItem = 
  | { type: 'video'; src: string; poster: string; alt: string }
  | { type: 'image'; src: string; alt: string }

const studioItems: StudioItem[] = [
  {
    type: 'video',
    src: '/studio/home_page_video.mp4',
    poster: '/studio/studio.JPG',
    alt: 'Aquarius Tattoo Studio Walkthrough Tour'
  },
  {
    type: 'image',
    src: '/studio/studio.JPG',
    alt: 'Luxury Tattoo Studio Environment'
  },
  {
    type: 'image',
    src: '/studio/tattoo_studio.JPG',
    alt: 'Elite Artist Workstation'
  },
  {
    type: 'image',
    src: '/studio/tattoo_studio_img1.JPG',
    alt: 'High-Precision Tattooing Equipment'
  },
  {
    type: 'image',
    src: '/studio/IMG_1111.JPG',
    alt: 'Comfortable Client Lounge'
  }
]

export default function StudioSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  const prevItem = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? studioItems.length - 1 : prev! - 1))
    }
  }

  const nextItem = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === studioItems.length - 1 ? 0 : prev! + 1))
    }
  }

  // Grid classes for a stunning 5-item bento-box layout (3-column grid)
  // Item 0 (Video): spans 2 cols and 2 rows for a massive, eye-catching cinematic feature
  const gridClasses = [
    'md:col-span-2 md:row-span-2 h-[350px] md:h-[620px]', // Massive featured video (2x2)
    'md:col-span-1 md:row-span-1 h-[170px] md:h-[298px]', // Top-right image (1x1)
    'md:col-span-1 md:row-span-1 h-[170px] md:h-[298px]', // Middle-right image (1x1)
    'md:col-span-2 md:row-span-1 h-[170px] md:h-[298px]', // Bottom-left wide image (2x1)
    'md:col-span-1 md:row-span-1 h-[170px] md:h-[298px]', // Bottom-right image (1x1)
  ]

  return (
    <section id="studio" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-gradient from-[#D4AF37]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-[#D4AF37]" />
            <span className="text-[0.6rem] tracking-[0.3em] font-bold text-[#D4AF37] uppercase">
              Immersive Space
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white uppercase font-display">
            Our Creative Sanctuary
          </h2>
          <p className="text-[#9A9A9A] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Step inside Bangalore's premier tattoo studio. Designed with luxury, hygiene, and absolute artistic freedom in mind.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {studioItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-md border border-white/10 bg-[#0c0c0c] cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-[#D4AF37]/40 transition-all duration-500 ${gridClasses[index]}`}
              onClick={() => openModal(index)}
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-105"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                  {/* Glassmorphic Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-black/35">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black group-hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]">
                      <Play
                        className="w-6 h-6 fill-current translate-x-0.5"
                      />
                    </div>
                    <span className="mt-4 text-[0.58rem] tracking-[0.25em] font-bold text-white/90 uppercase group-hover:text-white transition-colors">
                      *
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Subtle Shading Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* Zoom/Maximize Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm bg-white/5">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Caption Tag (displays on hover at the bottom left) */}
              <div className="absolute bottom-4 left-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-[0.55rem] tracking-[0.2em] font-bold text-[#D4AF37] uppercase block mb-0.5">
                  {item.type === 'video' ? 'Video Tour' : 'Studio Space'}
                </span>
                <span className="text-white text-xs font-semibold">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex flex-col items-center justify-center"
          onClick={closeModal}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center px-4">
            {/* Prev button */}
            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white hover:bg-white/10 transition-all z-50 p-3 bg-black/40 rounded-full border border-white/5 backdrop-blur-sm hover:scale-105"
              onClick={prevItem}
              aria-label="Previous item"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            {/* Media Container */}
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {studioItems[selectedIndex].type === 'video' ? (
                <video
                  src={studioItems[selectedIndex].src}
                  className="max-w-full max-h-full rounded-md shadow-2xl border border-white/10 object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={studioItems[selectedIndex].src}
                    alt={studioItems[selectedIndex].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>
            
            {/* Next button */}
            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white hover:bg-white/10 transition-all z-50 p-3 bg-black/40 rounded-full border border-white/5 backdrop-blur-sm hover:scale-105"
              onClick={nextItem}
              aria-label="Next item"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Caption and Indicator at the bottom */}
          <div className="mt-8 flex flex-col items-center text-center gap-2 px-6 max-w-xl z-20">
            <p className="text-[#D4AF37] text-[0.65rem] tracking-[0.25em] font-bold uppercase">
              {studioItems[selectedIndex].type === 'video' ? 'Interactive Video Tour' : 'Studio Showcase'}
            </p>
            <h3 className="text-white text-lg font-bold">
              {studioItems[selectedIndex].alt}
            </h3>
            <span className="text-white/40 text-xs tracking-widest mt-2 font-medium">
              {selectedIndex + 1} / {studioItems.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

