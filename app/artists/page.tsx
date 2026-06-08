'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { artists } from '@/lib/artists'

export default function ArtistsPage() {
  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
      <Navigation isScrolled={true} />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase mb-6">
              Our Master Artists
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the award-winning visionaries behind Aquarius Tattoo Studio. 
              Each artist brings a unique mastery to the table.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artists.map((artist, idx) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden bg-black border border-white/5 rounded-sm hover:border-accent transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto sm:h-auto overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{artist.name}</h2>
                      <p className="text-accent font-bold tracking-widest text-sm uppercase mb-4">{artist.specialty}</p>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-6">{artist.bio}</p>
                    </div>
                    <Link
                      href={`/artists/${artist.id}`}
                      className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors w-fit pb-1 border-b-2 border-transparent hover:border-accent"
                    >
                      View Portfolio <span>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
