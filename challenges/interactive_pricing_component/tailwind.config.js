const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/interactive_pricing_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          'soft-cyan': '#25f3eb',
          'strong-cyan': '#10d5c2',
          'lite-grayish-red': '#feece7',
          'lite-red': '#ff8c66',
          'pale-blue': '#bdccff',
        },
        neutral: {
          'vpale-blue': '#fafbff',
          'lite-grayish-blue': '#eaeefb',
          'lite-grayish-blueII': '#cdd7ee',
          'grayish-blue': '#858fad',
          'd-desat-blue': '#293356',
        },
      },
      fontFamily: {
        manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {},
}
