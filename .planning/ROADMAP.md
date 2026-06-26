# Roadmap: NexaFlow AI Landing Page

**Created:** 2026-06-26
**Phases:** 7
**Requirements:** 56 mapped
**Granularity:** Standard

## Phase Overview

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Project Scaffold & SEO | Vite+React+Tailwind setup, meta tags, brand tokens | SETUP-01–04, SEO-01–07 | 11 |
| 2 | Header, Hero & Core Layout | Page spine, header/nav, hero section with animations | LAYOUT-01–04, SECT-01, ANIM-01,04,05,06, A11Y-01,03,04 | 12 |
| 3 | Dark Sections (Neural → Case Studies) | Neural engine, statistics, product demo, case studies, product features | SECT-02–06, ANIM-02,03 | Completed |
| 4 | Pricing Matrix Engine (Feature 1) | Multi-currency pricing with state isolation | PRICE-01–09, SECT-12 | Completed |
| 5 | Bento Grid + Accordion (Feature 2) | Bento/accordion with context transfer + SVG charts | BENTO-01–07, SECT-07, ANIM-07, A11Y-02 | Completed |
| 6 | Remaining Light/Dark Sections | Why Us, Integrations, Articles, FAQ | SECT-08–11 | Completed |
| 7 | Footer, Newsletter & Responsiveness | Footer wordmark, newsletter, mobile polish | SECT-13–14, RESP-01–04 | Completed |

---

## Milestone v1.1: SVG Polish

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 8 | SVG Integration | Replace placeholders with SVGs from SVGs/ folder | SVG-01 | Completed |
| 9 | Color Palette Integration | Global aesthetic overhaul using Oceanic Noir and Arctic Powder | COLOR-01 | Completed |
| 10 | Three.js Hero Animation | Implement smooth WebGL neural particle animation | ANIM-01 | Completed |
| 11 | Global Animations & Effects | Add CSS reveal hooks and hover transitions | ANIM-02 | Completed |
| 12 | Global 3D Interactivity | Implement scroll/mouse parallax on global Three.js neural net | ANIM-03 | Completed |
| 13 | Top-Level 3D Components | Embed TorusKnot demo core and Neural Feature platonic nodes | ANIM-04 | Completed |
| 14 | Premium Motion Polish | Add film grain, SVG strokes, staggered entrances, soft zoom, and bokeh pulse | ANIM-05 | Completed |

---

## Phase 1: Project Scaffold & SEO

**Goal:** Initialize the project with React + Vite + Tailwind CSS, configure brand tokens, load fonts, set up complete SEO metadata.

**UI hint**: no

**Requirements:** SETUP-01, SETUP-02, SETUP-03, SETUP-04, SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07

**Success Criteria:**
1. `npm run dev` serves a working React app
2. Tailwind CSS configured with brand color extensions and font families
3. JetBrains Mono + Inter loaded via Google Fonts `<link>` tags
4. `index.html` contains complete `<title>`, `<meta>`, OG, and Twitter tags
5. File structure matches spec (components/sections/, data/, hooks/, ui/ directories)

**Depends on:** Nothing

---

## Phase 2: Header, Hero & Core Layout

**Goal:** Build the 3-column page spine, header with hamburger nav, hero section with WAAPI entry animation and CTA.

**UI hint**: yes

**Requirements:** LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04, SECT-01, ANIM-01, ANIM-04, ANIM-05, ANIM-06, A11Y-01, A11Y-03, A11Y-04

**Success Criteria:**
1. Fixed 3-column spine dividers visible at 25%/75% viewport width
2. Hamburger menu opens nav overlay (slides down, 300ms ease-in-out)
3. Hero displays "Power your future with AI" with staggered WAAPI entry (<500ms total)
4. CTA button lightning icon spins 360° on hover
5. All interactive elements have aria-labels
6. SectionEyebrow component created and reusable

**Depends on:** Phase 1

---

## Phase 3: Dark Sections (Neural Engine → Case Studies → Product Features)

**Goal:** Build the mid-page dark sections with scroll-triggered animations.

**UI hint**: yes

**Requirements:** SECT-02, SECT-03, SECT-04, SECT-05, SECT-06, ANIM-02, ANIM-03

**Success Criteria:**
1. Neural Engine text reveal (gray→white) triggers on scroll via IntersectionObserver
2. Statistics section: 3 stats with corner brackets, counter animation counts up on scroll
3. Product Demo: play button with 4-corner bracket decoration
4. Case Studies: light bg table rows with hover arrow slide (6px)
5. Product Features: 4-column feature grid with isometric SVG icons
6. Shared IntersectionObserver scroll reveal system (`data-reveal`) working across all sections

