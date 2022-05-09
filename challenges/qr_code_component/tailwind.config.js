const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'dark-blue': 'hsl(218, 44%, 22%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        whitee: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        custom: '15px',
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
