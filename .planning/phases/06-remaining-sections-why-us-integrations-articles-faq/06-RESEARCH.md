# Phase 06: Remaining Sections - Research

## Goal
Implement the final four core content sections: Why Us (SECT-08), Integrations (SECT-09), Articles (SECT-10), and FAQ (SECT-11), ensuring they adhere to the design language, animations, and constraints specified in the brief.

## Section Details (from NUCLEAR_PROMPT_V2.md)

1. **Why Us (`<section id="why-us">`)**
   - **Layout**: Split screen. Left is dark, right is light (`#f0f0ee`).
   - **Visuals**: Left side has an animated dot grid texture (`.dot-grid-bg`) using CSS `radial-gradient` and `opacity` keyframes.
   - **Content**: Right side contains a 2-column feature list with simple SVG icons (Prime Logic, Total Clarity, Fast Cycles).

2. **Integrations (`<section id="integrations">`)**
   - **Layout**: Dark background. 4x3 logo grid.
   - **Visuals**: Logos are pure white SVGs (~60px tall), scaling to `1.1` on hover with a 150ms ease-out. No borders between grid cells.
   - **Content**: 11 specific brand logos (Anthropic, AWS, Microsoft, Bolt, Claude, Figma, Gemini, Perplexity, Meta, Perplexity variant, Mistral, v0).

3. **Articles (`<section id="articles">`)**
   - **Layout**: Light background (`#f0f0ee`). Asymmetric CSS Grid.
   - **Grid Structure**:
     - Left: 1 featured article spanning 2 rows (`grid-row: 1 / 3`), 50% width.
     - Right: 2 smaller articles stacked vertically.
   - **Visuals**: Images darken and scale up (`1.03`) on hover.

4. **FAQ (`<section id="faq">`)**
   - **Layout**: Light background. Split: Left heading/subtext, Right accordion list.
   - **Interaction**: Classic accordion where the active item expands via pure CSS `max-height`. The toggle icon rotates 45deg (`+` to `x`).
   - **State**: Only one item open at a time (controlled via React state `openIndex`).

## Next Steps
Create the detailed implementation plan.
