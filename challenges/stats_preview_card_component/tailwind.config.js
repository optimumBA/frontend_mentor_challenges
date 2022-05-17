const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          1000: '#aa5cdb',
          2000: '#090b1a',
          3000: '#1b1938',
        },
        neutral: {
          1000: '#ffffff',
          2000: 'rgba(255, 255, 255, 0.7)',
          3000: 'rgba(255, 255, 255, 0.6)',
        },
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        lexdec: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {},
}
