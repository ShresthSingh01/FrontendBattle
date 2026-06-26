# Phase 07: Footer, Newsletter & Responsiveness Polish - Research

## Goal
Finalize the landing page by implementing the Newsletter CTA, the expansive 4-column Footer, and the oversized signature wordmark. Additionally, apply mobile layout configurations across the footer section.

## Section Details (from NUCLEAR_PROMPT_V2.md)

1. **Newsletter CTA (`<section id="newsletter">`)**
   - **Background**: Dark, full bleed.
   - **Content**: Eyebrow "GET STARTED", heading "Get smarter about AI systems", and subtext.
   - **Form**: Email input and "Subscribe" button housed in a specific `.newsletter-form` wrapper with `border: 1px solid rgba(255,255,255,0.2)`.

2. **Footer (`<footer>`)**
   - **Layout**: 4-column grid (desktop), stacking to 1-column vertical list on mobile.
   - **Columns**: 
     1. Large lightning bolt logo SVG (~150px tall).
     2. QUICK LINKS: Home, Pricing, Projects, Articles.
     3. COMPANY: About Us, Contact Us, Book A Call, More Templates.
     4. POLICIES: Terms & Conditions, Privacy Policy + Social icons row.
   - **Socials**: X, LinkedIn, YouTube, Instagram (Inline SVGs).

3. **Oversized Wordmark**
   - **Spec**: A massive "nexaflow" text block rendered at the absolute bottom of the page.
   - **Styling**: 
     - Font size: `clamp(80px, 16vw, 200px)`
     - Font weight: 900
     - Fill: `color: transparent;`
     - Stroke: `-webkit-text-stroke: 1.5px rgba(255,255,255,0.15);`
   - **Position**: Sits flush at the bottom of the document.

## Next Steps
Create the detailed implementation plan.
