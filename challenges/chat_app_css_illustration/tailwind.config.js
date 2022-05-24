module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'pale-violet':
          'hsl(276, 100%, 81%)' /*sub-heading at the top of the app UI*/,
        'moderate-violet': 'hsl(276, 55%, 52%)' /*chat on the left*/,
        'desaturated-dark-violet': 'hsl(271, 15%, 43%)' /*chat on the right */,
        'grayish-blue': 'hsl(206, 6%, 79%)' /*placeholder text */,
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)' /*main heading */,
        'dark-grayish-violet': 'hsl(270, 7%, 64%)' /*paragraph */,
        'light-magenta': 'hsl(293, 100%, 63%)' /* gradients */,
        'light-violet': 'hsl(264, 100%, 61%)' /*gradients */,
        'light-grayish-violet': 'hsl(270, 20%, 96%)' /*app background */,
        'very-dark-desaturated-violet':
          'hsl(271, 36%, 24%)' /*submit button background */,
        'very-light-magenta': 'hsl(289, 100%, 72%)' /*radio button outline */,
      },
      fontFamily: {
        rubik: ['Rubik'],
      },
      borderWidth: {
        10: '10px',
      },
      maxWidth: {
        32: '8rem',
      },
    },
  },
  plugins: [],
  variants: {},
}
