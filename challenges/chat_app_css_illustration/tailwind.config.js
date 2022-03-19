const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'chat-bg-l': '#ede5f2',
        prim: {
          'pale-violet':
            'hsl(276, 100%, 81%)' /* sub-heading at the top of the app UI */,
          'mod-violet': 'hsl(276, 55%, 52%)' /* chat on the left */,
          'des-dark-violet': 'hsl(271, 15%, 43%)' /* chat on the right */,
          'gr-blue': 'hsl(206, 6%, 79%)' /* placeholder text */,
          'very-dark-des-violet': 'hsl(271, 36%, 24%)' /* main heading */,
          'dark-gr-violet': 'hsl(270, 7%, 64%)' /* paragraph */,
        },
        grad: {
          'light-magenta': 'hsl(293, 100%, 63%)',
          'light-violet': 'hsl(264, 100%, 61%)',
        },
        sec: {
          'light-gr-violet': 'hsl(270, 20%, 96%)' /* app background */,
          'very-dark-des-violet':
            'hsl(271, 36%, 24%)' /* submit button background */,
          'very-light-magenta':
            'hsl(289, 100%, 72%)' /* radio button outline */,
        },
        hover: '#766cf1',
      },
      fontSize: {
        'body-copy': '16px',
      },
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
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
