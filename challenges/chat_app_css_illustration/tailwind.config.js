module.exports = {
  content: ['./challenges/chat_app_css_illustration/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        //text
        paleViolet: 'hsl(276, 100%, 81%)',
        moderateViolet: 'hsl(276, 55%, 52%)',
        desaturatedDark: 'hsl(271, 15%, 43%)',
        grayishBlue: 'hsl(206, 6%, 79%)',
        veryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)',
        darkGrayishViolet: 'hsl(270, 7%, 64%)',
        //gradients
        lightMagenta: 'hsl(293, 100%, 63%)',
        lightViolet: 'hsl(264, 100%, 61%)',
        //secondary
        lightGrayishViolet: 'hsl(270, 20%, 96%)',
        veryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)',
        veryLightMagenta: 'hsl(289, 100%, 72%)',
      },
      fontFamily: {
        rubik: ['Rubik'],
      },
      keyframes: {
        turnOn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        turnOn: 'turnOn 1s ease-in-out',
      },
    },
  },
  plugins: [],
  variants: {},
}
