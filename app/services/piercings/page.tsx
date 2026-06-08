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
  { title: "Consultation", description: "Discuss your desired piercing and anatomy suitability with our piercer." },
  { title: "Skin Sanitization", description: "Thorough cleaning and medical-grade prep of the piercing site." },
  { title: "Jewelry Selection", description: "Choose from our premium collection of titanium and gold body jewelry." },
  { title: "Safe Piercing Process", description: "Swift, precise execution using sterilized single-use needles (never guns)." },
  { title: "Healing Guidance", description: "Detailed walkthrough of the healing timeline and expectations." },
  { title: "Aftercare Support", description: "Follow-up checkups and aftercare products to ensure perfect healing." }
]

export default function PiercingsPage() {
  const [images, setImages] = useState<TattooImage[]>([])

  useEffect(() => {
    // In reality, you'd fetch piercing images, falling back to all images for now
    getTattooImages().then(({ allImages }) => {
      setImages(allImages.slice(0, 9))
    }).catch(console.error)
  }, [])

  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />
      
      <ServiceHero 
        title="Body Piercing" 
        subtitle="Safe, precise, and stylish body modifications"
        imageSrc="/hero-tattoo.jpg" // Update to piercing specific later
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-white">Precision & Safety First</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our piercing studio combines aesthetic expertise with medical-grade sterilization. 
            We offer a wide range of piercings including ear, nose, lip, eyebrow, navel, and cartilage. 
            We exclusively use premium, implant-grade titanium and solid gold jewelry to ensure 
            the safest healing process and the most stunning results.
          </p>
        </div>
      </section>

      <ServiceProcess steps={processSteps} />
      
      {/* Jewelry Highlight Section */}
      <section className="py-24 bg-[#0f0f0f] border-y border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-6 uppercase">Premium Jewelry Collection</h3>
          <p className="text-gray-400 mb-8">
            Upgrade your look with our curated selection of high-end body jewelry. 
            From minimalist titanium hoops to intricate gold and gem-set pieces.
          </p>
          <div className="inline-block px-6 py-3 border border-accent text-accent font-bold tracking-widest uppercase hover:bg-accent hover:text-black transition-colors">
            View Jewelry In-Store
          </div>
        </div>
      </section>

      <ServiceGallery title="Piercing Gallery" images={images} />
      
      <ServiceCTA 
        title="Elevate Your Style"
        description="Book your next piercing with our certified professionals."
        buttonText="Book a Piercing"
        buttonLink="/calculator"
      />

      <Footer />
      <StickyBookingButton />
    </div>
  )
}
