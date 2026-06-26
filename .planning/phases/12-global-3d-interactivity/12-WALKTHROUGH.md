# Milestone v1.5 - Phase 12: Global 3D Interactivity - Walkthrough

## What Was Accomplished
1. **Global Canvas Upgrade**
   - Refactored `HeroCanvas.jsx` to `GlobalCanvas.jsx`.
   - Massive geometric expansion: Expanded the vertical bounds (`Y-axis`) of the particle array to span from `-1500` to `+1500`, creating a massive neural column that tracks deep into the page.
   - Boosted particle density up to `400` nodes while strictly maintaining performance thresholds via proximity connection culling and optimized buffer geometry recycling.
2. **Scroll-Driven Camera Flight**
   - Linked `window.scrollY` through a smooth linear interpolation (`lerp`) function directly into the `Three.js` perspective camera's `Y-axis`. 
   - As users scroll down the page, they physically fly downwards through the neural network creating a highly cinematic depth effect.
3. **Mouse-Driven Pan Interactivity**
   - Captured normalized device coordinates (NDC) from `mousemove` events.
   - Injected the NDC vector smoothly into the `scene.rotation.x` and `scene.rotation.y` allowing the entire 3D neural net to tilt intuitively as the user investigates the UI.
4. **Z-Index Layering**
   - Shifted the `<GlobalCanvas />` component to `App.jsx` anchored strictly to `fixed inset-0 z-0`.
   - This architectural pivot causes the 3D canvas to render *behind* all content. It elegantly disappears behind the light, opaque `bg-arctic-powder` sections, but shines brightly through the dark, transparent sections—providing aggressive visual pacing.

## Validation
- Interacted with live server: Camera tracks mouse flawlessly, scroll parallax feels heavy and premium.
- `npm run build` compiled flawlessly, cementing UI integrity.