**Depends on:** Phase 2

---

## Phase 4: Pricing Matrix Engine (Feature 1)

**Goal:** Implement the matrix-driven pricing engine with zero-re-render state isolation — the highest-risk scoring area.

**UI hint**: yes

**Requirements:** PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, PRICE-06, PRICE-07, PRICE-08, PRICE-09, SECT-12

**Success Criteria:**
1. `PRICING_MATRIX` is the only place prices are defined — no hardcoded values in JSX
2. `computePrice(tierKey, currencyKey, isAnnual)` returns correctly formatted prices
3. Currency dropdown changes price display without any React re-renders
4. Billing toggle changes price display without any React re-renders
5. Chrome DevTools Performance tab shows zero component mounts on toggle
6. `data-price-display` text nodes are the ONLY DOM changes
7. `aria-live="polite"` on price nodes for screen readers
8. Three pricing cards with "Most Popular" badge on Pro tier

**Depends on:** Phase 1

---

## Phase 5: Bento Grid + Accordion (Feature 2)

**Goal:** Implement the bento-to-accordion wrapper with state persistence and animated SVG data-viz charts.

**UI hint**: yes

**Requirements:** BENTO-01, BENTO-02, BENTO-03, BENTO-04, BENTO-05, BENTO-06, BENTO-07, SECT-07, ANIM-07, A11Y-02

**Success Criteria:**
1. Desktop: 3-column bento grid with 4 cards (System Load, SLA Response, Token Usage, Growth Vector)
2. Mobile: Accordion with max-height CSS transition
3. Hover bento card 2 → resize to 400px → accordion panel 2 opens automatically
4. Hover tracking uses `useRef` — no re-renders on hover
5. SVG gauge/bar/radial/line charts animate on scroll entry
6. Accordion triggers have `aria-expanded` and `aria-controls`
7. `ResizeObserver` correctly detects 768px breakpoint crossing

**Depends on:** Phase 2

---

## Phase 6: Remaining Sections (Why Us, Integrations, Articles, FAQ)

**Goal:** Build the remaining mid-to-lower page sections.

**UI hint**: yes

**Requirements:** SECT-08, SECT-09, SECT-10, SECT-11

**Success Criteria:**
1. Why Us: split screen with animated dot grid (CSS) on dark side, feature list on light side
2. Integrations: 4x3 logo grid with hover scale (1.1, 150ms ease-out)
3. Articles: asymmetric grid (featured left, 2 stacked right), hover image zoom
4. FAQ: accordion with +/× toggle, icon per question, distinct from Feature 2 accordion

**Depends on:** Phase 2

---

## Phase 7: Footer, Newsletter & Responsiveness Polish

**Goal:** Build footer with oversized wordmark, newsletter CTA, and complete mobile responsiveness pass.

**UI hint**: yes

**Requirements:** SECT-13, SECT-14, RESP-01, RESP-02, RESP-03, RESP-04

**Success Criteria:**
1. Newsletter: email input + subscribe button in bordered box
2. Footer: logo, 3 link columns, social icons row
3. Oversized "nexaflow" wordmark with `-webkit-text-stroke` outline
4. Zero horizontal overflow at 320px viewport
5. Feature grid: 4-col → 2-col → 1-col across breakpoints
6. Pricing cards stack vertically on mobile

**Depends on:** Phase 3, Phase 4, Phase 5, Phase 6

---

## Build Order (recommended 4-hour schedule)

| Time | Phase | Duration |
|------|-------|----------|
| 0:00 – 0:30 | Phase 1: Scaffold + SEO | 30 min |
| 0:30 – 1:15 | Phase 2: Header, Hero, Layout | Completed |
| 1:15 – 2:15 | Phase 4: Pricing (Feature 1) | Completed |
| 2:15 – 3:00 | Phase 5: Bento/Accordion (Feature 2) | Completed |
| 3:00 – 3:30 | Phase 3: Dark Sections | Completed |
| 3:30 – 3:45 | Phase 6: Remaining Sections | Completed |
| 3:45 – 4:00 | Phase 7: Footer + Responsiveness | Completed |

> **Strategy:** Prioritize Feature 1 (15 pts) and Feature 2 (10 pts) before cosmetic sections, as they carry the most scoring weight and technical risk.
