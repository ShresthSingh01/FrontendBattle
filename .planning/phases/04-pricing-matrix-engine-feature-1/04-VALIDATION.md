# Phase 04: Pricing Matrix Engine - Validation

## Verification Criteria
- **Component Render**: `<Pricing />` renders with 3 columns for Starter, Pro, Enterprise.
- **Background**: Light background `#f0f0ee`.
- **Badge**: The Pro tier features a 'Most Popular' badge positioned top-center overlapping the border.
- **Interactivity**: Clicking "Annual" reduces prices correctly via `computePrice` logic.
- **Interactivity**: Changing the Currency select to INR displays formatting in ₹.
- **Constraint Check**: Changing toggle DOES NOT trigger React re-renders. (Verified if no `useState` is used for the currency/billing in `Pricing.jsx`).
- **A11Y Check**: Price values have `aria-live="polite"` and `aria-atomic="true"`.
- **CSS Checks**: No CSS-in-JS used. Native `style` tags or Tailwind.
