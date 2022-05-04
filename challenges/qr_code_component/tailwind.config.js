const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'mine-bg': '#d6e2f0',
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
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
