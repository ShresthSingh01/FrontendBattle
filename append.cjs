const fs = require('fs');

const css = `
/* ==========================================================================
   Scroll Reveal System & Hover Effects
   ========================================================================== */
[data-reveal] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

[data-reveal].is-revealed {
  opacity: 1;
  transform: translateY(0);
}

[data-reveal="left"] {
  transform: translateX(-40px);
}
[data-reveal="left"].is-revealed {
  transform: translateX(0);
}

[data-reveal="right"] {
  transform: translateX(40px);
}
[data-reveal="right"].is-revealed {
  transform: translateX(0);
}

/* Base button transitions */
button {
  transition: all 0.3s ease-out;
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

/* Bento card interactive hover */
.bento-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
}
.bento-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  border-color: rgba(255,255,255,0.15);
}

/* Header/Footer links */
nav a, footer a {
  transition: color 0.2s ease-out, opacity 0.2s ease-out;
}
nav a:hover, footer a:hover {
  opacity: 1;
  color: var(--forsythia);
}
`;

fs.appendFileSync('src/index.css', css);
