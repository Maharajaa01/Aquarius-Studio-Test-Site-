import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Body Piercing Services | Aquarius Tattoo Studio',
  description: 'Safe, hygienic, and professional body piercing services in Bangalore. From ear and nose piercings to advanced body modifications with high-quality jewelry.',
  keywords: ['body piercing bangalore', 'professional piercers', 'ear piercing', 'nose piercing', 'safe piercings', 'piercing studio'],
  alternates: {
    canonical: '/services/piercings',
  },
  openGraph: {
    title: 'Professional Body Piercing Services | Aquarius Tattoo Studio',
    description: 'Expert and hygienic piercing services using premium jewelry in Bangalore.',
    url: 'https://aquarius-tattoo-studio.com/services/piercings',
  }
}

export default function PiercingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
