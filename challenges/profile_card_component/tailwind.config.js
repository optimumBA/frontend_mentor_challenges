const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/profile_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'dc': '#19a2ae',
        'vddb': '#2d3248',
        'dgb': '#6a6f81',
        'dg': '#969696',
      },
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
        kumbh: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '18': '18px'
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
