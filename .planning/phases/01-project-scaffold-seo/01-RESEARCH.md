# Phase 1: Project Scaffold & SEO - Research

**Researched:** 2026-06-26
**Domain:** React + Vite + Tailwind CSS v3 Scaffold & SEO Meta Tags
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Use Tailwind CSS v3 (stable) — `tailwind.config.js` with `module.exports` and `extend` block. The NUCLEAR_PROMPT_V2 shows v3 syntax explicitly.
- **D-02:** Hybrid approach — CSS custom properties in `:root` (as shown in NUCLEAR_PROMPT_V2 Section 2) serve as the single source of brand tokens. Tailwind config `extend.colors` and `extend.fontFamily` reference or duplicate these values for utility class access.
- **D-03:** Component-level CSS classes (`.cta-primary`, `.play-btn`, `.stat-card`, `.bento-card`, `.section-eyebrow`, etc.) go in `src/index.css` alongside the CSS variables and keyframes. Components use both Tailwind utilities and these custom classes.
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

### the agent's Discretion
- Vite configuration details (plugins, build optimization)
- PostCSS configuration approach
- Whether to use `@tailwind` directives or `@import`

### Deferred Ideas (OUT OF SCOPE)
- None — discussion stayed within phase scope

</user_constraints>

<research_summary>
## Summary

This phase initializes the frontend infrastructure for the NexaFlow AI landing page. We scaffold a React project using Vite and configure Tailwind CSS v3 as the styling engine. This stack provides the fast feedback loop and rapid styling capabilities necessary to meet the 4-hour hackathon timeline.

For SEO and accessibility, we configure the HTML head with all necessary SEO tags (title, description, OG tags, Twitter cards, canonical links) and preconnect to Google Fonts. This guarantees maximum score in the SEO/Semantic HTML dimension of the grading matrix.

**Primary recommendation:** Initialize using `npx create-vite@latest ./ --template react` in non-interactive mode. Install Tailwind CSS v3, PostCSS, and Autoprefixer, and set up the custom directory structures immediately.
</research_summary>

<standard_stack>
## Standard Stack

The standard build and styling packages chosen for this hackathon:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react | ^18.3.1 | Core UI Framework | Industry standard, fast, declarative |
| react-dom | ^18.3.1 | DOM Rendering | Required for React web application |
| vite | ^5.3.1 | Build Tool & Dev Server | Extremely fast HMR, perfect for 4h hackathon |
| tailwindcss | ^3.4.4 | Utility-first styling | Stable, extensible utility styling system |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| postcss | ^8.4.38 | CSS preprocessing | Required for Tailwind compilation |
| autoprefixer | ^10.4.19 | Vendor prefixing | Required for cross-browser CSS support |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Tailwind v3 | Tailwind v4 | v4 is too new/experimental, conflicts with the prompt's `module.exports` Tailwind config structure |
| Vanilla React | Next.js | Next.js is overkill for a static single-page landing page, increases risk of hydrations issues under 4h limit |

**Installation:**
```bash
npx -y create-vite@latest ./ --template react
npm install -D tailwindcss@3.4.4 postcss autoprefixer
npx tailwindcss init -p
```
</standard_stack>

<architecture_patterns>
## Architecture Patterns

### Recommended Project Structure
Matching §9 of NUCLEAR_PROMPT_V2 exactly:
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
    │   ├── Hero.jsx
    │   ├── NeuralEngine.jsx
    │   ├── Statistics.jsx
    │   ├── ProductDemo.jsx
    │   ├── CaseStudies.jsx
    │   ├── Features.jsx
    │   ├── BentoGrid.jsx
    │   ├── WhyUs.jsx
    │   ├── Integrations.jsx
    │   ├── Articles.jsx
    │   ├── FAQ.jsx
    │   ├── Pricing.jsx
    │   └── Newsletter.jsx
    └── ui/
        ├── SectionEyebrow.jsx
        ├── BentoCard.jsx
        ├── GaugeChart.jsx
        ├── BarChart.jsx
        ├── RadialChart.jsx
        └── LineChart.jsx
