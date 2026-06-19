'use client'

import { useEffect, useRef } from 'react'

interface InkParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  maxSize: number
  alpha: number
  life: number
  maxLife: number
  color: string
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<InkParticle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const cursor = cursorRef.current
    if (!canvas || !cursor) return
    
    document.documentElement.classList.add('custom-cursor')
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set up canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas, { passive: true })

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current
      mouse.x = e.clientX
      mouse.y = e.clientY

      // Move the custom cursor container directly (avoiding state trigger)
      cursor.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`
      if (cursor.style.opacity !== '1') {
        cursor.style.opacity = '1'
      }

      // Calculate speed for particle velocity
      const dx = mouse.x - mouse.lastX
      const dy = mouse.y - mouse.lastY
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Only spawn particles if mouse is moving
      if (speed > 1 && particlesRef.current.length < 150) {
        // Spawn 1-2 particles per mousemove step
        const count = speed > 10 ? 2 : 1
        for (let i = 0; i < count; i++) {
          const colorRand = Math.random()
          let color = '#D4AF37' // gold
          if (colorRand > 0.7) {
            color = '#8B0000' // deep red accent
          } else if (colorRand > 0.4) {
            color = '#0c0c0c' // dark ink
          }

          particlesRef.current.push({
            x: mouse.x,
            y: mouse.y,
            // Drift in opposite direction of mouse movement slightly + random dispersion
            vx: -dx * 0.1 + (Math.random() - 0.5) * 1.2,
            vy: -dy * 0.1 + (Math.random() - 0.5) * 1.2,
            size: 1.5 + Math.random() * 2.5,
            maxSize: 3 + Math.random() * 2.5,
            alpha: 0.8,
            life: 0,
            maxLife: 45 + Math.round(Math.random() * 25), // ~1 second at 60fps
            color
          })
        }
      }

      mouse.lastX = mouse.x
      mouse.lastY = mouse.y
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = '0'
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Setup micro interactions for hovering elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, .cursor-hover-trigger')
      if (isHoverable) {
        cursor.classList.add('cursor-hovering')
      } else {
        cursor.classList.remove('cursor-hovering')
      }
    }
    document.addEventListener('mouseover', handleMouseOver)

    // Animation Loop
    let animationFrameId: number
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        
        // Apply movement & drag/gravity
        p.x += p.vx
        p.y += p.vy + 0.04 // slight gravity fall
        p.vx *= 0.95 // air resistance
        p.vy *= 0.95

        p.life++
        
        const progress = p.life / p.maxLife
        p.alpha = 1 - progress
        p.size = p.maxSize * (1 - progress * 0.8)

        // Remove dead particles
        if (p.life >= p.maxLife || p.size <= 0.1 || p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        // Draw ink splatter droplet
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      }
      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  return (
    <>
      {/* Fullscreen particle canvas overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[99999] mix-blend-screen custom-cursor-canvas"
      />

      {/* Custom Tattoo Needle Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100000] custom-cursor-container transition-opacity duration-300"
        style={{
          width: 0,
          height: 0,
          opacity: 0,
          willChange: 'transform',
        }}
      >
        <div className="absolute -left-1.5 -top-1.5 pointer-events-none transition-transform duration-300 ease-out flex items-center justify-center cursor-needle-graphic">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: 'rotate(-45deg)',
              transformOrigin: '2px 2px',
            }}
          >
            {/* Fine metallic needle shaft */}
            <line x1="2" y1="2" x2="30" y2="30" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
            
            {/* Sleek metallic gray cartridge body */}
            <path
              d="M10 10L24 24M11 9L25 23"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Needle tip/nozzle pointing down-left at (2, 2) */}
            <path
              d="M2 2L8 5L5 8L2 2Z"
              fill="#9A9A9A"
              stroke="#FFFFFF"
              strokeWidth="0.5"
            />

            {/* Glowing gold collar/grip on the needle pen */}
            <circle cx="16" cy="16" r="3.5" fill="#D4AF37" stroke="#121212" strokeWidth="1.5" />
            
            {/* Active deep red glow dot */}
            <circle cx="4.5" cy="4.5" r="1.5" fill="#8B0000" />
          </svg>
        </div>
      </div>

      <style jsx global>{`
        .custom-cursor,
        .custom-cursor * {
          cursor: none !important;
        }
        
        /* Interactive scaling on hover triggers */
        .cursor-hovering .cursor-needle-graphic {
          transform: scale(1.3) rotate(-15deg);
        }

        /* Hide custom cursor on touchscreen devices */
        @media (pointer: coarse) {
          .custom-cursor-container,
          .custom-cursor-canvas {
            display: none !important;
          }
          .custom-cursor,
          .custom-cursor * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  )
}
