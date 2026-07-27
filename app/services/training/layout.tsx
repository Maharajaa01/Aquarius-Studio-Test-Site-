import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Tattoo Training Academy | Aquarius Tattoo Studio',
  description: 'Start your career as a tattoo artist with our comprehensive training academy in Bangalore. Learn from master artists with hands-on experience and certification.',
  keywords: ['tattoo training bangalore', 'learn tattooing', 'tattoo academy', 'tattoo courses', 'become a tattoo artist', 'tattoo certification'],
  alternates: {
    canonical: '/services/training',
  },
  openGraph: {
    title: 'Tattoo Training Academy | Aquarius Tattoo Studio',
    description: 'Professional tattoo courses and certification by master artists in Bangalore.',
    url: 'https://aquarius-tattoo-studio.com/services/training',
  }
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
