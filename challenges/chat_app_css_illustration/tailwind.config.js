const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'pale-violet': 'hsl(276, 100%, 81%)',
        'moderate-violet': 'hsl(276, 55%, 52%)',
        'desaturated-dark-violet': 'hsl(271, 15%, 43%)',
        'grayish-blue': 'hsl(206, 6%, 79%)',
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'dark-grayish-violet': 'hsl(270, 7%, 64%)',
        // GRADIENT COLORS
        'light-magenta': 'hsl(293, 100%, 63%)',
        'light-violet': 'hsl(264, 100%, 61%)',
        //SECONDARY
        whitee: 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 20%, 96%)',
        'vvery-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'vvery-light-magenta': 'hsl(289, 100%, 72%)',
      },
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '375px',
        lg: '1100px',
      },
    },
  },
  plugins: [],
  variants: {},
}
