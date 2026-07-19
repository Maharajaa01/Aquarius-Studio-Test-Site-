'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type Status = 'idle' | 'active' | 'done'

// Lightweight top progress bar for route transitions. Next.js's App Router
// gives no built-in "navigation started" event, so we detect it by listening
// for clicks on same-origin links (every internal nav in this app goes
// through next/link, which renders as <a>) and clear it once the pathname
// actually changes.
export default function RouteLoadingIndicator() {
  const pathname = usePathname()
  const [status, setStatus] = useState<Status>('idle')
  const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (startTimer.current) clearTimeout(startTimer.current)
    setStatus((prev) => (prev === 'active' ? 'done' : prev))
    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setStatus('idle'), 400)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const anchor = (e.target as HTMLElement)?.closest('a')
      if (!anchor) return
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#')) return

      let url: URL
      try {
        url = new URL(anchor.href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return

      const current = window.location.pathname
      if (url.pathname === current) return

      // Small delay so instant client-side transitions never flash the bar.
      startTimer.current = setTimeout(() => setStatus('active'), 100)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (status === 'idle') return null

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-[100001] h-[3px] pointer-events-none">
      <div
        className="h-full bg-[var(--brand-gold)] shadow-[0_0_12px_rgba(197,168,92,0.7)]"
        style={{
          width: status === 'done' ? '100%' : '78%',
          opacity: status === 'done' ? 0 : 1,
          transitionProperty: 'width, opacity',
          transitionDuration: status === 'done' ? '350ms, 300ms' : '1200ms, 200ms',
          transitionDelay: status === 'done' ? '0ms, 150ms' : '0ms, 0ms',
          transitionTimingFunction: 'ease-out',
        }}
      />
    </div>
  )
}
