---
name: premium-ui
description: Provides advanced design recipes, component formulas, and code templates for building jaw-dropping, eye-catching, and highly animated websites with Framer Motion, Tailwind CSS, Lucide icons, and modern UI paradigms. Trigger this skill whenever designing, building, or refining pages, landing sections, components, animations, styles, or visual elements.
---

# Premium UI/UX Animation & Design Skill

Use the recipes and design guidelines in this skill file to create visually stunning, premium-grade web interfaces that exceed typical standards.

---

## 1. Core Visual Recipes

### A. Dark Mode & Ambient Glow Effects
Create background depth using ambient glows (radial gradients) behind glass cards:
```tsx
export function AmbientGlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-zinc-700/80">
      {/* Decorative Radial Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[60px]" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

### B. Animated Gradient Text
Make headings stand out with an animated gradient clip-text:
```tsx
export function GradientHeading({ text }: { text: string }) {
  return (
    <h1 className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent animate-gradient-shift">
      {text}
    </h1>
  );
}
```
*CSS helper:* Add animation details to your global CSS style sheet if needed:
```css
@keyframes gradient-shift {
  0% { bg-position: 0% 50%; }
  50% { bg-position: 100% 50%; }
  100% { bg-position: 0% 50%; }
}
```

### C. Bento Grid Structure
Create a visually dynamic grid showcasing features or options:
```tsx
export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
      <div className="md:col-span-2 md:row-span-2 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden group">
        {/* Large feature content */}
      </div>
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden group">
        {/* Small feature content */}
      </div>
      <div className="md:row-span-2 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden group">
        {/* Tall feature content */}
      </div>
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden group">
        {/* Small feature content */}
      </div>
    </div>
  );
}
```

---

## 2. Framer Motion Animation Templates

### A. Scroll-Triggered Fade-In & Slide-Up
Wrap components inside this layout wrapper to reveal elements smoothly as the user scrolls down:
```tsx
"use client";

import { motion } from "framer-motion";

export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}
```

### B. Smooth Interactive Buttons
Make buttons feel physical, tactile, and satisfying to press:
```tsx
"use client";

import { motion } from "framer-motion";

export function InteractiveButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:from-indigo-500 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
    >
      {label}
    </motion.button>
  );
}
```

### C. Staggered Container for Lists or Grids
Animate list items sequentially rather than all at once:
```tsx
"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

export function StaggeredList({ items }: { items: { id: string; content: React.ReactNode }[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants} className="h-full">
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

## 3. Micro-Interaction Checklist

For every interface modification, verify that these details are implemented:
1. **Nav links**: Border-bottom slide underline or scale shift upon hover.
2. **Cards**: Subtle tilt (`whileHover={{ rotateX: 2, rotateY: 2 }}` or scale (`1.02`)) combined with a glowing outer shadow or border color transition.
3. **Icons**: Animate icon rotations or shifts inside hovered parent containers (e.g., hover arrow moves right: `group-hover:translate-x-1 transition-transform`).
4. **Modals / Dropdowns**: Always wrap inside Framer Motion's `<AnimatePresence>` to enable smooth fade-in and scale-up entrance and matching exit animations.
5. **Loading States**: Use glowing skeleton frames with moving gradient overlays instead of plain spinners.
