# Phase 04: Pricing Matrix Engine - Context

**Gathered:** 2026-06-26
**Status:** Ready for planning

<domain>
## Phase Boundary
Implement the matrix-driven pricing engine with zero-re-render state isolation, including the UI for currency switching, billing toggling, and three pricing cards on a light background.
</domain>

<decisions>
## Implementation Decisions

### Currency Switcher
- Style the native `<select>` heavily with CSS to match the brand (custom arrow, dark text, light bg).

### Billing Toggle
- A pill-shaped sliding switch (checkbox-based for accessibility, styled with CSS).

### Pricing Card Badge
- 'Most Popular' badge overlaps the top border of the card (half-in, half-out).

### Core Constraint
- **Zero re-renders**: All price updates must happen via imperative DOM mutation using `useRef` directly mutating `[data-price-display]` nodes.
</decisions>

<canonical_refs>
## Canonical References
- `src/data/pricingMatrix.js` - Single source of truth for pricing.
</canonical_refs>

<specifics>
## Specific Ideas
- Attach event listeners manually inside a `useEffect` to the select and toggle inputs, calculating the values using the `computePrice` pure function.
- Enforce accessibility strictly via `aria-live` regions on the dynamically updated price nodes.
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
