# Phase 05: Bento Grid + Accordion - Implementation Plan

## Overview
Implement the "Performance" section comprising a desktop Bento grid and a mobile Accordion layout with precise SVG data visualizations animated via CSS. A core requirement is the seamless context transfer of the active hovered card across the 768px layout boundary via a debounced resize handler.

## Step-by-Step Execution

1. **Create SVG Chart Components**
   - Create `src/components/ui/charts/CircularGauge.jsx` (System Load).
   - Create `src/components/ui/charts/BarChart.jsx` (SLA Response).
   - Create `src/components/ui/charts/RadialGauge.jsx` (Token Usage).
   - Create `src/components/ui/charts/LineChart.jsx` (Growth Vector).
   - Write accompanying CSS animations (`stroke-dasharray`, `transform`) in `index.css` targeting the `.is-visible` parent class.

2. **Create Accordion Component**
   - Build `Accordion.jsx` utilizing pure CSS `max-height` transitions instead of third-party animation libraries.
   - Map through `bentoCards` data. Include chevron rotation logic (`.open` class toggling 90deg).

3. **Create Performance Section (`Performance.jsx`)**
   - Set up the responsive grid (`hidden md:grid`) for the desktop view and the accordion (`block md:hidden`) for the mobile view.
   - Implement `onMouseEnter` tracking for desktop cards storing the index in `lastHoveredBentoRef`.
   - Implement a `ResizeObserver` (debounced via a `setTimeout` or `requestAnimationFrame`) to monitor breakpoint crossing (768px) and automatically invoke `setAccordionIndex(lastHoveredBentoRef.current)` when shifting from desktop to mobile.
   - Utilize `IntersectionObserver` to append `.is-visible` to cards when scrolled into view, triggering the SVG CSS animations.

4. **Integrate Component**
   - Add `<Performance />` to `src/App.jsx`.

## Dependencies
- CSS Custom animations.

## Validation
- Verify resize context transfer in DevTools responsive mode.
- Verify CSS SVG animations trigger properly.
