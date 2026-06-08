'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const studioImages = [
  { src: '/studio/studio.JPG', alt: 'Tattoo Studio Environment 1' },
  { src: '/studio/tattoo_studio.JPG', alt: 'Tattoo Studio Environment 2' },
  { src: '/studio/tattoo_studio_img1.JPG', alt: 'Tattoo Studio Environment 3' },
  { src: '/studio/IMG_1111.JPG', alt: 'Tattoo Studio Environment 4' },
]

export default function StudioSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? studioImages.length - 1 : prev! - 1))
    }
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === studioImages.length - 1 ? 0 : prev! + 1))
    }
  }

  // Grid classes for a dynamic bento-box layout (4 images)
  const gridClasses = [
    'md:col-span-2 md:row-span-1 h-[300px] md:h-[400px]', // Large top left
    'md:col-span-1 md:row-span-1 h-[300px] md:h-[400px]', // Top right
    'md:col-span-1 md:row-span-1 h-[300px] md:h-[400px]', // Bottom left
    'md:col-span-2 md:row-span-1 h-[300px] md:h-[400px]', // Large bottom right
  ]

  return (
    <section id="studio" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Our Studio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            “Take a look inside our creative space”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {studioImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${gridClasses[index]}`}
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="text-white w-10 h-10 drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50 p-2"
            onClick={closeModal}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center px-4">
            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={studioImages[selectedImageIndex].src}
                alt={studioImages[selectedImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
          <div className="absolute bottom-6 text-white/80 text-sm tracking-widest font-light">
            {selectedImageIndex + 1} / {studioImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
