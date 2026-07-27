import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Tattoo Appointment | Aquarius Tattoo Studio Bangalore',
  description: 'Book your tattoo or piercing consultation with Aquarius Tattoo Studio today. Fast, easy, and secure online booking with Bangalore\'s top artists.',
  keywords: ['book tattoo appointment', 'tattoo consultation bangalore', 'piercing booking', 'tattoo scheduling'],
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Book an Appointment | Aquarius Tattoo Studio',
    description: 'Schedule your tattoo or piercing session online with our top-rated artists.',
    url: 'https://aquarius-tattoo-studio.com/book',
  }
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
