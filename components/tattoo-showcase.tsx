'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { getRandomTattooImages, TattooImage } from '@/lib/images'

export default function TattooShowcase() {
  const [selectedImage, setSelectedImage] = useState<TattooImage | null>(null)
  const [tattoos, setTattoos] = useState<TattooImage[]>([])

  useEffect(() => {
    getRandomTattooImages(8).then(imgs => {
      // Fallback in case of empty list
      if (imgs.length === 0) {
        setTattoos([
          { src: '/hero-tattoo.jpg', category: 'realistic' }
        ])
      } else {
        setTattoos(imgs)
      }
    }).catch(console.error)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center tracking-tight">
          FEATURED WORK
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our latest tattoo designs and artistry
        </p>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-6 pb-4 md:pb-6 min-w-min">
              {tattoos.map((tattoo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(tattoo)}
                  className="flex-shrink-0 w-64 md:w-72 group cursor-pointer transition-all duration-300"
                >
                  <div className="relative h-80 md:h-96 overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(var(--accent),0.3)] transition-all">
                    <Image
                      src={tattoo.src}
                      alt={`${tattoo.category} tattoo preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                      quality={75}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center gap-3">
                        <span className="px-4 py-2 bg-accent/90 text-black font-bold uppercase tracking-wider text-xs rounded shadow-lg shadow-accent/20">
                          {tattoo.category}
                        </span>
                        <div className="flex items-center gap-2 text-white border border-white/50 px-4 py-2 hover:bg-white hover:text-black transition-colors rounded backdrop-blur-sm">
                          <ExternalLink size={16} />
                          <span className="font-semibold text-sm">View Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fade on sides for visual effect */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Fullscreen preview modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-51"
            aria-label="Close preview"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-4xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="relative h-96 md:h-[85vh] max-h-[85vh] rounded shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0f0f0f]">
              <Image
                src={selectedImage.src}
                alt={`${selectedImage.category} fullscreen preview`}
                fill
                className="object-contain"
                quality={90}
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-accent uppercase tracking-widest mb-2">
                {selectedImage.category} Design
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
