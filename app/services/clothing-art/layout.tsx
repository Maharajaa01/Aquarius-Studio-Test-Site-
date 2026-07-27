import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Clothing Art & Merch | Aquarius Tattoo Studio',
  description: 'Exclusive custom clothing art and studio merchandise. Hand-painted denim, leather jackets, and unique apparel designed by our tattoo artists.',
  keywords: ['custom clothing art', 'tattoo merchandise', 'painted jackets', 'custom denim art', 'tattoo apparel'],
  alternates: {
    canonical: '/services/clothing-art',
  },
  openGraph: {
    title: 'Custom Clothing Art | Aquarius Tattoo Studio',
    description: 'Unique, artist-designed custom clothing and merch from our tattoo studio.',
    url: 'https://aquarius-tattoo-studio.com/services/clothing-art',
  }
}

export default function ClothingArtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
