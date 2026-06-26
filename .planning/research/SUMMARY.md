# Research Summary — NexaFlow AI Landing Page

## Stack Recommendations

| Technology | Choice | Rationale |
|-----------|--------|-----------|
| **Framework** | React 19 + Vite 6 | Fastest dev server, HMR, optimal production builds |
| **Styling** | Tailwind CSS v4 (CSS-first `@theme`) | Utility-first with brand token extension |
| **Fonts** | JetBrains Mono + Inter (Google Fonts `<link>`) | Required by competition brief |
| **Animation** | CSS Transitions + WAAPI + IntersectionObserver | No GSAP/Framer Motion allowed (DQ risk) |
| **State Isolation** | `useRef` + imperative DOM mutation | Zero re-renders verified via Chrome DevTools |
| **Build** | `npx create-vite@latest` with React template | Standard setup, fast |

## Key Technical Patterns

### State Isolation (Feature 1 — 15 pts at risk)
- Use `useRef` for billing mode and currency — never `useState`
- Target `[data-price-display]` elements via `document.querySelector`
- Call `el.textContent = computePrice(...)` imperatively
- **Verify:** Chrome DevTools Performance tab → toggle currency → zero "Component render" markers
- Add `aria-live="polite"` and `aria-atomic="true"` on price nodes for accessibility

### Bento → Accordion Context Transfer (Feature 2 — 10 pts)
- Track `lastHoveredBentoRef` via `useRef` on mouseenter
- `ResizeObserver` on `document.documentElement` watches for 768px crossing
- On cross: `setAccordionIndex(lastHoveredBentoRef.current)` — one controlled state update
- Bento: CSS Grid 3-col on desktop (`display: none` on mobile)
- Accordion: `max-height` CSS transition (`display: block` on mobile, `display: none` on desktop)

### Animation Architecture
- **Hero:** WAAPI `el.animate()` with 70ms stagger — total orchestration <500ms
- **Scroll reveals:** Single shared `IntersectionObserver` with `threshold: 0.15`
- **Micro-interactions:** 150ms `ease-out` (hovers, toggles)
- **Structural:** 300ms `ease-in-out` (accordion, nav slide)
- Only animate `transform` and `opacity` (compositor-only properties)

### SEO Checklist
- `<title>`, `<meta description>`, canonical, 5 OG tags, 3 Twitter tags
- Semantic elements: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`
- Single `<h1>` in hero — h2 for sections, h3 for cards
- `aria-label`, `aria-expanded`, `aria-controls` on all interactive elements

## Pitfalls to Avoid

1. **Using `useState` for pricing** → instant -15 pts from DevTools check
2. **Importing banned libraries** even as dev dependencies → DQ
3. **Hardcoding price values in JSX** → grep test will catch this
4. **Forgetting `aria-live` on price nodes** → accessibility deduction
5. **Animation >500ms in hero** → performance deduction
6. **Multiple `<h1>` tags** → SEO deduction
7. **Missing section eyebrows** → UI/UX deduction per section
8. **Bento not transferring hover index on resize** → Feature 2 partial score

---
*Research completed: 2026-06-26*
