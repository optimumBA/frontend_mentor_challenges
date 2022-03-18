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
          'very-dark-dt': '#2d3248',
          'dark-grayish-blue': '#6a6f81',
        },
        neutral: {
          'dark-gray': '#969696',
        },
      },
      fontSize: {
        'card-desc': '18px',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
      },
      width: {
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
        136: '34rem',
      },
      borderWidth: {
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      backgroundImage: {
        'bg-pattern-top': "url('/images/bg-pattern-top.svg')",
        'bg-pattern-bottom': "url('/images/bg-pattern-bottom.png')",
      },
      screens: {
        /* Responsive breakpoints */ mobile: '376px',
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
