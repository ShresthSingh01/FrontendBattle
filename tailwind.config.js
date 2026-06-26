/** @type {import('tailwindcss').Config} */
export default {
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
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-entry': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
