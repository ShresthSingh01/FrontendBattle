# Phase 04: Pricing Matrix Engine - Implementation Plan

## Overview
Implement the Pricing Matrix Engine as a React component (`Pricing.jsx`) that adheres strictly to the zero re-render constraints, isolating all state to `useRef` and DOM mutations.

## Step-by-Step Execution

1. **Create `Pricing.jsx` Structure**
   - Read `PRICING_MATRIX.js` data to generate the 3 pricing cards statically.
   - Attach `data-price-display={tierKey}` and `data-period-label` attributes to the specific text nodes that need to update.
   - Enforce `<section id="pricing">` styling with light background (`#f0f0ee`).
   - Add the specific badge (`.pricing-badge`) and card borders for the "Most Popular" (Pro) tier.

2. **Implement Zero Re-Render Logic**
   - Create `billingRef` (default: 'monthly') and `currencyRef` (default: 'USD').
   - Create `refreshPrices()` function that iterates over `[data-price-display]` elements, calls `computePrice`, and mutates `textContent`.
   - Add `onChange` listener to the currency `<select>`.
   - Add `onClick` listeners to the billing toggle elements.

3. **Style the Controls**
   - **Currency Switcher**: Add CSS in `index.css` or arbitrary variants to style the native select (custom appearance, chevron background icon, etc.).
   - **Billing Toggle**: Implement a pill-shaped container using standard buttons but styled as a sliding pill via active classes (`.active`).

4. **Integrate Component**
   - Add `<Pricing />` to `src/App.jsx` after `ProductFeatures`.

## Dependencies
- `src/data/pricingMatrix.js` (Exists)

## Validation
- Verify that clicking Monthly/Annual toggles updates prices visually.
- Verify changing Currency dropdown updates prices with correct symbol and format.
- Use React DevTools "Highlight updates when components render" to verify NO flashes occur on the `Pricing` component when changing pricing state.
