module.exports = {
  content: ['./challenges/faq_accordion_card/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        //primary text
        veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
        softRed: 'hsl(14, 88%, 65%)',
        //bg gradients
        softViolet: 'hsl(273, 75%, 66%)',
        softBlue: 'hsl(240, 73%, 65%)',
        //neutral text
        veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
        darkGrayishBlue: 'hsl(240, 6%, 50%)',
        //dividers
        lightGrayishBlue: 'hsl(240, 5%, 91%)',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans'],
      },
      backgroundImage: {
        mobilePattern: "url('./images/bg-pattern-mobile.svg')",
        desktopPattern: "url('./images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
