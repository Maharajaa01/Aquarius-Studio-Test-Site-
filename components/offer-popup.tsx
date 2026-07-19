'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

export default function OfferPopup() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  // Lock background scroll while the popup is open — without this the page
  // behind the overlay stays scrollable on mobile, which reads as a broken/
  // unresponsive modal (the backdrop shifts instead of the popup itself).
  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'bg-black/80 backdrop-blur-sm' : 'bg-black/0 pointer-events-none'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#0a0a0a] border border-accent/30 rounded-lg relative w-full max-w-[400px] max-h-[85vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)] transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/20 pointer-events-none" />

        {/* Close Button (large touch target for mobile friendliness) */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-accent/80 hover:text-accent transition-all z-10 hover:scale-105 active:scale-95"
          aria-label="Close dialog"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 text-center flex flex-col items-center">
          <div className="mb-2">
            <div className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[0.58rem] tracking-[0.3em] uppercase text-accent font-bold">
                Exclusive Offer
              </span>
            </div>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-black mb-1 text-white font-display tracking-tight uppercase"
            style={{ textShadow: '0 0 20px rgba(212, 175, 55, 0.15)' }}
          >
            ₹15,000 Worth Tattoo
          </h2>

          <h3 className="text-4xl sm:text-5xl font-black mb-3 text-accent font-display tracking-tight">
            FOR JUST ₹6,500
          </h3>

          <p className="text-xs sm:text-sm text-[#F5F5F5] font-semibold mb-4">
            Exclusive Launch Celebration Offer
          </p>

          {/* Promo Code Box */}
          <div className="bg-[#121212] border border-white/[0.05] rounded-md p-3 w-full mb-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase mb-0.5">Use Promo Code</p>
            <p className="text-xl sm:text-2xl font-black text-accent tracking-widest select-all">
              AQUA20
            </p>
          </div>

          <p className="text-[0.62rem] text-[#9A9A9A] mb-5 leading-relaxed max-w-[320px]">
            Pay just ₹6,500 for tattoos up to 25 sq in (worth ₹15,000). For tattoos larger than 25 sq in, enjoy a flat ₹8,500 discount on your total price!
          </p>

          <button
            onClick={() => { handleClose(); router.push('/calculator') }}
            className="w-full px-6 py-3.5 bg-accent text-accent-foreground font-bold tracking-widest text-[0.65rem] uppercase hover:bg-accent/95 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all duration-200 rounded-sm"
          >
            CLAIM OFFER
          </button>
        </div>
      </div>
    </div>
  )
}
