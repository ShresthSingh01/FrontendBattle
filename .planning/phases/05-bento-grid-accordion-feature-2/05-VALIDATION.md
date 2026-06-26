# Phase 05: Bento Grid + Accordion - Validation

## Verification Criteria
- **Component Render**: `<Performance />` renders on dark background.
- **Desktop Grid**: Displays 3 top cards and 1 wide bottom card when screen width >= 768px.
- **Mobile Accordion**: Displays an accordion list when screen width < 768px.
- **Context Syncing**: Hover over a specific card on Desktop. Resize the window to < 768px. The exact accordion item correlating to the hovered card should automatically be expanded.
- **Animation Loading**: SVG charts animate via CSS (`stroke-dasharray`/`transform`) strictly triggered by `.is-visible` upon scroll intersection.
- **No Libraries**: Exclusively uses native hooks and native CSS. No `framer-motion` or UI libraries employed for the charts/accordion.
