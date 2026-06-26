# Phase 04: Pricing Matrix Engine - Research

## Goal
Implement the matrix-driven pricing engine (`Pricing.jsx`) matching the constraints:
- Zero re-renders for price/currency/billing toggles
- Use `PRICING_MATRIX.js` as the single source of truth
- Accessibility attributes (`aria-live`, `aria-atomic`) on price text nodes
- 3 pricing cards, Light background

## Discovered Specs (from NUCLEAR_PROMPT_V2.md)
1. **Design**: Section 13 `<section id="pricing">` is on a light background (`#f0f0ee`). 
2. **Pricing Cards**: White background, `var(--border-light)` border. Featured card has `2px solid var(--forsythia)` border, NO background change.
3. **Badge**: `<div class="pricing-badge">` sits absolute top, overlapping the border (`top: -1px; left: 50%; transform: translateX(-50%)`).
4. **Typography**: Tier name is uppercase Mono, Amount is Mono (2.5rem). Period (`/mo`) is Sans. Features are list items with `✓`.
5. **State Isolation**: Use `useRef` for `billingRef` and `currencyRef`. Use `document.querySelectorAll('[data-price-display]')` to imperatively update text content. Update toggle buttons visually using class manipulation.
6. **Data Source**: `PRICING_MATRIX.tiers` map to cards. `computePrice` pure function calculates the exact localized text.
7. **Context Decisions**: 
   - Style native `<select>` heavily.
   - Pill-shaped sliding switch for billing toggle (using a visually hidden checkbox and label, or two buttons with pill wrapper).
   - Badge overlaps top border.

## Architecture mapping
- **New Component**: `src/components/sections/Pricing.jsx`
- **Updates**: `src/App.jsx` to include `<Pricing />` (likely placed after `ProductFeatures`).

## Next Steps
Create the detailed implementation plan.
