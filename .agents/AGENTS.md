# Workspace Customizations & Agent Rules

This file defines the project-scoped guidelines and rules for Google Antigravity. Any agent operating in this workspace must adhere to these rules.

## Premium UI/UX & Design System Rules

### 1. Visual Aesthetics
- **Aesthetic Quality**: Every component, page, and interface must feel premium, polished, and state-of-the-art. Generic, basic, or plain styling is unacceptable.
- **Color Palettes**: Use modern, cohesive, and vibrant HSL/OKLCH color systems. Avoid basic `bg-blue-500`, `bg-red-500`. Prefer sleek dark modes with glowing borders, rich gradients, and tailwind colors like `slate-900`, `zinc-950`, combined with vibrant neon accent gradients (`emerald`, `violet`, `rose`, `cyan`).
- **Glassmorphism**: Use glass-like surfaces for cards, navbars, and overlays. Use properties like `bg-white/5` or `bg-black/40`, combined with `backdrop-blur-md` and light border highlights (`border-white/10`).
- **Typography**: Set strong hierarchical typography using elegant fonts (e.g., `Geist`, `Outfit`, `Inter`). Use appropriate weight contrast: thick bold headings (`font-bold`, `tracking-tight`) and clean, legible body text.

### 2. Framer Motion Animation Guidelines
- **Intention & Purpose**: Animations must be smooth, buttery, and purposeful. Never use overly jarring or sudden transitions.
- **Spring Physics**: Favor spring physics for transitions. Avoid default linear or simple ease-in-out animations for interactive elements.
  - Recommended Spring Config: `type: "spring", stiffness: 300, damping: 25` (smooth and responsive).
- **Dynamic Entry**: Animate lists and grids using stagger effects (`staggerChildren` in Framer Motion).
- **Interactive States**: Every interactive element (buttons, cards, links) must have micro-interactions:
  - Hover scale: `whileHover={{ scale: 1.02 }}` or `1.05`.
  - Tap scale: `whileTap={{ scale: 0.98 }}`.
  - Smooth hover transitions for borders, backgrounds, and shadows.
- **Scroll Animations**: Use Framer Motion's `viewport={{ once: true, margin: "-100px" }}` to trigger fade-in, slide-up animations as components enter the screen.

### 3. Responsive & Clean Layouts
- **Mobile First**: Implement layouts using responsive utility classes (`sm:`, `md:`, `lg:`, `xl:`). Check responsiveness for mobile, tablet, and wide desktop sizes.
- **Bento Grid**: Use bento grid styles for dash-boards and feature lists: combine unequal-sized grid boxes with sleek borders, shadows, and subtle gradient backgrounds.
- **Consistent Spacing**: Strictly use consistent margin and padding steps. Avoid random layout shifts.

### 4. Code Quality & Integration Standards
- **Tailwind CSS v4 compatibility**: Maintain styling utilizing the built-in Tailwind CSS v4 variables and custom extensions defined in CSS.
- **Shadcn UI**: Integrate Radix and shadcn components seamlessly. Style them using global design variables and enhance their animations with Framer Motion wrapper components.
- **SEO & Accessibility**:
  - Every page must have proper metadata (`title`, `description`).
  - Use semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).
  - Ensure interactive elements are keyboard navigable and have `aria-` labels where applicable.
  - Interactive elements must have unique, descriptive `id` attributes.
