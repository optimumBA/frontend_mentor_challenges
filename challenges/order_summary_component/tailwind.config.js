const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        darkblue: 'hsl(223, 47%, 23%)',
      },

      backgroundImage: {
        'hero-pattern': "url('images/pattern-background-desktop.svg')",
        'footer-texture': "url('images/pattern-background-mobile.svg')",
      },

      fontSize: {
        15: '15px',
      },
      fontFamily: {
        redhat: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
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
