import type { Variants } from 'framer-motion'

// ── Easing curves ──────────────────────────────────────────────────────────

export const ease = {
  cinematic: [0.16, 1, 0.3, 1] as [number, number, number, number],
  smooth:    [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  sharp:     [0.76, 0, 0.24, 1] as [number, number, number, number],
}

// ── Viewport threshold for whileInView ────────────────────────────────────

export const vp = { once: true, margin: '-8% 0px' as const }

// ── Variants ──────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: ease.cinematic } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: ease.smooth } },
}

// Horizontal clip-path wipe — feels like ink spreading on paper
export const inkReveal: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: { clipPath: 'inset(0 0% 0 0)',   opacity: 1, transition: { duration: 1.15, ease: ease.sharp } },
}

export const scaleReveal: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: ease.cinematic } },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.95, ease: ease.cinematic } },
}

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.95, ease: ease.cinematic } },
}

// ── Stagger container factory ─────────────────────────────────────────────

export function stagger(delay = 0.1, delayChildren = 0): Variants {
  return {
    hidden:  {},
    visible: { transition: { staggerChildren: delay, delayChildren } },
  }
}
