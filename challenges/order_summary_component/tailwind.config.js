const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        primary: {
          'pale-blue': '#e0e8ff',
          'bright-blue': '#3829e0',
        },
        neutral: {
          'very-pale-blue': '#f5f7ff',
          'desaturated-blue': '#7280a7',
          'dark-blue': '#1f2f56',
        },
      },
      fontFamily: {
        'red-hat': ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {},
}
