'use client'
import { useRef, useState, useCallback } from 'react'
import type { MouseEvent } from 'react'

export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setOffset({
        x: (e.clientX - (rect.left + rect.width / 2)) * strength,
        y: (e.clientY - (rect.top + rect.height / 2)) * strength,
      })
    },
    [strength],
  )

  const onMouseLeave = useCallback(() => setOffset({ x: 0, y: 0 }), [])

  return { ref, offset, onMouseMove, onMouseLeave }
}
