'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceHero } from '@/components/service-layout/ServiceHero'
import { ServiceProcess } from '@/components/service-layout/ServiceProcess'
import { ServiceGallery } from '@/components/service-layout/ServiceGallery'
import { ServiceCTA } from '@/components/service-layout/ServiceCTA'
import { StickyBookingButton } from '@/components/service-layout/StickyBookingButton'
import { getTattooImages, TattooImage } from '@/lib/images'

const processSteps = [
  { title: "Design Discussion", description: "Bring your ideas, and we'll craft a unique design that fits the temporary medium." },
  { title: "Ink Selection", description: "Choosing the right skin-safe, semi-permanent ink for your skin tone and desired longevity." },
  { title: "Placement & Stencil", description: "Trying out different placements before committing to the application." },
  { title: "Application Process", description: "Painless application using specialized techniques for a realistic look." },
  { title: "Removal & Fading Guidance", description: "Instructions on how to care for it, and how to remove it when you're ready." }
]

export default function TemporaryTattoosPage() {
  const [images, setImages] = useState<TattooImage[]>([])

  useEffect(() => {
    getTattooImages().then(({ allImages }) => {
      // Trying to find images that might fit temporary, or fallback to some
      const tempImages = allImages.filter(img => img.category.toLowerCase().includes('minimal') || img.category.toLowerCase().includes('temporary'))
      setImages(tempImages.length > 0 ? tempImages.slice(0, 9) : allImages.slice(0, 9))
    }).catch(console.error)
  }, [])

  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />
      
      <ServiceHero 
        title="Temporary Tattoos" 
        subtitle="Creative, playful, and commitment-free body art"
        imageSrc="/placeholder.jpg" // Will fallback to something cool
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-white">Express Yourself, Temporarily</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Want the look of a premium tattoo without the lifelong commitment? 
            Our temporary tattoo services are perfect for festivals, events, or simply trying out a design 
            before getting the real deal. We use high-quality, skin-safe inks that look remarkably realistic 
            and fade naturally over time.
          </p>
        </div>
      </section>

      <ServiceProcess steps={processSteps} />
      <ServiceGallery title="Temporary Ink Showcase" images={images} />
      
      <ServiceCTA 
        title="Try a Temporary Design"
        description="Book a session to experiment with your style in a fun, pressure-free environment."
        buttonText="Book Now"
        buttonLink="/calculator"
      />

      <Footer />
      <StickyBookingButton />
    </div>
  )
}
