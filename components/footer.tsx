'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import { getRandomTattooImages, TattooImage } from '@/lib/images'

export default function Footer() {
  const [thumbnails, setThumbnails] = useState<TattooImage[]>([])

  useEffect(() => {
    getRandomTattooImages(6).then(setThumbnails).catch(console.error)
  }, [])

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/tattoo_studio_logo.jpeg"
                alt="Aquarius Tattoo Logo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-md object-cover"
              />
              <span className="text-lg font-bold tracking-tight">AQUARIUS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium tattoo and piercing studio in the heart of Jayanagar, Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide">QUICK LINKS</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#home" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-accent transition-colors">
                  Price Calculator
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide">SERVICES</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/tattoos" className="hover:text-accent transition-colors">
                  Permanent Tattoos
                </Link>
              </li>
              <li>
                <Link href="/services/temporary-tattoos" className="hover:text-accent transition-colors">
                  Temporary Tattoos
                </Link>
              </li>
              <li>
                <Link href="/services/piercings" className="hover:text-accent transition-colors">
                  Body Piercing
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-accent transition-colors">
                  Tattoo Training
                </Link>
              </li>
              <li>
                <Link href="/services/clothing-art" className="hover:text-accent transition-colors">
                  Clothing Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Styles */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide">EXPLORE STYLES</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Realism Tattoos
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Japanese Tattoos
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Coverup Tattoos
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Minimalist Tattoos
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-accent transition-colors">
                  Our Artists
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram / Thumbnails */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide text-white">OUR WORK</p>
            <div className="grid grid-cols-3 gap-2">
              {thumbnails.map((thumb, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden bg-gray-900 border border-white/5 hover:border-accent cursor-pointer group">
                  <Image
                    src={thumb.src}
                    alt="Footer design thumbnail"
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors"></div>
                </div>
              ))}
            </div>

            <p className="font-semibold text-sm mt-8 mb-4 tracking-wide text-white">FOLLOW US</p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/aquarius_tattoos_bangalore/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 hover:border-accent hover:bg-accent hover:text-black transition-all text-gray-400"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61550120257740"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 hover:border-accent hover:bg-accent hover:text-black transition-all text-gray-400"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>
              &copy; 2026 Aquarius Tattoo Studio. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
