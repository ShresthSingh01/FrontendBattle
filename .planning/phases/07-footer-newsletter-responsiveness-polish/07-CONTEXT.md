# Phase 07: Footer, Newsletter & Responsiveness Polish - Context

**Gathered:** 2026-06-26
**Status:** Ready for planning

<domain>
## Phase Boundary
Implement the final structure of the landing page: Newsletter CTA (SECT-13) and the expansive Footer structure (SECT-14). Conduct a final responsiveness audit mapping to mobile-first constraints (RESP-01–04).
</domain>

<decisions>
## Implementation Decisions

### Mobile Layout Architecture
- The 4-column footer structure will collapse cleanly into a vertical stack on mobile viewports (< 768px) to maximize legibility.
- The oversized `.footer-wordmark` will remain anchored at the absolute bottom.

### Brand Tokens
- Render the signature "nexaflow" wordmark using the pure CSS `-webkit-text-stroke` paradigm over a transparent color fill, utilizing the precise `clamp(80px, 16vw, 200px)` formula designated by the spec.

### Asset Strategy
- Utilize inline SVGs for the Lightning bolt logo and Social Icons (X, LinkedIn, YouTube, Instagram) to ensure zero dependency requirements.
</decisions>

<canonical_refs>
## Canonical References
- `NUCLEAR_PROMPT_V2.md` SECTION 14: `<section id="newsletter">` + `<footer>` specifications.
</canonical_refs>

<specifics>
## Specific Ideas
- Integrate the form styling precisely: `.newsletter-form`, `.newsletter-input`, and `.newsletter-submit` with explicit `rgba(255,255,255,0.2)` borders.
- Make the main component `Footer.jsx` wrap both the Newsletter section and the actual `<footer/>` tags to isolate the dark background bleed effectively.
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
