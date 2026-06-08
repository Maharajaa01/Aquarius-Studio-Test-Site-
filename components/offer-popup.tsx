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

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 transition-opacity duration-300 ${
        isVisible ? 'bg-black/60' : 'bg-black/0 pointer-events-none'
      }`}
    >
      <div
        className={`bg-black border-2 border-accent relative w-full sm:max-w-md shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100 sm:scale-100' : 'translate-y-4 opacity-0 sm:scale-95'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 hover:bg-secondary transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} className="text-accent" />
        </button>

        {/* Content */}
        <div className="p-5 sm:p-8 text-center">
          <div className="mb-2 sm:mb-4">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-accent font-semibold">
              Exclusive Offer
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-white">
            20% OFF
          </h2>

          <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6">
            Your First Tattoo or Piercing
          </p>

          <div className="bg-secondary border border-border p-3 sm:p-4 mb-4 sm:mb-8">
            <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Use Code</p>
            <p className="text-xl sm:text-2xl font-bold text-accent tracking-widest">
              AQUA20
            </p>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            Limited time offer. Valid for new clients only. Cannot be combined with other offers.
          </p>

          <button
            onClick={() => { handleClose(); router.push('/calculator') }}
            className="w-full px-6 py-3 sm:py-4 bg-accent text-accent-foreground font-semibold tracking-wide text-sm sm:text-base hover:bg-opacity-90 transition-all duration-200"
          >
            CLAIM OFFER
          </button>
        </div>
      </div>
    </div>
  )
}
