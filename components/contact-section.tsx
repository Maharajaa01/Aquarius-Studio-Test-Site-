'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getRandomTattooImages, TattooImage } from '@/lib/images'

export default function ContactSection() {
  const [bgImage, setBgImage] = useState<string | null>(null)

  useEffect(() => {
    getRandomTattooImages(1).then(images => {
      if (images && images.length > 0) setBgImage(images[0].src)
    }).catch(console.error)
  }, [])

  return (
    <section id="contact" className="relative py-16 md:py-24 border-b border-border overflow-hidden">
      {/* Blurred Background with Gradient Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover blur-[8px] scale-110 opacity-30"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0f0f0f]/95 to-black/95 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Text inserted correctly */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">BOOK YOUR TATTOO</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get in touch with us today to discuss your ideas, get an estimate, or schedule your next amazing tattoo.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-black/40 backdrop-blur-sm p-8 border border-white/5 rounded-sm">

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1 tracking-wide">PHONE</p>
                  <Link
                    href="tel:+916380904534"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 6380 904534
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1 tracking-wide">EMAIL</p>
                  <Link
                    href="mailto:aquariustattoostudio9@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    aquariustattoostudio9@gmail.com
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1 tracking-wide">LOCATION</p>
                  <p className="text-muted-foreground">
                    16th C Main Road, 4th Block,
                    <br />
                    Jayanagar, Bangalore - 560011
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1 tracking-wide">HOURS</p>
                  <p className="text-muted-foreground">
                    Open 7 Days a Week
                    <br />
                    12:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Quick Contact Form */}
            <div className="border border-border p-8 bg-secondary">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Google Map Embed */}
            <div className="border border-border overflow-hidden h-64 bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9221254652766!2d77.59726947346189!3d12.935199287342156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc16e5e5e5d%3A0x3c3c3c3c3c3c3c3c!2sJayanagar%2C%20Bangalore%2C%20Karnataka%20560011!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
