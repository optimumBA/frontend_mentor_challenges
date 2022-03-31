module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1200px',
        large: '1400px',
        larger: '1500px',
      },
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'pale-violet': 'hsl(276, 100%, 81%)',
        'moderate-violet': 'hsl(276, 55%, 52%)',
        'desaturated-dark-violet': 'hsl(271, 15%, 43%)',
        'grayish-blue': 'hsl(206, 6%, 79%)',
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'dark-grayish-violet': 'hsl(270, 7%, 64%)',
        'light-magenta': 'hsl(293, 100%, 63%)',
        'light-violet': 'hsl(264, 100%, 61%)',
        'light-grayish-violet': 'hsl(270, 20%, 96%)',
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'very-light-magenta': 'hsl(289, 100%, 72%)',
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },

      height: {
        'phone-h': '535px',
      },
      borderWidth: {
        10: '10px',
      },
      margin: {
        5: '5px',
        440: '-440px',
      },
      fontSize: {
        'text-xxs': '.5rem',
      },
    },
  },
  plugins: [],
}
