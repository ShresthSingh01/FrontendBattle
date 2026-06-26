# Phase 1: Project Scaffold & SEO - Context

**Gathered:** 2026-06-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Initialize the React + Vite + Tailwind CSS project with brand token configuration, Google Fonts loading, and complete SEO metadata (title, meta description, canonical, OG, Twitter tags). Set up the directory structure matching the NUCLEAR_PROMPT_V2 spec. No visual components are built in this phase — only infrastructure.

</domain>

<decisions>
## Implementation Decisions

### Tailwind Version
- **D-01:** Use Tailwind CSS v3 (stable) — `tailwind.config.js` with `module.exports` and `extend` block. The NUCLEAR_PROMPT_V2 shows v3 syntax explicitly.

### CSS Architecture
- **D-02:** Hybrid approach — CSS custom properties in `:root` (as shown in NUCLEAR_PROMPT_V2 Section 2) serve as the single source of brand tokens. Tailwind config `extend.colors` and `extend.fontFamily` reference or duplicate these values for utility class access.
- **D-03:** Component-level CSS classes (`.cta-primary`, `.play-btn`, `.stat-card`, `.bento-card`, `.section-eyebrow`, etc.) go in `src/index.css` alongside the CSS variables and keyframes. Components use both Tailwind utilities and these custom classes.

### File Structure
- **D-04:** Follow the NUCLEAR_PROMPT_V2 file structure exactly:
  ```
  src/
  ├── main.jsx
  ├── App.jsx
  ├── index.css
  ├── data/
  │   └── pricingMatrix.js
  ├── hooks/
  │   └── useBreakpointTransfer.js
  └── components/
      ├── Layout/
      │   ├── PageSpine.jsx
      │   ├── Header.jsx
      │   └── Footer.jsx
      ├── sections/
      │   ├── Hero.jsx ... Newsletter.jsx
      └── ui/
          ├── SectionEyebrow.jsx
          ├── BentoCard.jsx
          ├── GaugeChart.jsx, BarChart.jsx, LineChart.jsx
  ```

### Agent's Discretion
- Vite configuration details (plugins, build optimization)
- PostCSS configuration approach
- Whether to use `@tailwind` directives or `@import`

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Competition Spec
- `NUCLEAR_PROMPT_V2.md` — Complete section-by-section implementation spec with CSS/JSX code snippets (THE primary reference)
- `FB_Round_1.md` — Official competition rules, constraints, scoring matrix, DQ criteria

### Design Tokens
- `NUCLEAR_PROMPT_V2.md` §2 "BRAND TOKENS (EXACT)" — CSS custom properties, font families, transition timings
- `colorPallet.md` — Original color palette asset
- `fonts.md` — Font specification (JetBrains Mono + Inter)

### Architecture
- `NUCLEAR_PROMPT_V2.md` §8 "TAILWIND CONFIG" — Exact tailwind.config.js structure
- `NUCLEAR_PROMPT_V2.md` §9 "FILE STRUCTURE" — Directory layout specification
- `NUCLEAR_PROMPT_V2.md` §0 "HEAD/SEO" — Complete meta tag specification

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project, no existing code

### Established Patterns
- None — patterns will be established in this phase

### Integration Points
- `index.html` — Entry point for meta tags and Google Fonts loading
- `src/index.css` — Will contain CSS custom properties and global styles
- `tailwind.config.js` — Brand token extensions

</code_context>

<specifics>
## Specific Ideas

- The NUCLEAR_PROMPT_V2.md contains exact copy-paste-ready HTML for `<head>` meta tags — use these verbatim
- Google Fonts preconnect and font loading links are specified exactly in §0
- The `:root` CSS variables block in §2 must be implemented exactly as shown
- Tailwind config in §8 must be implemented as shown

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-project-scaffold-seo*
*Context gathered: 2026-06-26*
