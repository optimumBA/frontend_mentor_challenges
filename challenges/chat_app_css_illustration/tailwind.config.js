const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        // Text
        'pale-violet': 'hsl(276, 100%, 81%)',
        'moderate-violet': 'hsl(276, 55%, 52%)',
        'desaturated-dark-violet': 'hsl(271, 15%, 43%)',
        'grayish-blue': 'hsl(206, 6%, 79%)',
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'dark-grayish-violet': 'hsl(270, 7%, 64%)',
        // Gradient
        'light-magenta': 'hsl(293, 100%, 63%)',
        'light-violet': 'hsl(264, 100%, 61%)',
        // Secondary
        white: 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 20%, 96%)',
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'very-light-magenta': 'hsl(289, 100%, 72%)',
        'left-text-bg': '#ede5f9',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {},
}
