import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Temporary Tattoos & Henna | Aquarius Tattoo Studio',
  description: 'Try out beautiful temporary tattoos, jagua, and henna art. Perfect for events, parties, or testing out a design before getting inked permanently.',
  keywords: ['temporary tattoos bangalore', 'henna art', 'jagua tattoos', 'fake tattoos', 'event tattoo artist'],
  alternates: {
    canonical: '/services/temporary-tattoos',
  },
  openGraph: {
    title: 'Temporary Tattoos & Henna | Aquarius Tattoo Studio',
    description: 'High-quality temporary tattoos and henna designs in Bangalore.',
    url: 'https://aquarius-tattoo-studio.com/services/temporary-tattoos',
  }
}

export default function TemporaryTattoosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
