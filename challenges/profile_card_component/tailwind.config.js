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
        kumbh: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bg-pattern-bottom': "url('/images/bg-pattern-bottom.png')",
        'bg-pattern-top': "url('/images/bg-pattern-top.svg')",
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      backgroundImage: {
        'bg-pattern-top': "url('/images/bg-pattern-top.svg')",
        'bg-pattern-bottom': "url('/images/bg-pattern-bottom.png')",
      },
    },
  },
  plugins: [],
  variants: {},
}
