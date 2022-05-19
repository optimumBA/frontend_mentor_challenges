const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/profile_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          'dark-cyan': '#19a2ae',
          'very-dark-blue': '#2d3248',
          'dark-grayish-blue': '#6a6f81',
        },
        neutral: {
          'dark-gray': '#969696',
        },
      },
      fontSize: {
        description: '18px',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bg-top': "url('/images/bg-pattern-top.svg')",
        'bg-bottom': "url('/images/bg-pattern-bottom.svg')",
        'bg-profile': "url('/images/bg-pattern-card.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
