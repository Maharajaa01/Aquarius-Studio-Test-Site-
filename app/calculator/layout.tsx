import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tattoo Price Calculator | Aquarius Tattoo Studio Bangalore',
  description: 'Calculate the cost of your custom tattoo or body piercing instantly. Enter your desired size in square inches, choose an artist, and view our transparent pricing and special launch offers.',
  keywords: ['tattoo price calculator', 'tattoo cost bangalore', 'piercing prices', 'tattoo estimation'],
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: 'Tattoo Price Calculator | Aquarius Tattoo Studio',
    description: 'Get an instant, transparent price estimate for your next custom tattoo or piercing in Bangalore.',
    url: 'https://aquarius-tattoo-studio.com/calculator',
  }
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