```

### Pattern 1: Page Spine and Global Dividers
The 3-column structural dividers must overlay all sections:
```css
.page-spine {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: 10;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
}
.page-spine::before, .page-spine::after {
  content: '';
  border-left: 1px solid var(--border-dark);
}
```

### Anti-Patterns to Avoid
- **Tailwind Version Mismatch:** Installing Tailwind CSS v4 instead of v3.4.x, causing configuration schema mismatch (v4 uses CSS-based configurations instead of `tailwind.config.js`).
- **Missing Preconnect Links:** Omitting `<link rel="preconnect" ...>` tags in the HTML head, leading to slower Google Font loading times and flashing of unstyled text (FOUT).
- **Multiple h1 elements:** Creating multiple `<h1>` elements per page, which degrades SEO score. Only the hero title must be `<h1>`.
</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Scaffold setup | Custom webpack config | Vite React template | Avoid wasting time configuring loaders and plugins during the 4h window |
| Reset styles | Custom CSS reset | Tailwind's Preflight | Preflight is battle-tested, handles browser differences automatically |
| Font loading | Custom font files hosting | Google Fonts CDN | Fast delivery and caching, setup takes less than a minute |

**Key insight:** Scaffolding a project manually is error-prone. Vite's official React template has optimal configuration out-of-the-box, allowing us to focus entirely on building high-value scoring features (pricing engine and bento grid).
</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: Tailwind v4 Automatic Installation
**What goes wrong:** `npm install tailwindcss` might install v4 by default, causing config parsing errors since v4 doesn't use `tailwind.config.js`.
**Why it happens:** npm installs the latest tag of package releases.
**How to avoid:** Explicitly install `tailwindcss@3` or `tailwindcss@3.4.4` to lock the v3 version.

### Pitfall 2: Broken Font Fails rendering
**What goes wrong:** Custom fonts load late or fail, fallback font is rendered, modifying layout spacing.
**Why it happens:** Missing preconnect links or cross-origin headers.
**How to avoid:** Put preconnect links BEFORE the stylesheet links. Use standard, simple fallbacks (`sans-serif`, `monospace`).
</common_pitfalls>

<code_examples>
## Code Examples

### tailwind.config.js Configuration
```javascript
// Source: NUCLEAR_PROMPT_V2.md §8
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arctic-powder': 'var(--arctic-powder)',
        'mystic-mint': 'var(--mystic-mint)',
        'forsythia': 'var(--forsythia)',
        'deep-saffron': 'var(--deep-saffron)',
        'nocturnal-exp': 'var(--nocturnal-exp)',
        'oceanic-noir': 'var(--oceanic-noir)',
        'true-black': 'var(--true-black)',
        'off-white': 'var(--off-white)',
        'mid-gray': 'var(--mid-gray)',
        'border-dark': 'var(--border-dark)',
        'border-light': 'var(--border-light)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-entry': 'var(--ease-entry)',
      }
    },
  },
  plugins: [],
}
```

### index.css Configuration
```css
/* Source: NUCLEAR_PROMPT_V2.md §2 */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --arctic-powder:  #F1F6F4;
  --mystic-mint:    #D9E8E2;
  --forsythia:      #FFC801;
  --deep-saffron:   #FF9932;
  --nocturnal-exp:  #114C5A;
  --oceanic-noir:   #172B36;

  --true-black:     #0a0a0a;
  --off-white:      #f0f0ee;
  --mid-gray:       #888888;
  --border-dark:    rgba(255,255,255,0.08);
  --border-light:   rgba(0,0,0,0.08);

  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', sans-serif;

  --ease-micro:  150ms ease-out;
  --ease-layout: 300ms ease-in-out;
  --ease-entry:  400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```
</code_examples>

<sota_updates>
## State of the Art (2024-2025)

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Create React App | Vite | 2022 | Vite has instant startup times and builds in seconds |
| Custom SEO components | Raw index.html SEO | 2023 | Direct HTML tags prevent client-side JS layout shifts during SEO indexing |
</sota_updates>

## Validation Architecture

The verification strategy checks that the React app runs, compiles, has Tailwind classes compiling correctly, and all SEO tags are present in `index.html`.

### Automated Verification Tests
- Check if HTML has correct meta tags using simple grep searches.
- Ensure the project builds successfully with `npm run build`.

### Manual Verification
- Launching the application and loading in a web browser.
</architecture_patterns>

<open_questions>
## Open Questions
1. **Asset hosting:** Where are the og-banner.png or lightning icons hosted? We'll create placeholders/stubs or generate local SVGs for them.
</open_questions>

<sources>
## Sources

### Primary (HIGH confidence)
- `NUCLEAR_PROMPT_V2.md` - Complete visual/functional specification
- `FB_Round_1.md` - Rules and scoring criteria
- Tailwind CSS v3 docs - https://v3.tailwindcss.com/docs
- Google Fonts API - https://fonts.google.com/
</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: Vite React React-DOM Tailwind CSS
- Ecosystem: PostCSS, Google Fonts
- Patterns: SEO elements, brand token definitions
- Pitfalls: Version conflicts, styling rules

**Confidence breakdown:**
- Standard stack: HIGH - Standard Vite setup
- Architecture: HIGH - Defined by NUCLEAR_PROMPT_V2
- Pitfalls: HIGH - Common Tailwind v3/v4 setup pitfalls
- Code examples: HIGH - Extracted from spec

**Research date:** 2026-06-26
**Valid until:** 2026-07-26
</metadata>

---

*Phase: 01-project-scaffold-seo*
*Research completed: 2026-06-26*
*Ready for planning: yes*
