# Requirements: NexaFlow AI Landing Page

**Defined:** 2026-06-26
**Core Value:** Win the 100-point Frontend Battle by maximizing Logic/State (40), SEO/Semantic HTML (30), and UI/UX Motion (30) scores

## v1 Requirements

### Project Setup

- [ ] **SETUP-01**: React + Vite project initialized with Tailwind CSS configured
- [ ] **SETUP-02**: Brand tokens defined as CSS custom properties and Tailwind config extensions
- [ ] **SETUP-03**: Google Fonts (JetBrains Mono + Inter) loaded in `<head>` with preconnect
- [ ] **SETUP-04**: File structure matches spec (components/sections, data, hooks, ui directories)

### SEO & Metadata

- [ ] **SEO-01**: Page has descriptive `<title>` tag ("NexaFlow AI — Automate Everything. Scale Instantly.")
- [ ] **SEO-02**: `<meta name="description">` with compelling copy present
- [ ] **SEO-03**: Canonical URL and robots meta tags present
- [ ] **SEO-04**: 5 Open Graph tags (og:title, og:description, og:type, og:image, og:url) present
- [ ] **SEO-05**: 3 Twitter card tags (twitter:card, twitter:title, twitter:description) present
- [ ] **SEO-06**: Single `<h1>` on page (hero heading), proper h1→h2→h3 hierarchy
- [ ] **SEO-07**: Semantic HTML: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>` used correctly

### Feature 1: Pricing Matrix Engine

- [ ] **PRICE-01**: `PRICING_MATRIX` data object is single source of truth for all pricing values
- [ ] **PRICE-02**: `computePrice()` pure function computes values dynamically from matrix (base × rate × multiplier)
- [ ] **PRICE-03**: Three-currency switcher (USD/INR/EUR) using native `<select>`
- [ ] **PRICE-04**: Monthly/Annual billing toggle with 20% annual discount
- [ ] **PRICE-05**: State isolation: billing/currency changes use `useRef` + imperative DOM mutation (zero re-renders)
- [ ] **PRICE-06**: `[data-price-display]` text nodes are the ONLY DOM elements that change on toggle
- [ ] **PRICE-07**: Price nodes have `aria-live="polite"` and `aria-atomic="true"`
- [ ] **PRICE-08**: Three pricing tiers (Starter $29, Pro $79, Enterprise $299) with feature lists
- [ ] **PRICE-09**: "Most Popular" badge on Pro tier with forsythia accent border

### Feature 2: Bento Grid + Accordion

- [ ] **BENTO-01**: Desktop (≥768px): 3-column bento grid with 4 data-viz cards (System Load, SLA Response, Token Usage, Growth Vector)
- [ ] **BENTO-02**: Mobile (<768px): Accordion layout with max-height CSS transition
- [ ] **BENTO-03**: Context transfer: hovering bento card N + resize below 768px → accordion panel N opens
- [ ] **BENTO-04**: `ResizeObserver` on `document.documentElement` detects 768px crossing
- [ ] **BENTO-05**: Hover tracking uses `useRef` (not `useState`) to avoid re-renders
- [ ] **BENTO-06**: Accordion triggers have `aria-expanded` and `aria-controls` attributes
- [ ] **BENTO-07**: Animated SVG charts inside cards (gauge, bar chart, radial, line chart) — pure CSS/SVG

### Layout & Structure

- [ ] **LAYOUT-01**: 3-column page spine (fixed structural divider at 25%/75%) visible across all sections
- [ ] **LAYOUT-02**: Section eyebrow pattern (hatched SVG + monospace label) on every section
- [ ] **LAYOUT-03**: Header with logo + hamburger menu (no inline nav links on desktop)
- [ ] **LAYOUT-04**: Navigation slides down from top on hamburger click (300ms ease-in-out)

### Page Sections

- [ ] **SECT-01**: Hero — full viewport dark bg, large heading "Power your future with AI", CTA with spinning lightning
- [ ] **SECT-02**: Neural Engine — text reveal animation (gray→white on scroll), AI model icon badges
- [ ] **SECT-03**: Statistics — 3 stat cards (12ms, 10x, 98%) with corner brackets, counter animation on scroll
- [ ] **SECT-04**: Product Demo — full-bleed dark section with play button (4-corner bracket decoration)
- [ ] **SECT-05**: Case Studies — light bg, table layout with 3 rows, hover arrow slide
- [ ] **SECT-06**: Product Features — dark bg, workflow canvas mockup, 4-column feature grid
- [ ] **SECT-07**: Performance — bento grid section (Feature 2 implementation)
- [ ] **SECT-08**: Why Us — split screen (dark left with dot grid, light right with features)
- [ ] **SECT-09**: Integrations — dark bg, 4x3 logo grid with hover scale
- [ ] **SECT-10**: Articles — light bg, asymmetric article grid (featured + 2 small)
- [ ] **SECT-11**: FAQ — light bg, accordion with +/× toggle (distinct from Feature 2)
- [ ] **SECT-12**: Pricing — Feature 1 implementation on light bg
- [ ] **SECT-13**: Newsletter — dark bg, email input + subscribe CTA
- [ ] **SECT-14**: Footer — logo, link columns, social icons, oversized "nexaflow" wordmark

### Animations & Motion

- [ ] **ANIM-01**: Hero entry animation completes within 500ms using WAAPI with 70ms stagger
- [ ] **ANIM-02**: Scroll reveal system via single shared IntersectionObserver (data-reveal attribute)
- [ ] **ANIM-03**: Stat counter count-up animation on scroll (requestAnimationFrame, ease-out cubic)
- [ ] **ANIM-04**: CTA button lightning icon spins 360° on hover (300ms ease-out)
- [ ] **ANIM-05**: Micro-interactions at 150ms ease-out (hovers, toggles)
- [ ] **ANIM-06**: Structural transitions at 300ms ease-in-out (accordion, nav)
- [ ] **ANIM-07**: Bento gauge/chart SVG animations trigger on scroll

### Responsiveness

- [ ] **RESP-01**: Mobile-first breakpoints: 480px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] **RESP-02**: Zero horizontal overflow at 320px viewport width
- [ ] **RESP-03**: Feature grid collapses: 4-col → 2-col → 1-col
- [ ] **RESP-04**: Pricing cards stack vertically on mobile

### Accessibility

- [ ] **A11Y-01**: All interactive elements have `aria-label` attributes
- [ ] **A11Y-02**: Accordion/FAQ triggers have `aria-expanded` and `aria-controls`
- [ ] **A11Y-03**: Navigation has `role="navigation"` and `aria-label`
- [ ] **A11Y-04**: Hamburger button has `aria-label` and `aria-expanded`

## v2 Requirements

### Enhancement

- **ENH-01**: Three.js 3D wireframe globe in product features section
- **ENH-02**: Dark mode toggle (site is already dark-first)
- **ENH-03**: Smooth scroll navigation linking

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend API integration | Static landing page only — competition constraint |
| Actual video playback | Brief says "static visual with play button" |
| Contact form submission | No backend — UI only |
| User authentication | Not applicable to landing page |
| Deployment | User handles this separately |
| Three.js 3D globe | Nice-to-have only if time permits — not in scoring matrix |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SETUP-01 | Phase 1 | Pending |
| SETUP-02 | Phase 1 | Pending |
| SETUP-03 | Phase 1 | Pending |
| SETUP-04 | Phase 1 | Pending |
| SEO-01 | Phase 1 | Pending |
| SEO-02 | Phase 1 | Pending |
| SEO-03 | Phase 1 | Pending |
| SEO-04 | Phase 1 | Pending |
| SEO-05 | Phase 1 | Pending |
| SEO-06 | Phase 1 | Pending |
| SEO-07 | Phase 1 | Pending |
| LAYOUT-01 | Phase 2 | Pending |
| LAYOUT-02 | Phase 2 | Pending |
| LAYOUT-03 | Phase 2 | Pending |
| LAYOUT-04 | Phase 2 | Pending |
| SECT-01 | Phase 2 | Pending |
| SECT-02 | Phase 3 | Pending |
| SECT-03 | Phase 3 | Pending |
| SECT-04 | Phase 3 | Pending |
| SECT-05 | Phase 3 | Pending |
| SECT-06 | Phase 3 | Pending |
| PRICE-01 | Phase 4 | Pending |
| PRICE-02 | Phase 4 | Pending |
| PRICE-03 | Phase 4 | Pending |
| PRICE-04 | Phase 4 | Pending |
| PRICE-05 | Phase 4 | Pending |
| PRICE-06 | Phase 4 | Pending |
| PRICE-07 | Phase 4 | Pending |
| PRICE-08 | Phase 4 | Pending |
| PRICE-09 | Phase 4 | Pending |
| BENTO-01 | Phase 5 | Pending |
| BENTO-02 | Phase 5 | Pending |
| BENTO-03 | Phase 5 | Pending |
| BENTO-04 | Phase 5 | Pending |
| BENTO-05 | Phase 5 | Pending |
| BENTO-06 | Phase 5 | Pending |
| BENTO-07 | Phase 5 | Pending |
| SECT-07 | Phase 5 | Pending |
| SECT-08 | Phase 6 | Pending |
| SECT-09 | Phase 6 | Pending |
| SECT-10 | Phase 6 | Pending |
| SECT-11 | Phase 6 | Pending |
| SECT-12 | Phase 4 | Pending |
| SECT-13 | Phase 7 | Pending |
| SECT-14 | Phase 7 | Pending |
| ANIM-01 | Phase 2 | Pending |
| ANIM-02 | Phase 3 | Pending |
| ANIM-03 | Phase 3 | Pending |
| ANIM-04 | Phase 2 | Pending |
| ANIM-05 | Phase 2 | Pending |
| ANIM-06 | Phase 2 | Pending |
| ANIM-07 | Phase 5 | Pending |
| RESP-01 | Phase 7 | Pending |
| RESP-02 | Phase 7 | Pending |
| RESP-03 | Phase 7 | Pending |
| RESP-04 | Phase 7 | Pending |
| A11Y-01 | Phase 2 | Pending |
| A11Y-02 | Phase 5 | Pending |
| A11Y-03 | Phase 2 | Pending |
| A11Y-04 | Phase 2 | Pending |

**Coverage:**
- v1 requirements: 56 total
- Mapped to phases: 56
- Unmapped: 0 ✓

---
*Requirements defined: 2026-06-26*
*Last updated: 2026-06-26 after initial definition*
