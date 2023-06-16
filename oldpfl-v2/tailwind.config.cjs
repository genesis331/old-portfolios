/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'famgro': ['Familjen Grotesk', 'sans-serif'],
        'ibmplexmono': ['IBM Plex Mono', 'monospace'],
        'ebgaramond': ['EB Garamond', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
