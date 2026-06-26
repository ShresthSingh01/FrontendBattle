# Phase 06: Remaining Sections - Context

**Gathered:** 2026-06-26
**Status:** Ready for planning

<domain>
## Phase Boundary
Implement the remaining distinct content sections: Why Us (SECT-08), Integrations (SECT-09), Articles (SECT-10), and FAQ (SECT-11).
</domain>

<decisions>
## Implementation Decisions

### SVG Assets
- For missing `asset pack` SVGs (Why Us isometric icons, Integrations logos), generate simple, representative inline SVGs styled to match the requested geometric/clean line-art aesthetic.

### FAQ Accordion
- The FAQ accordion will permit only one item to be open at a time. State will be managed by a single `openIndex` hook.

### Core Constraint
- Continue adhering to the zero third-party animation libraries constraint. Ensure FAQ max-height transitions, dot matrix textures, and image scaling rely strictly on pure CSS implementations.
</decisions>

<canonical_refs>
## Canonical References
- `NUCLEAR_PROMPT_V2.md` SECTIONS 9, 10, 11, 12 specs.
</canonical_refs>

<specifics>
## Specific Ideas
- Generate an animated dot grid background for the dark half of "Why Us" using `radial-gradient` and a keyframed opacity loop.
- Structure "Articles" securely with a nested CSS Grid mapping. Ensure the featured article occupies the `grid-row: 1 / 3` span.
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
