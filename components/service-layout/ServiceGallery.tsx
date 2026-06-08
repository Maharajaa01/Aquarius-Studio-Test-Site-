'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { TattooImage } from '@/lib/images'

interface ServiceGalleryProps {
  title?: string
  images: TattooImage[]
}

export function ServiceGallery({ title = "Gallery", images }: ServiceGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  if (!images || images.length === 0) return null

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase">{title}</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.slice(0, 9).map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="group relative cursor-pointer overflow-hidden break-inside-avoid border border-white/5 hover:border-accent transition-all"
            >
              <Image
                src={item.src}
                alt={`${item.category} tattoo preview`}
                width={500}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <p className="opacity-0 group-hover:opacity-100 text-white font-bold tracking-widest uppercase transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  View
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-[60] bg-black/50 p-2 rounded-full"
          >
            <X size={32} />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-[60] p-2 bg-black/50 rounded-full"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-[60] p-2 bg-black/50 rounded-full"
          >
            <ChevronRight size={48} />
          </button>

          <div className="w-full max-w-5xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-[70vh] md:h-[85vh]">
              <Image
                src={images[selectedIndex].src}
                alt="Fullscreen preview"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <p className="text-gray-400 mt-4 text-sm tracking-wide">
              {selectedIndex + 1} of {Math.min(images.length, 9)}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
