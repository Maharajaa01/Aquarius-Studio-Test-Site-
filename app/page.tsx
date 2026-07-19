'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import OfferPopup from '@/components/offer-popup'
import AmbientParticles from '@/components/ambient-particles'
import CustomCursor from '@/components/custom-cursor'
import TattooShowcase from '@/components/tattoo-showcase'
import StatsSection from '@/components/stats-section'
import StylesSection from '@/components/styles-section'
import ArtistSpotlight from '@/components/artist-spotlight'
import StudioSection from '@/components/studio-section'
import ServicesSection from '@/components/services-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import BookingCTA from '@/components/booking-cta'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import FloatingBookButton from '@/components/floating-book-button'

import BehindTheInk from '@/components/homepage/BehindTheInk'
import TrustAndHygiene from '@/components/homepage/TrustAndHygiene'
import CoverupSlider from '@/components/homepage/CoverupSlider'
import FinancialFlexibility from '@/components/homepage/FinancialFlexibility'
import AnniversaryOffer from '@/components/homepage/AnniversaryOffer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Arriving here via a link like "/#services" from another page can beat this
  // page's heavy section tree to mounting, so Next's built-in hash scroll fires
  // before the target element exists and silently does nothing. Retry on
  // animation frames until the target shows up (or give up after ~1s).
  useEffect(() => {
    if (!window.location.hash) return
    const id = window.location.hash.slice(1)

    let rafId: number
    let attempts = 0
    const maxAttempts = 60

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts++
      if (attempts < maxAttempts) {
        rafId = requestAnimationFrame(tryScroll)
      }
    }
    rafId = requestAnimationFrame(tryScroll)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="bg-background text-foreground">
      <CustomCursor />
      <AmbientParticles />
      <Navigation isScrolled={isScrolled} />
      <OfferPopup />
      <HeroSection />
      <AnniversaryOffer />
      <TattooShowcase />
      <StatsSection />
      <StylesSection />
      <ArtistSpotlight />
      
      <BehindTheInk />
      
      <StudioSection />
      <TrustAndHygiene />
      
      <ServicesSection />
      <CoverupSlider />
      
      <TestimonialsSection />
      <FAQSection />
      <FinancialFlexibility />
      
      <BookingCTA />
      <ContactSection />
      <Footer />
      <FloatingBookButton />
    </div>
  )
}
