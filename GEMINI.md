<!-- GSD:project-start source:PROJECT.md -->
## Project

**NexaFlow AI — Frontend Battle Landing Page**

A premium, high-converting, responsive SaaS landing page for "NexaFlow AI" — an AI-driven data automation platform. Built as a 4-hour hackathon competition entry (Frontend Battle Round 1, 26 June 2026). The page is a dark, editorial, text-heavy site with monochrome structure and brand accent colors, featuring a 3-column grid spine, hatched section eyebrows, and precise motion choreography matching a provided reference demo.

**Core Value:** Win the competition by maximizing the 100-point scoring matrix: 40 pts Logic/State (pricing matrix engine with zero re-renders + bento-to-accordion context transfer), 30 pts SEO/Semantic HTML (proper meta tags, semantic elements, heading hierarchy), 30 pts UI/UX Motion (matching demo animations, brand token compliance, responsive breakpoints).

### Constraints

- **Tech Stack**: React + Vite + Tailwind CSS — mandatory per competition brief and nuclear prompt
- **Fonts**: JetBrains Mono + Inter via Google Fonts only — strict requirement
- **Banned Libraries**: Framer Motion, GSAP, Radix, Shadcn, HeadlessUI — instant DQ
- **Animation**: Native CSS Transitions + Web Animations API (WAAPI) only — no runtime CSS-in-JS animation engines
- **Performance**: Entry animations must complete <500ms total, must not delay TTI
- **Timeline**: ~4 hours total build time
- **No Hardcoded Prices**: All pricing values must derive from `PRICING_MATRIX` data object
- **No Global Re-renders**: Currency/billing toggle must use refs + imperative DOM mutations
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.agent/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
