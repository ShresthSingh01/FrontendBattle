# NexaFlow AI — Frontend Battle Landing Page

## What This Is

A premium, high-converting, responsive SaaS landing page for "NexaFlow AI" — an AI-driven data automation platform. Built as a 4-hour hackathon competition entry (Frontend Battle Round 1, 26 June 2026). The page is a dark, editorial, text-heavy site with monochrome structure and brand accent colors, featuring a 3-column grid spine, hatched section eyebrows, and precise motion choreography matching a provided reference demo.

## Core Value

Win the competition by maximizing the 100-point scoring matrix: 40 pts Logic/State (pricing matrix engine with zero re-renders + bento-to-accordion context transfer), 30 pts SEO/Semantic HTML (proper meta tags, semantic elements, heading hierarchy), 30 pts UI/UX Motion (matching demo animations, brand token compliance, responsive breakpoints).

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Feature 1: Matrix-driven multi-currency pricing engine (INR/USD/EUR) with Monthly/Annual toggle, computed from `PRICING_MATRIX` data object, using refs + imperative DOM mutations for zero-re-render state isolation
- [ ] Feature 2: Bento grid (desktop) to accordion (mobile) responsive component with index context transfer on resize crossing 768px breakpoint
- [ ] Full SEO: title, meta description, canonical, 5 OG tags, 3 Twitter tags, semantic HTML throughout
- [ ] 14 page sections matching demo: Header, Hero, Neural Engine, Statistics, Product Demo, Case Studies, Product Features, Performance (bento), Why Us, Integrations, Articles, FAQ, Pricing, Newsletter+Footer
- [ ] Brand token compliance: JetBrains Mono (headers/labels) + Inter (body), 6-color palette (arctic, mint, forsythia, saffron, nocturnal, oceanic), demo-observed neutrals
- [ ] Animations: Hero entry <500ms WAAPI, scroll reveals via IntersectionObserver, stat counter count-up, CTA lightning spin, nav slide-down, accordion max-height transitions
- [ ] 3-column page spine structural divider visible across all sections
- [ ] Section eyebrow pattern (hatched SVG + monospace label) on every section
- [ ] Oversized footer wordmark "nexaflow" with -webkit-text-stroke outline
- [ ] Mobile responsiveness: zero horizontal overflow at 320px, clean breakpoints at 480/768/1024/1280px
- [ ] Accessible: aria-labels, aria-expanded, aria-controls, aria-live on price nodes

### Out of Scope

- Backend API / database integration — static landing page only
- Actual video playback — product demo is a static visual with play button
- Three.js 3D globe — nice-to-have if time permits, not required
- Deployment — user handles this separately
- Contact form submission — static form UI only

## Context

- **Competition:** Frontend Battle Round 1, online, 4-hour window (2:00 PM – 6:00 PM IST, 26 June 2026)
- **Reference:** `NUCLEAR_PROMPT_V2.md` contains exact section-by-section spec with CSS/JSX code snippets derived from a reference demo video
- **Assets provided:** SVG icon pack (to be used, no external resources), font list (JetBrains Mono + Inter), color palette (6 branded colors)
- **Demo video:** `reference_showcase.mp4` shows target layout, motion, and visual identity — dark editorial aesthetic, monochrome with forsythia/saffron accents
- **Scoring emphasis:** Chrome DevTools Performance tab used to verify zero re-renders on pricing toggle (15 pts). State isolation is the single highest-risk scoring area.

## Constraints

- **Tech Stack**: React + Vite + Tailwind CSS — mandatory per competition brief and nuclear prompt
- **Fonts**: JetBrains Mono + Inter via Google Fonts only — strict requirement
- **Banned Libraries**: Framer Motion, GSAP, Radix, Shadcn, HeadlessUI — instant DQ
- **Animation**: Native CSS Transitions + Web Animations API (WAAPI) only — no runtime CSS-in-JS animation engines
- **Performance**: Entry animations must complete <500ms total, must not delay TTI
- **Timeline**: ~4 hours total build time
- **No Hardcoded Prices**: All pricing values must derive from `PRICING_MATRIX` data object
- **No Global Re-renders**: Currency/billing toggle must use refs + imperative DOM mutations

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React + Vite + Tailwind CSS | Fastest setup for 4hr window, specified in prompt | — Pending |
| Imperative DOM mutation for pricing | Zero re-renders requirement (15 pts), refs over useState | — Pending |
| ResizeObserver for bento→accordion | Must detect 768px crossing and transfer hover index | — Pending |
| IntersectionObserver for scroll reveals | Performance-efficient, single shared observer pattern | — Pending |
| No Three.js initially | Time constraint — add only if time permits in final hour | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-26 after initialization*
