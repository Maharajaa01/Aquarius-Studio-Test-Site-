'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CoverupSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX)
  }

  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchend', handleMouseUp)
    } else {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="py-24 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Masterful Coverups
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Regret an old tattoo? Don't worry. Our coverup specialists can transform unwanted ink into a breathtaking masterpiece. Slide to reveal the transformation.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/9] overflow-hidden rounded-sm select-none border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src="/placeholder.jpg" // Using placeholder, ideally a coverup result
              alt="After Coverup"
              fill
              className="object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-accent text-black px-4 py-1 font-bold tracking-widest uppercase text-xs">
              After
            </div>
          </div>

          {/* Before Image (Clipped Overlay) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/placeholder-user.jpg" // Using placeholder, ideally the bad tattoo
              alt="Before Coverup"
              fill
              className="object-cover grayscale brightness-50" // Adding some effects to differentiate
              draggable={false}
            />
            <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 font-bold tracking-widest uppercase text-xs">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(var(--accent),0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-black" />
                <div className="w-0.5 h-3 bg-black" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
