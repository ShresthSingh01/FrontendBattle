# Phase 07: Footer, Newsletter & Responsiveness Polish - Validation

## Verification Criteria
- **Newsletter**:
  - The form elements sit flush alongside each other.
  - The input field utilizes `rgba(255,255,255,0.2)` borders appropriately.
- **Footer Grid**:
  - Valid 4-column structure exists on desktop layouts (> 768px).
  - Clean vertical stacking behavior is observed on mobile layouts (< 768px).
  - Social inline SVGs render accurately.
- **Wordmark**:
  - Displays at the extreme bottom of the DOM.
  - Matches the `clamp(80px, 16vw, 200px)` fluid typography rule.
  - Transparent text fill with visible `-webkit-text-stroke`.

## Process
Execute manually using React dev server or production preview. Check via browser devtools responsive resize handles.
