const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'preview-bg': '#d6e2f0',
        'desc-text': '#7b879d',
        'title-text': '#1f3251',
      },
      fontSize: {
        'card-desc': '15px',
      },
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: '376px',
        // => @media (min-width: 375px) { ... }
        tablet: '768px',
        // => @media (min-width: 768px) { ... }
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
  variants: {},
}
