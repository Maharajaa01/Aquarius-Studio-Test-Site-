'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceHero } from '@/components/service-layout/ServiceHero'
import { ServiceProcess } from '@/components/service-layout/ServiceProcess'
import { ServiceCTA } from '@/components/service-layout/ServiceCTA'
import { StickyBookingButton } from '@/components/service-layout/StickyBookingButton'

const processSteps = [
  { title: "Beginner Training", description: "Fundamentals of drawing for tattoos and basic machine understanding." },
  { title: "Machine & Needle Handling", description: "Mastering different tattoo machines, needle configurations, and voltage." },
  { title: "Skin Anatomy & Safety", description: "Understanding skin layers, sterilization, cross-contamination, and bloodborne pathogens." },
  { title: "Advanced Techniques", description: "Shading, color packing, lining, and exploring different tattoo styles." },
  { title: "Live Practice", description: "Supervised practice on synthetic skin followed by live models." },
  { title: "Certification", description: "Graduation and receiving your professional tattoo artist certification." }
]

export default function TrainingPage() {
  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />
      
      <ServiceHero 
        title="Tattoo Academy" 
        subtitle="Turn your passion for art into a professional career"
        imageSrc="/placeholder.jpg" // Add a studio/learning image later
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-white">Learn From The Masters</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The Aquarius Tattoo Academy offers comprehensive training for aspiring tattoo artists. 
            Our curriculum covers everything from health and safety regulations to advanced shading techniques 
            and client management. Benefit from hands-on mentorship, an immersive studio environment, and 
            internship opportunities upon graduation.
          </p>
        </div>
      </section>

      <ServiceProcess title="Course Modules" steps={processSteps} />
      
      {/* Course Details Highlights */}
      <section className="py-24 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 text-center hover:border-accent transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">6 Months</h3>
            <p className="text-gray-400">Intensive hands-on training program covering all fundamental and advanced skills.</p>
          </div>
          <div className="p-8 border border-white/10 text-center hover:border-accent transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">Live Models</h3>
            <p className="text-gray-400">Guaranteed practical experience with real clients under close expert supervision.</p>
          </div>
          <div className="p-8 border border-white/10 text-center hover:border-accent transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">Career Support</h3>
            <p className="text-gray-400">Guidance on building your portfolio, marketing, and securing a resident artist position.</p>
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Start Your Journey"
        description="Enroll in our next batch and take the first step towards your career as a professional tattoo artist."
        buttonText="Enroll Now"
        buttonLink="#contact" // Link to contact or enrollment form
      />

      <Footer />
      <StickyBookingButton />
    </div>
  )
}
