'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react'

const ARTISTS = [
  {
    id: 'aravind',
    name: 'Aravind',
    specialty: 'Realism & Black and Grey',
    rate: 299,
    portfolioHref: '/artists/aravind',
  },
  {
    id: 'aswin',
    name: 'Aswin',
    specialty: 'Fine Line & Geometric',
    rate: 599,
    portfolioHref: '/artists/aswin',
  },
] as const

type ArtistId = (typeof ARTISTS)[number]['id']

export default function CalculatorPage() {
  const [type, setType] = useState<'tattoo' | 'piercing'>('tattoo')
  const [length, setLength] = useState(1)
  const [width, setWidth] = useState(1)
  const [selectedArtist, setSelectedArtist] = useState<ArtistId | null>(null)
  const [offer, setOffer] = useState('standard')
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  const validateCoupon = (code: string): number => {
    const coupons: Record<string, number> = {
      AQUA20: 0.20,
      AQUA25: 0.25,
      FIRST15: 0.15,
    }
    return coupons[code.toUpperCase()] || 0
  }

  const area = length * width

  const calculatePrice = (): { display: string; raw: number } => {
    if (type === 'piercing') {
      return { display: '₹1,500 – ₹2,500', raw: 1500 }
    }
    if (!selectedArtist) {
      const lo = Math.max(area * 299, 1500)
      const hi = Math.max(area * 599, 1500)
      return {
        display: `₹${lo.toLocaleString('en-IN')} – ₹${hi.toLocaleString('en-IN')}`,
        raw: lo,
      }
    }
    const artist = ARTISTS.find((a) => a.id === selectedArtist)!
    const price = Math.max(area * artist.rate, 1500)
    return { display: `₹${price.toLocaleString('en-IN')}`, raw: price }
  }

  const { display: priceDisplay, raw: basePrice } = calculatePrice()
  const discountPercent = appliedCoupon ? validateCoupon(appliedCoupon) : 0
  const discountAmount = Math.round(basePrice * discountPercent)
  const finalPrice = Math.round(basePrice - discountAmount)

  const handleApplyCoupon = () => {
    if (validateCoupon(couponCode) > 0) {
      setAppliedCoupon(couponCode)
      setCouponCode('')
    }
  }

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode('')
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Price Calculator
          </h1>
          <p className="text-muted-foreground mb-12">
            Get an estimated price for your tattoo or piercing
          </p>

          {/* Card Container */}
          <div className="border border-border p-8 md:p-12 bg-secondary">

            {/* Type Toggle */}
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-wide uppercase mb-4">
                Service Type
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setType('tattoo')}
                  className={`flex-1 py-3 px-4 font-semibold tracking-wide transition-all ${
                    type === 'tattoo'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background border border-border hover:border-accent'
                  }`}
                >
                  TATTOO
                </button>
                <button
                  onClick={() => setType('piercing')}
                  className={`flex-1 py-3 px-4 font-semibold tracking-wide transition-all ${
                    type === 'piercing'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background border border-border hover:border-accent'
                  }`}
                >
                  PIERCING
                </button>
              </div>
            </div>

            <div className="border-t border-border my-8" />

            {/* Tattoo Inputs */}
            {type === 'tattoo' ? (
              <>
                {/* Length */}
                <div className="mb-8">
                  <label className="text-sm font-semibold tracking-wide uppercase mb-3 block">
                    Length (inches)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={length}
                      onChange={(e) => setLength(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-border cursor-pointer accent-accent"
                    />
                    <span className="text-2xl font-bold text-accent w-16 text-right">
                      {length}"
                    </span>
                  </div>
                </div>

                {/* Width */}
                <div className="mb-8">
                  <label className="text-sm font-semibold tracking-wide uppercase mb-3 block">
                    Breadth (inches)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-border cursor-pointer accent-accent"
                    />
                    <span className="text-2xl font-bold text-accent w-16 text-right">
                      {width}"
                    </span>
                  </div>
                </div>

                {/* Area Display */}
                <div className="mb-8 p-4 bg-background border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Area</p>
                  <p className="text-3xl font-bold">
                    {area} sq in
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {length}" × {width}" = {area} sq in
                  </p>
                </div>

                {/* Artist Selection */}
                <div className="mb-8">
                  <p className="text-sm font-semibold tracking-wide uppercase mb-4">
                    Choose Your Artist
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ARTISTS.map((artist) => {
                      const isSelected = selectedArtist === artist.id
                      return (
                        <div
                          key={artist.id}
                          onClick={() => setSelectedArtist(artist.id)}
                          className={`relative cursor-pointer p-5 border-2 transition-all duration-200 ${
                            isSelected
                              ? 'border-accent bg-accent/10'
                              : 'border-border bg-background hover:border-accent/50'
                          }`}
                        >
                          {/* Selected checkmark */}
                          {isSelected && (
                            <CheckCircle2
                              size={18}
                              className="absolute top-3 right-3 text-accent"
                            />
                          )}

                          <h3 className={`text-lg font-bold mb-1 transition-colors ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                            {artist.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-3">
                            {artist.specialty}
                          </p>
                          <p className="text-2xl font-bold text-accent mb-4">
                            ₹{artist.rate}
                            <span className="text-sm font-normal text-muted-foreground ml-1">/ sq in</span>
                          </p>

                          {/* View Portfolio button */}
                          <Link
                            href={artist.portfolioHref}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase border border-border px-3 py-2 hover:border-accent hover:text-accent transition-colors"
                          >
                            View Portfolio
                            <ExternalLink size={11} />
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                  {!selectedArtist && (
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      * Select an artist to see their exact price
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="mb-8 p-4 bg-background border border-border text-center">
                <p className="text-muted-foreground mb-2">Standard Piercing Price</p>
                <p className="text-lg font-semibold">₹1,500 – ₹2,500</p>
              </div>
            )}

            {/* Offer Dropdown */}
            <div className="mb-8">
              <label className="text-sm font-semibold tracking-wide uppercase mb-3 block">
                Offer / Package
              </label>
              <select
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                <option value="standard">Standard</option>
                <option value="custom">Custom Design</option>
                <option value="cover-up">Cover-up</option>
              </select>
            </div>

            {/* Coupon Code Section */}
            <div className="mb-8 p-4 md:p-6 bg-gradient-to-r from-accent/10 to-transparent border border-accent/30">
              <label className="text-sm font-semibold tracking-wide uppercase mb-3 block text-accent">
                Have a Coupon Code?
              </label>
              {!appliedCoupon ? (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <input
                    type="text"
                    placeholder="e.g., AQUA20"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="flex-1 px-3 sm:px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors text-sm sm:text-base"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    disabled={!couponCode}
                    className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
                  >
                    APPLY
                  </button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-background border border-accent p-3 sm:p-4 gap-3 sm:gap-0">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Applied Code</p>
                    <p className="text-lg sm:text-lg font-bold text-accent">{appliedCoupon}</p>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="w-full sm:w-auto px-4 py-2 bg-secondary text-foreground text-sm font-semibold hover:bg-border transition-colors"
                  >
                    REMOVE
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-border my-8" />

            {/* Price Display */}
            <div className="mb-8 space-y-4">
              {appliedCoupon && selectedArtist && (
                <div className="p-4 bg-green-900/20 border border-green-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-green-400">Discount Applied</p>
                    <p className="text-lg font-bold text-green-400">-₹{discountAmount.toLocaleString('en-IN')}</p>
                  </div>
                  <p className="text-xs text-green-300">You save {Math.round(discountPercent * 100)}% on this service!</p>
                </div>
              )}

              <div className="p-6 bg-background border-2 border-accent">
                <p className="text-sm text-muted-foreground mb-2 tracking-wide">
                  {appliedCoupon && selectedArtist ? 'FINAL PRICE' : 'ESTIMATED PRICE'}
                </p>

                {appliedCoupon && selectedArtist ? (
                  <div>
                    <p className="text-xs text-muted-foreground line-through mb-2">
                      ₹{basePrice.toLocaleString('en-IN')}
                    </p>
                    <p className="text-4xl md:text-5xl font-bold text-accent mb-4">
                      ₹{finalPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                ) : (
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-4">
                    {priceDisplay}
                  </p>
                )}

                {type === 'tattoo' && selectedArtist && (
                  <p className="text-xs text-muted-foreground mb-2">
                    {area} sq in × ₹{ARTISTS.find((a) => a.id === selectedArtist)!.rate}/sq in
                    {area * ARTISTS.find((a) => a.id === selectedArtist)!.rate < 1500 && ' (minimum charge applied)'}
                  </p>
                )}
                <p className="text-xs text-muted-foreground italic">
                  * Final price may vary based on design complexity
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/#contact"
                className="px-6 py-4 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all text-center"
              >
                BOOK NOW
              </Link>
              <Link
                href="/artists"
                className="px-6 py-4 bg-transparent border-2 border-foreground text-foreground font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all text-center"
              >
                MEET ARTISTS
              </Link>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border p-6">
              <h3 className="text-lg font-bold mb-3">About Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Pricing is based on the total area (length × breadth) and your chosen artist. Minimum charge of ₹1,500 applies. Complex designs may be quoted separately.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="text-lg font-bold mb-3">Additional Services</h3>
              <p className="text-sm text-muted-foreground">
                Piercings include jewelry and sterilization. Training and custom artwork are available at special rates. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
