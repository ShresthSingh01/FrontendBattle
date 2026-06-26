# Phase 03: Dark Sections - Context

**Gathered:** 2026-06-26
**Status:** Ready for planning

<domain>
## Phase Boundary
Build the mid-page sections (Neural Engine, Statistics, Product Demo, Case Studies, Product Features) and implement the scroll-triggered animation system.
</domain>

<decisions>
## Implementation Decisions

### Scroll Animations (`data-reveal`)
- Run only once per page load (prevents distraction).

### Bracket Decorations
- Pure CSS shapes (scales perfectly, matches brackets in demo) for Statistics and Product Demo.

### Case Studies Background
- Strictly stick to the spec (Light bg provides contrast before the dark pricing section).

### Workflow Canvas Mockup
- CSS-drawn wireframe boxes (matches the minimal/monochrome style).

### The agent's Discretion
- IntersectionObserver thresholds and root margins.
</decisions>

<canonical_refs>
## Canonical References
None specified in ROADMAP.md for this phase beyond the core requirements.
</canonical_refs>

<specifics>
## Specific Ideas
- IntersectionObserver should be shared and robust, modifying a single CSS class (e.g., `.is-revealed`) on elements decorated with `data-reveal`.
- Counter animations should use `requestAnimationFrame` with a cubic ease-out.
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
