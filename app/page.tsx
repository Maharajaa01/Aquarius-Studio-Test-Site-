'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import OfferPopup from '@/components/offer-popup'

// Critical Above-The-Fold / Lightweight Global UI
import CustomCursor from '@/components/custom-cursor'
import FloatingBookButton from '@/components/floating-book-button'

// Section Loading Skeletons
const SectionSkeleton = () => <div className="w-full min-h-[300px] bg-black/20 animate-pulse" />

// Below-the-fold components dynamically imported for faster initial page render
const AmbientParticles = dynamic(() => import('@/components/ambient-particles'), { ssr: false })
const AnniversaryOffer = dynamic(() => import('@/components/homepage/AnniversaryOffer'), { loading: SectionSkeleton })
const TattooShowcase = dynamic(() => import('@/components/tattoo-showcase'), { loading: SectionSkeleton })
const StatsSection = dynamic(() => import('@/components/stats-section'), { loading: SectionSkeleton })
const StylesSection = dynamic(() => import('@/components/styles-section'), { loading: SectionSkeleton })
const ArtistSpotlight = dynamic(() => import('@/components/artist-spotlight'), { loading: SectionSkeleton })
const BehindTheInk = dynamic(() => import('@/components/homepage/BehindTheInk'), { loading: SectionSkeleton })
const StudioSection = dynamic(() => import('@/components/studio-section'), { loading: SectionSkeleton })
const TrustAndHygiene = dynamic(() => import('@/components/homepage/TrustAndHygiene'), { loading: SectionSkeleton })
const ServicesSection = dynamic(() => import('@/components/services-section'), { loading: SectionSkeleton })
const CoverupSlider = dynamic(() => import('@/components/homepage/CoverupSlider'), { loading: SectionSkeleton })
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'), { loading: SectionSkeleton })
const FAQSection = dynamic(() => import('@/components/faq-section'), { loading: SectionSkeleton })
const FinancialFlexibility = dynamic(() => import('@/components/homepage/FinancialFlexibility'), { loading: SectionSkeleton })
const BookingCTA = dynamic(() => import('@/components/booking-cta'), { loading: SectionSkeleton })
const ContactSection = dynamic(() => import('@/components/contact-section'), { loading: SectionSkeleton })
const Footer = dynamic(() => import('@/components/footer'), { loading: SectionSkeleton })

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
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

