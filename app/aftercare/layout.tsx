import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tattoo & Piercing Aftercare Guide | Aquarius Tattoo Studio',
  description: 'Learn how to care for your new tattoo or body piercing with our expert aftercare guide. Step-by-step instructions, cleaning schedules, and recommended healing products for a perfect heal.',
  keywords: ['tattoo aftercare', 'piercing care', 'healing process tattoo', 'tattoo cleaning', 'piercing healing'],
  alternates: {
    canonical: '/aftercare',
  },
  openGraph: {
    title: 'Tattoo & Piercing Aftercare Guide | Aquarius Tattoo Studio',
    description: 'Expert tips, cleaning routines, and healing guides for your new tattoo or body piercing.',
    url: 'https://aquarius-tattoo-studio.com/aftercare',
  }
}

export default function AftercareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
