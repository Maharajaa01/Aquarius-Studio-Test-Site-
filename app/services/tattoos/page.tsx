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
  { title: "Consultation", description: "Discuss your ideas, references, and placement with our artists." },
  { title: "Design Selection", description: "We sketch and refine the design until it matches your vision perfectly." },
  { title: "Skin Examination", description: "Checking skin condition and mapping the area for optimal placement." },
  { title: "Hygiene Prep", description: "Sterilizing the area and setting up medical-grade equipment." },
  { title: "Tattooing Process", description: "The magic happens with precision, care, and professional execution." },
  { title: "Aftercare", description: "Wrapping the tattoo and providing detailed healing instructions." }
]

export default function PermanentTattoosPage() {
  const [images, setImages] = useState<TattooImage[]>([])

  useEffect(() => {
    getTattooImages().then(({ allImages }) => {
      // Filter permanent tattoo categories (assuming 'permanent', 'japanese', etc. are for permanent)
      // For now we'll just grab a subset or all
      setImages(allImages.filter(img => img.category !== 'temporary').slice(0, 9))
    }).catch(console.error)
  }, [])

  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />
      
      <ServiceHero 
        title="Permanent Tattoos" 
        subtitle="Luxury custom designs executed by master artists"
        imageSrc="/hero-tattoo.jpg" // We'll use a reliable hero image
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-white">Mastering The Art of Ink</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Aquarius Tattoo Studio, we don't just apply ink; we craft lifelong masterpieces.
            From intricate fine-line realism to bold traditional Japanese pieces, our certified artists
            use industry-leading techniques and premium vegan inks to bring your imagination to life.
            Every session is treated as a premium experience in a highly sterile, comfortable environment.
          </p>
        </div>
      </section>

      <ServiceProcess steps={processSteps} />
      <ServiceGallery title="Tattoo Masterpieces" images={images} />
      
      <ServiceCTA 
        title="Ready for your masterpiece?"
        description="Book a consultation today and let's start designing your next permanent artwork."
        buttonText="Book Your Session"
        buttonLink="/calculator"
      />

      <Footer />
      <StickyBookingButton />
    </div>
  )
}
