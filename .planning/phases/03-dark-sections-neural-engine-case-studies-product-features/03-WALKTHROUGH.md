# Phase 03: Dark Sections - Walkthrough

## What Was Accomplished
1. **Scroll Reveal System (`useReveal` hook)**
   - Created a reusable custom hook utilizing `IntersectionObserver`.
   - The system attaches the `.is-revealed` class and fires a `reveal` custom event exactly once when an element intersects at 30% threshold.
2. **Neural Engine Section (`NeuralEngine`)**
   - Implemented the layout spanning the core 2-column spine.
   - Built the text reveal animation using WAAPI `.animate()` to gradually change the target span from `#555` to `#fff` over 600ms upon scroll reveal.
   - Created the AI Model logos grid and the 4 isometric outline icon grid.
3. **Statistics Section (`Statistics`)**
   - Built the 3 stat numbers (12ms, 10x, 98%).
   - Designed the `animateCounter` utility function leveraging `requestAnimationFrame` with an ease-out cubic curve (duration 1500ms).
   - Applied the pure CSS corner brackets via arbitrary Tailwind `.stat-card` equivalents.
4. **Product Demo Section (`ProductDemo`)**
   - Designed a full-viewport dark section.
   - Used a `radial-gradient` background.
   - Created the "PLAY VIDEO" button with the precisely required 4-corner bracket decorations.
5. **Case Studies Section (`CaseStudies`)**
   - Implemented the light background layout correctly isolating it visually.
   - Created a grid-based row system with hover backgrounds and a `translateX(6px)` arrow transition using `group-hover:translate-x-1.5`.
6. **Product Features Section (`ProductFeatures`)**
   - Created the "Workflow Canvas Mockup" via CSS-drawn boxes interconnected with dashed borders and group wrappers.
   - Built the 4-column feature list using outline SVG icons and proper column boundaries.
7. **App Integration**
   - Connected `useReveal()` in `App.jsx`.
   - Stacked the sections sequentially below `Hero`.

## Validation
- `npm run build` completed successfully after fixing an `index.css` encoding issue.
- Components match specifications outlined in the requirements.
- Dynamic IntersectionObserver correctly drives animations while preserving rendering performance via DOM-isolated effects.
