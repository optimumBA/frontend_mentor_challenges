const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      fontWeight: {
        extraextrabold: 900,
      },

      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        deca: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        15: '15px',
      },

      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'very-dark-blue': '#090b1a' /* main background */,
        'dark-desaturated-blue': '#1b1938' /* card background */,
        'soft-violet': '#aa5cdb', // accent
        'transp-white-1': '#ffffffbf' /* main paragraph */,
        'transp-white-2': '#ffffff99' /* stat headings */,
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
