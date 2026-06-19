'use client'

import Image from 'next/image'
import { Star, Quote, Heart, Hourglass } from 'lucide-react'
import { motion } from 'framer-motion'

interface ClientStory {
  clientName: string
  title: string
  style: string
  rating: number
  whyGotIt: string
  story: string
  experience: string
  beforeAfter: string
  image: string
}

const clientStories: ClientStory[] = [
  {
    clientName: "Rajesh Kumar",
    title: "Crest of Resilience",
    style: "Black & Grey Realism Lion",
    rating: 5,
    whyGotIt: "To honor my late grandfather who taught me to stand firm. The lion represents his protection and guidance.",
    story: "I carried the weight of losing my grandfather for two years. I wanted a piece that felt like it had ancient gravity, not just a generic drawing. Seeing Aravind sketch the details and bring his gaze to life on my forearm changed everything.",
    experience: "Aravind spent hours discussing the placement and muscle alignment. The hygiene and focus inside the studio were absolutely world-class.",
    beforeAfter: "Before, I felt a blank space of grief on my skin. After, I wear a permanent, beautiful badge of strength that heals my spirit every day.",
    image: "/Images/hero_artist_sleeve.jpg"
  },
  {
    clientName: "Priya Sharma",
    title: "Serpent & Rebirth",
    style: "Sacred Geometry & Fine Line",
    rating: 5,
    whyGotIt: "To celebrate surviving a near-fatal accident. The serpent represents shedding old trauma, and the mandala represents healing.",
    story: "It is an emotional reminder of rebirth. Seeing the high-precision lines flow over my physical scars every day gives me a strange, beautiful sense of victory over my past.",
    experience: "Aswin was incredibly gentle. The ambient calming music and absolute care they took in covering my scars made the process a therapeutic journey.",
    beforeAfter: "Before, my scars were a source of physical trauma and insecurity. After, Aswin turned my skin into a masterpiece of personal triumph.",
    image: "/Images/hero_client_sleeve.jpg"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="stories" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[250px] bg-gradient-to-r from-[#8B0000]/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              Emotional Journeys
            </span>
            <span className="w-5 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F5F5F5] tracking-tight uppercase mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Client Stories
          </h2>
          <p className="text-[#9A9A9A] max-w-xl text-sm md:text-base font-light leading-relaxed">
            A tattoo is never just ink. Read the profound meanings and emotional triumphs behind the artworks we create.
          </p>
        </div>

        {/* Stories list */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {clientStories.map((story, idx) => {
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Left: Large Image Card */}
                <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-sm overflow-hidden bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Floating Style Indicator */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-sm">
                    <span className="text-[0.55rem] tracking-[0.18em] uppercase font-bold text-[#D4AF37]">
                      {story.style}
                    </span>
                  </div>
                </div>

                {/* Right: Detailed Emotional Story */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                  
                  {/* Rating & Title */}
                  <div>
                    <div className="flex gap-1.5 mb-3.5">
                      {Array.from({ length: story.rating }).map((_, i) => (
                        <Star key={i} size={15} className="fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide font-display">
                      "{story.title}" — {story.clientName}
                    </h3>
                  </div>

                  {/* Why They Got It */}
                  <div className="p-4.5 bg-[#8B0000]/5 border-l-2 border-[#8B0000] rounded-sm">
                    <div className="flex gap-2 items-center mb-1 text-[#D4AF37]">
                      <Heart size={13} className="fill-[#D4AF37]/10" />
                      <span className="text-[0.58rem] tracking-[0.2em] uppercase font-bold">
                        The Core Intention
                      </span>
                    </div>
                    <p className="text-sm text-[#F5F5F5] font-medium leading-relaxed italic">
                      "{story.whyGotIt}"
                    </p>
                  </div>

                  {/* Story details */}
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <Quote size={20} className="text-[#D4AF37] opacity-60 flex-shrink-0 mt-1 rotate-180" />
                      <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                        {story.story}
                      </p>
                    </div>

                    {/* Studio Experience */}
                    <div className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                      <strong className="text-white font-medium">The Studio Experience:</strong> {story.experience}
                    </div>

                    {/* Before & After Journey */}
                    <div className="flex gap-3 items-start bg-white/5 p-4 border border-white/5 rounded-sm mt-4">
                      <Hourglass size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[0.55rem] tracking-[0.15em] text-[#D4AF37] uppercase font-bold block mb-1">
                          Before / After Journey
                        </span>
                        <p className="text-xs text-[#9A9A9A] leading-relaxed">
                          {story.beforeAfter}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
