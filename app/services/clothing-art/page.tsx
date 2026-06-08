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
  { title: "Concept Design", description: "Share your vision or let our artists create a custom design for your apparel." },
  { title: "Garment Selection", description: "Bring your own items or choose from our premium blank apparel selection." },
  { title: "Fabric Preparation", description: "Treating the fabric to ensure the artwork adheres perfectly and lasts." },
  { title: "Painting & Illustration", description: "Applying the custom artwork using high-quality, flexible fabric paints and dyes." },
  { title: "Curing & Sealing", description: "Heat-setting the artwork to make it durable and washable." }
]

export default function ClothingArtPage() {
  const [images, setImages] = useState<TattooImage[]>([])

  useEffect(() => {
    // In reality, you'd fetch clothing art images, falling back to all images for now
    getTattooImages().then(({ allImages }) => {
      setImages(allImages.slice(0, 9))
    }).catch(console.error)
  }, [])

  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />
      
      <ServiceHero 
        title="Custom Clothing Art" 
        subtitle="Wearable masterpieces customized to your style"
        imageSrc="/placeholder.jpg" // Update to clothing art specific later
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-white">Art You Can Wear</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Elevate your streetwear with bespoke, hand-painted apparel. From custom denim jackets 
            and hand-illustrated sneakers to exclusive t-shirt designs, our artists apply their 
            tattooing precision and aesthetic flair to the world of fashion. 
            Stand out with 1-of-1 wearable art that reflects your unique identity.
          </p>
        </div>
      </section>

      <ServiceProcess steps={processSteps} />
      <ServiceGallery title="Fashion Showcase" images={images} />
      
      <ServiceCTA 
        title="Customize Your Style"
        description="Ready to transform your wardrobe? Contact us to discuss your custom clothing art piece."
        buttonText="Request Custom Order"
        buttonLink="/calculator"
      />

      <Footer />
      <StickyBookingButton />
    </div>
  )
}
