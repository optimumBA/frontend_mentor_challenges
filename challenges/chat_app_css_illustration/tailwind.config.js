const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      primary: {
        'pale-violet': '#d89eff',
        'moderate-violet': '#9241c8',
        'desat-dark-violet': '#6e5d7e',
        'grayish-blue': '#c6cacd',
        'very-dark-desat-viol': '#3e2753',
        'dark-grayish-viol': '#a39daa',
      },
      gradient: {
        'light-magenta': '#e942ff',
        'light-violet': '#8838ff',
      },
      secondary: {
        white: '#ffffff',
        'light-grayish-viol': '#f5f3f7',
        'very-dark-desat-viol': '#3e2753',
        'very-light-magenta': '#e570ff',
      },
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {},
}
