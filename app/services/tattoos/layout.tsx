import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Tattoo Services in Bangalore | Aquarius Tattoo Studio',
  description: 'Get world-class custom tattoos from award-winning artists in Bangalore. We specialize in realism, traditional, geometric, fine line, and cover-up tattoos in a hygienic environment.',
  keywords: ['custom tattoos bangalore', 'realism tattoos', 'geometric tattoos', 'fine line tattoo', 'tattoo cover ups', 'best tattoo services'],
  alternates: {
    canonical: '/services/tattoos',
  },
  openGraph: {
    title: 'Custom Tattoo Services | Aquarius Tattoo Studio',
    description: 'Transform your ideas into stunning body art with our expert tattoo artists.',
    url: 'https://aquarius-tattoo-studio.com/services/tattoos',
  }
}

export default function TattoosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
