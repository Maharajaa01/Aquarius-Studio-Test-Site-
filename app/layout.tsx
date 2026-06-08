import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aquarius-tattoo-studio.com'),
  title: 'Aquarius Tattoo Studio | Premium Tattoo & Piercing in Bangalore',
  description: 'Ink Your Story with Precision. Professional tattoo and piercing services in Jayanagar, Bangalore. 3000+ satisfied clients, certified artists, safe & hygienic studio.',
  keywords: 'tattoo studio bangalore, piercing services, professional tattoo artists, jayanagar tattoo, body piercing bangalore, custom tattoos, certified tattooists, hygienic tattoo studio',
  authors: [{ name: 'Aquarius Tattoo Studio' }],
  creator: 'Aquarius Tattoo Studio',
  publisher: 'Aquarius Tattoo Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Aquarius Tattoo Studio | Premium Tattoo & Piercing in Bangalore',
    description: 'Ink Your Story with Precision. Professional tattoo and piercing services in Jayanagar, Bangalore. 3000+ satisfied clients, certified artists, safe & hygienic studio.',
    url: 'https://aquarius-tattoo-studio.com',
    siteName: 'Aquarius Tattoo Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aquarius Tattoo Studio - Professional Tattoo and Piercing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquarius Tattoo Studio | Premium Tattoo & Piercing in Bangalore',
    description: 'Ink Your Story with Precision. Professional tattoo and piercing services in Jayanagar, Bangalore.',
    images: ['/twitter-image.jpg'],
    creator: '@aquariustattoo',
  },
  icons: {
    icon: '/tattoo_studio_logo.jpeg',
    apple: '/tattoo_studio_logo.jpeg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${cormorant.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
