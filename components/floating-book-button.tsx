'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function FloatingBookButton() {
  return (
    <Link
      href="#contact"
      className="fixed bottom-8 right-8 p-4 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200 hover:scale-110 z-40 group"
      aria-label="Book Now"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </Link>
  )
}
