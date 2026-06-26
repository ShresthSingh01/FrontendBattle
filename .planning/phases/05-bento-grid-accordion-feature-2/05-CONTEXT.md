# Phase 05: Bento Grid + Accordion - Context

**Gathered:** 2026-06-26
**Status:** Ready for planning

<domain>
## Phase Boundary
Implement the Bento Grid section (Feature 2) which switches between a desktop 3-column + full-width layout and a mobile accordion layout, including context transfer (hover-to-open) state syncing across breakpoints.
</domain>

<decisions>
## Implementation Decisions

### Context Transfer Logic
- Use a debounced resize handler to prevent jank, transferring context once resizing settles across the 768px breakpoint.

### SVG Animations
- Animate when scrolled into view (use `IntersectionObserver` to add `is-visible` class) rather than purely on mount.

### Accordion Styling
- Rotate 90deg (▶ to ▼) as specified in the prompt spec snippet.

### Core Constraint
- **Zero Libraries**: SVGs are animated via pure CSS (stroke-dasharray, transform). Accordion uses pure CSS max-height transitions. Context syncing relies strictly on `useRef` and `ResizeObserver`.
</decisions>

<canonical_refs>
## Canonical References
- `NUCLEAR_PROMPT_V2.md` SECTION 8 specs.
</canonical_refs>

<specifics>
## Specific Ideas
- Enhance the `useReveal` hook or create an inline intersection observer to trigger `.is-visible` for the SVG charts.
- For desktop cards, handle `onMouseEnter` to update the `lastHoveredBentoRef`.
- Ensure `Accordion` is totally hidden (`hidden md:block` -> `block md:hidden`) while the Bento is `hidden md:grid`.
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
