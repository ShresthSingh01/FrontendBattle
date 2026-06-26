# Phase 06: Remaining Sections - Implementation Plan

## Overview
Implement the remaining content sections: `WhyUs.jsx`, `Integrations.jsx`, `Articles.jsx`, and `Faq.jsx`. Integrate them into `App.jsx` in the correct order.

## Step-by-Step Execution

1. **Why Us Section (`WhyUs.jsx`)**
   - Create a split-screen layout (`md:grid-cols-2`).
   - Implement the left dark pane with the `.dot-grid-bg` animated CSS texture.
   - Implement the right light pane (`#f0f0ee`) containing the 2-column feature list.
   - Create placeholder SVG icons for Prime Logic, Total Clarity, and Fast Cycles.

2. **Integrations Section (`Integrations.jsx`)**
   - Create a dark-themed section with the "INTEGRATIONS" eyebrow.
   - Map out a CSS Grid (`grid-cols-4`) for the 12 logos.
   - Build 12 simple placeholder/text-based SVGs styled to look like clean white vectors.
   - Implement the `hover:scale-110 duration-150` interactions.

3. **Articles Section (`Articles.jsx`)**
   - Create a light-themed section.
   - Use CSS Grid `grid-template-columns: 1fr 1fr` and `grid-template-rows: auto auto`.
   - Apply `.article-featured` and `.article-small` classes to the specific items.
   - Add image brightness filter and scale transitions on hover.

4. **FAQ Section (`Faq.jsx`)**
   - Create a light-themed section with a split layout (Heading left, FAQs right).
   - Use `useState(0)` to track the `openIndex`.
   - Map over the FAQ data. Implement the toggle button (`+`/`x`) rotation and `max-height` transition for the answer panel.

5. **CSS Updates**
   - Add the specific keyframes and layout CSS from `NUCLEAR_PROMPT_V2.md` to `index.css`.

6. **App Integration**
   - Add `<WhyUs />`, `<Integrations />`, `<Articles />`, and `<Faq />` sequentially into `App.jsx`.

## Validation
- Ensure dot grid animation runs continuously.
- Confirm Integrations logos scale precisely without borders.
- Confirm Articles grid displays the large left block spanning both vertical rows on desktop.
- Confirm FAQ accordion smoothly expands/collapses single items.
