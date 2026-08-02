import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import RouteLoadingIndicator from '@/components/route-loading-indicator'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono', display: 'swap' });
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aquarius-tattoo-studio.com'),
  title: {
    default: 'Aquarius Tattoo Studio | Premium Tattoo & Piercing in Bangalore',
    template: '%s | Aquarius Tattoo Studio',
  },
  description: 'Ink Your Story with Precision. Professional tattoo and piercing services in Jayanagar, Bangalore. 3000+ satisfied clients, certified artists, safe & hygienic studio.',
  keywords: ['tattoo studio bangalore', 'piercing services', 'professional tattoo artists', 'jayanagar tattoo', 'body piercing bangalore', 'custom tattoos', 'certified tattooists', 'hygienic tattoo studio'],
  authors: [{ name: 'Aquarius Tattoo Studio', url: 'https://aquarius-tattoo-studio.com' }],
  creator: 'Aquarius Tattoo Studio',
  publisher: 'Aquarius Tattoo Studio',
  alternates: {
    canonical: '/',
  },
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
        url: '/og-image.jpg', // Ensure you have this in public folder
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
    site: '@aquariustattoo',
  },
  icons: {
    icon: '/app_logo/tattoo_studio_logo.jpeg',
    apple: '/app_logo/tattoo_studio_logo.jpeg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Aquarius Tattoo Studio",
  "image": "https://aquarius-tattoo-studio.com/app_logo/tattoo_studio_logo.jpeg",
  "@id": "https://aquarius-tattoo-studio.com",
  "url": "https://aquarius-tattoo-studio.com",
  "telephone": "+919876543210", // Example phone, you may want to update this
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jayanagar",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560011",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9298,
    "longitude": 77.5824
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "21:00"
  },
  "priceRange": "$$"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${cinzel.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <RouteLoadingIndicator />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
