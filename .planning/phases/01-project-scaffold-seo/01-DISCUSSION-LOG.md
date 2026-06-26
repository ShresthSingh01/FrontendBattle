# Phase 1: Project Scaffold & SEO - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-26
**Phase:** 01-project-scaffold-seo
**Areas discussed:** Tailwind version, CSS architecture, File structure

---

## Tailwind Version

| Option | Description | Selected |
|--------|-------------|----------|
| Tailwind CSS v3 | Rock-solid, tons of examples, `tailwind.config.js` with `extend`. Competition brief shows v3-style config. | ✓ |
| Tailwind CSS v4 | Newer CSS-first model with `@theme`. Potentially faster builds but less community examples for hackathon speed. | |
| You decide | Pick what's fastest to set up | |

**User's choice:** Tailwind CSS v3 (recommended)
**Notes:** NUCLEAR_PROMPT_V2 explicitly shows v3-style `module.exports` config syntax.

---

## CSS Architecture

| Option | Description | Selected |
|--------|-------------|----------|
| Hybrid | CSS custom properties in `:root` for brand tokens + Tailwind config extends those vars. Components use both Tailwind utilities and `var(--forsythia)` etc. | ✓ |
| Tailwind-only | All tokens in tailwind.config.js `extend.colors`. Reference via Tailwind classes only. | |
| CSS variables only | All styling via index.css custom properties and custom CSS classes. Tailwind just for layout utilities. | |

**User's choice:** Hybrid (recommended)
**Notes:** Matches the NUCLEAR_PROMPT_V2 which defines both CSS custom properties and Tailwind config extensions.

### Follow-up: Component CSS classes

| Option | Description | Selected |
|--------|-------------|----------|
| Yes | Define component-level CSS classes (`.cta-primary`, `.stat-card`, `.bento-card`) in index.css alongside Tailwind | ✓ |
| No | Keep all styling inline via Tailwind classes in JSX, only put CSS variables and keyframes in index.css | |

**User's choice:** Yes — define component-level CSS classes in index.css
**Notes:** The NUCLEAR_PROMPT_V2 provides many component CSS class definitions that should be used directly.

---

## File Structure

| Option | Description | Selected |
|--------|-------------|----------|
| Exact match | Follow the nuclear prompt's file structure exactly (Layout/, sections/, ui/, data/, hooks/) | ✓ |
| Simplified | Flatten to fewer directories (components/ and data/ only) | |
| You decide | Match the spirit of the nuclear prompt structure | |

**User's choice:** Exact match (recommended)
**Notes:** The competition may evaluate code organization against the spec.

## Agent's Discretion

- Vite configuration details (plugins, build optimization)
- PostCSS configuration approach
- Whether to use `@tailwind` directives or `@import`

## Deferred Ideas

None — discussion stayed within phase scope
