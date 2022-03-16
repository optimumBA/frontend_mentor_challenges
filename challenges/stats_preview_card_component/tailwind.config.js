const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          'very-dark-blue': '#090b1a' /* main background */,
          'dark-desaturated-blue': '#1b1938' /* card background */,
          'soft-violet': '#aa5cdb', // accent
        },
        neutral: {
          'transp-white-1': '#ffffffbf' /* main paragraph */,
          'transp-white-2': '#ffffff99' /* stat headings */,
        },
      },
      fontSize: {
        'body-copy': '15px',
      },
      fontFamily: {
        inter: ['Inter', 'Lexend Deca', ...defaultTheme.fontFamily.sans],
        'lexend-deca': ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },
      width: {
        desktop: '70rem',
      },
      screens: {
        mobile: '375px',
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
