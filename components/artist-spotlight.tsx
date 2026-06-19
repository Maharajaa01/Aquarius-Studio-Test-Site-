'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, FileText, Award, Star, ShieldCheck } from 'lucide-react'

interface ArtistSpotlightData {
  id: string
  name: string
  role: string
  specialty: string
  experience: string
  yearsInIndustry: number
  specialization: string
  awards: string[]
  instagram: string
  portfolioLink: string
  image: string
}

const spotlightArtists: ArtistSpotlightData[] = [
  {
    id: "aravind",
    name: "Aravind",
    role: "Founding Lead Artist",
    specialty: "Hyper-Realism & Dark Surrealism",
    experience: "8+ Years",
    yearsInIndustry: 8,
    specialization: "Detailed portraits, structural shading, and full scale sleeve concepts.",
    awards: [
      "Bangalore Tattoo Expo 2023 - Best Black & Grey Realism",
      "South India Tattoo Convention 2024 - Best Coverup Artistry"
    ],
    instagram: "https://www.instagram.com/aquarius_tattoos_bangalore/?hl=en",
    portfolioLink: "/artists/aravind",
    image: "/Images/hero_artist_sleeve.jpg"
  },
  {
    id: "aswin",
    name: "Aswin",
    role: "Senior Geometric Designer",
    specialty: "Sacred Geometry & Fine Line",
    experience: "6+ Years",
    yearsInIndustry: 6,
    specialization: "Precise dotwork patterns, symmetric mandala designs, and micro-realism fine line.",
    awards: [
      "India Ink Festival 2022 - Design Innovation Award",
      "Alternative Art Guild 2024 - Fine Line Master"
    ],
    instagram: "https://www.instagram.com/aquarius_tattoos_bangalore/?hl=en",
    portfolioLink: "/artists/aswin",
    image: "/Images/hero_client_sleeve.jpg"
  }
]

export default function ArtistSpotlight() {
  return (
    <section id="artists" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Visual glowing layout */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[250px] bg-gradient-to-r from-[#8B0000]/5 to-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              The Masterminds
            </span>
            <span className="w-5 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F5F5F5] tracking-tight uppercase mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Artist Spotlight
          </h2>
          <p className="text-[#9A9A9A] max-w-xl text-sm md:text-base font-light leading-relaxed">
            Meet Bangalore's elite designers. Our artists do not copy designs; they work with you to engineer authentic statements tailored exclusively for your skin.
          </p>
        </div>

        {/* Artists Designer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {spotlightArtists.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-500 rounded-sm overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              
              {/* Designer Card Picture */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 580px"
                  loading="lazy"
                />
                {/* Vignette styling overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/30" />
                
                {/* Float experience pill */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-sm flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#D4AF37]" />
                  <span className="text-[0.55rem] tracking-[0.18em] uppercase font-bold text-white">
                    {artist.experience} XP
                  </span>
                </div>
              </div>

              {/* Designer Card Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide font-display">
                      {artist.name}
                    </h3>
                    <span className="text-[0.62rem] tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                      {artist.role}
                    </span>
                  </div>
                  <p className="text-xs text-[#9A9A9A] tracking-wider uppercase font-semibold mb-6">
                    {artist.specialty}
                  </p>

                  <div className="space-y-6">
                    {/* Specialization Description */}
                    <div>
                      <span className="text-[0.55rem] tracking-[0.15em] text-[#D4AF37] uppercase font-bold block mb-1">
                        Design Focus
                      </span>
                      <p className="text-sm text-[#9A9A9A] font-light leading-relaxed">
                        {artist.specialization}
                      </p>
                    </div>

                    {/* Stats details */}
                    <div className="grid grid-cols-2 gap-4 bg-black/30 p-4 border border-white/5 rounded-sm">
                      <div>
                        <span className="text-[0.5rem] tracking-[0.1em] text-[#9A9A9A] uppercase block">
                          Years in Industry
                        </span>
                        <span className="text-base font-bold text-white">
                          {artist.yearsInIndustry} Years
                        </span>
                      </div>
                      <div>
                        <span className="text-[0.5rem] tracking-[0.1em] text-[#9A9A9A] uppercase block">
                          Custom Artworks
                        </span>
                        <span className="text-base font-bold text-white">
                          100% Unique
                        </span>
                      </div>
                    </div>

                    {/* Awards list */}
                    <div>
                      <span className="text-[0.55rem] tracking-[0.15em] text-[#D4AF37] uppercase font-bold block mb-2">
                        Convention Accolades
                      </span>
                      <div className="space-y-2">
                        {artist.awards.map((award, aIdx) => (
                          <div key={aIdx} className="flex gap-2.5 items-start">
                            <Award size={14} className="text-[#8B0000] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-[#9A9A9A] font-light">
                              {award}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artist Links and Contact */}
                <div className="flex gap-4 border-t border-white/5 pt-6 mt-8">
                  <Link
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 border border-white/5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[0.62rem] tracking-[0.2em] uppercase font-bold text-center flex items-center justify-center gap-2 text-[#9A9A9A] hover:text-white transition-all duration-300"
                  >
                    <Instagram size={14} className="text-[#D4AF37]" />
                    <span>Follow Designs</span>
                  </Link>
                  <Link
                    href={artist.portfolioLink}
                    className="flex-1 py-3.5 bg-white/5 hover:bg-white text-black hover:text-black text-[0.62rem] tracking-[0.2em] uppercase font-bold text-center flex items-center justify-center gap-2 text-white transition-all duration-300"
                  >
                    <FileText size={14} />
                    <span>View Profile</span>
                  </Link>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
