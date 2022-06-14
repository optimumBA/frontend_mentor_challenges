const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/faq_accordion_card/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          text: {
            'vd-desat-blue': '#1d1e35',
            'soft-red': '#f47c57',
          },
          gradient: {
            'soft-violet': '#af68ea',
            'soft-blue': '#6565e7',
          },
        },
        neutral: {
          text: {
            'vd-grayish-blue': '#4a4b5e',
            'dark-grayish-blue': '#787887',
          },
          dividers: {
            'lite-grayish-blue': '#e7e7e9',
          },
        },
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {},
}
