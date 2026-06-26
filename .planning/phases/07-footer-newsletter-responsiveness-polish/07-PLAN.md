# Phase 07: Footer, Newsletter & Responsiveness Polish - Implementation Plan

## Overview
Build the `Footer.jsx` component, which encompasses both the Newsletter CTA section and the main footer block containing the oversized wordmark.

## Step-by-Step Execution

1. **Component Creation (`Footer.jsx`)**
   - Create the file `src/components/layout/Footer.jsx`.
   - Wrap the entire component in a dark theme container (`bg-[#0a0a0a]`).

2. **Newsletter Section**
   - Implement `<section id="newsletter">` at the top of the component.
   - Insert the "GET STARTED" eyebrow and text content.
   - Implement the `.newsletter-form`, `.newsletter-input`, and `.newsletter-submit` layout exactly per the provided CSS specs.

3. **Footer Grid (4 Columns)**
   - Implement `<footer>` directly below the Newsletter section.
   - Use `grid-cols-1 md:grid-cols-4` to handle mobile stacking gracefully.
   - **Column 1**: Inline SVG lightning bolt logo (~150px).
   - **Column 2**: "QUICK LINKS" block.
   - **Column 3**: "COMPANY" block.
   - **Column 4**: "POLICIES" block + inline SVGs for Socials (X, LinkedIn, YouTube, Instagram).

4. **Oversized Wordmark**
   - Append a `<div className="footer-wordmark text-center w-full">nexaflow</div>` at the absolute bottom of the `<footer>`.

5. **CSS Updates**
   - Add the specific `.newsletter-*` and `.footer-wordmark` classes to `index.css`.

6. **App Integration**
   - In `App.jsx`, replace the placeholder comment or place `<Footer />` immediately following the `<main>` closing tag, or inside `<main>` as the final element (spec puts `Footer` at the end).

## Validation
- Ensure the wordmark is fully transparent except for its 1.5px white stroke.
- Resize window to < 768px to ensure the footer collapses from 4 columns to 1 column.
- Verify the newsletter form has the correct border boundaries and hover effects.
