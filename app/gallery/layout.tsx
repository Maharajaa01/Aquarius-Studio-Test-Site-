import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tattoo Gallery & Portfolio | Aquarius Tattoo Studio Bangalore',
  description: 'Explore our extensive portfolio of custom tattoo designs. Browse through fine line, realism, geometric, Japanese irezumi, and black and grey masterpieces crafted by Bangalore\'s elite artists.',
  keywords: ['tattoo gallery', 'tattoo designs', 'tattoo portfolio', 'custom tattoos', 'tattoo art', 'bangalore tattoo gallery'],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Tattoo Gallery & Portfolio | Aquarius Tattoo Studio',
    description: 'Explore custom tattoo designs, realism sleeves, fine line, and geometric artwork from our Bangalore studio.',
    url: 'https://aquarius-tattoo-studio.com/gallery',
  }
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
