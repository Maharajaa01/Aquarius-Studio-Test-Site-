'use client'

import { useEffect, useState, use } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Trophy, Clock, Star } from 'lucide-react'
import { getArtistById, Artist } from '@/lib/artists'
import { getTattooImages, TattooImage } from '@/lib/images'

export default function ArtistProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [artist, setArtist] = useState<Artist | null>(null)
  const [gallery, setGallery] = useState<TattooImage[]>([])

  useEffect(() => {
    getArtistById(id).then(a => {
      if (!a) return
      setArtist(a)
      getTattooImages().then(({ allImages }) => {
        const artistImgs: TattooImage[] = (a.galleryImages ?? []).map((src) => ({ src, category: 'artist' }))
        const filler = allImages.slice(0, Math.max(0, 12 - artistImgs.length))
        setGallery([...artistImgs, ...filler])
      })
    })
  }, [id])

  if (!artist) return <div className="bg-[#0f0f0f] min-h-screen flex items-center justify-center text-white">Loading...</div>

  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16 border-b border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/artists"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Artists
          </Link>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full md:w-1/3 aspect-[3/4] rounded-sm overflow-hidden border border-white/10"
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-2/3"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-2">{artist.name}</h1>
              <p className="text-2xl text-accent font-bold tracking-widest uppercase mb-8">{artist.specialty}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="text-accent" size={20} />
                  <span>{artist.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Star className="text-accent" size={20} />
                  <span>{artist.styles.join(', ')}</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                {artist.bio}
              </p>

              {artist.awards.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-white font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Trophy size={18} className="text-accent" /> Awards & Recognitions
                  </h3>
                  <ul className="space-y-2">
                    {artist.awards.map((award, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="/calculator"
                className="inline-block px-10 py-5 bg-accent text-black font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(var(--accent),0.3)]"
              >
                Book {artist.name}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Artist Portfolio Gallery */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-12">Portfolio Showcase</h2>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="relative overflow-hidden break-inside-avoid border border-white/5 hover:border-accent transition-colors"
              >
                <Image
                  src={img.src}
                  alt={`${artist.name} work ${idx}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
