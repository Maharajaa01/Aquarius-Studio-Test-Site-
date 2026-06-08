'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  driftAmp: number
  phase: number
  maxOpacity: number
  isRed: boolean
}

// Deterministic seeded random — avoids SSR/client hydration mismatch on init
function seeded(seed: number, offset: number): number {
  const x = Math.sin(seed * 1.618 + offset) * 43758.5453
  return x - Math.floor(x)
}

function createParticles(n: number): Particle[] {
  return Array.from({ length: n }, (_, i) => ({
    x: seeded(i, 0),
    y: seeded(i, 1),
    size: 0.7 + seeded(i, 2) * 2.2,
    speedY: 0.00010 + seeded(i, 3) * 0.00020,
    driftAmp: 0.00004 + seeded(i, 4) * 0.00008,
    phase: seeded(i, 5) * Math.PI * 2,
    maxOpacity: 0.04 + seeded(i, 6) * 0.09,
    isRed: seeded(i, 7) > 0.76,
  }))
}

export default function AmbientParticles({ count = 20 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const ps = createParticles(count)
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.00075

      for (const p of ps) {
        p.y -= p.speedY
        p.x += Math.sin(t + p.phase) * p.driftAmp

        // Vertical progress: 0 at bottom, 1 at top
        const pos = 1 - p.y
        const a =
          pos < 0.12 ? (pos / 0.12) * p.maxOpacity
          : pos > 0.88 ? ((1 - pos) / 0.12) * p.maxOpacity
          : p.maxOpacity

        if (p.y < -0.04) {
          p.y = 1.04 + Math.random() * 0.12
          p.x = Math.random()
        }

        ctx.beginPath()
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.isRed
          ? `rgba(196,30,58,${a})`
          : `rgba(255,255,255,${a})`
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
