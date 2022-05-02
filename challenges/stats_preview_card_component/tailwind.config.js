const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'deca': ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        15: '15px',
      },

      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'very-dark-blue': '#090b1a',
        'dark-desa': '#1b1938',
        'soft-violet': '#aa5cdb',
      },

      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
  variants: {},
}
