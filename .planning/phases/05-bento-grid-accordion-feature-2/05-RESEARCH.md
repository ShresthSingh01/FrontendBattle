# Phase 05: Bento Grid + Accordion - Research

## Goal
Implement the Bento Grid section (Feature 2) which dynamically shifts between a desktop grid and a mobile accordion, preserving the user's focus (context transfer) when resizing across the `768px` breakpoint.

## Discovered Specs (from NUCLEAR_PROMPT_V2.md)
1. **Desktop Layout**: 3-column Bento grid (`hidden md:grid`). Cards 1-3 fill the top row. Card 4 ("Growth Vector") spans the full width (`col-span-3`).
2. **Mobile Layout**: Accordion list (`md:hidden`). Pure CSS max-height transitions for expanding panels.
3. **Data**: 4 specific cards with SVG chart components (Circular gauge, Bar chart, Half radial gauge, Line chart).
4. **SVG Animation**: Pure CSS using `.is-visible` added to cards. `stroke-dashoffset` for gauges, `transform: scaleY()` for bars.
5. **Context Transfer**: Use `ResizeObserver` to track the `window.innerWidth >= 768` crossing. Track hover state via `lastHoveredBentoRef` on desktop. If crossing to mobile, apply `lastHoveredBentoRef.current` to `setAccordionIndex()`.

## Architecture mapping
- **Components**: 
  - `src/components/sections/Performance.jsx` (The main section)
  - `src/components/ui/BentoCard.jsx` (Desktop card representation)
  - `src/components/ui/Accordion.jsx` (Mobile representation)
  - `src/components/ui/charts/*` (4 custom SVG charts)
- **Updates**: `src/App.jsx` to include `<Performance />` (before `Pricing`, or wherever). Actually, the prompt says `<section id="performance">`. Let's place it after `ProductFeatures` and before `Pricing`, or after `Pricing`. We'll place it directly after `Pricing`.

## Next Steps
Create the detailed implementation plan.
