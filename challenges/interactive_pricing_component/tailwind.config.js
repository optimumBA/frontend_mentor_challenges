module.exports = {
  content: ['./challenges/interactive_pricing_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        //primary
        softCyan: 'hsl(174, 77%, 80%)',
        strongCyan: 'hsl(174, 86%, 45%)',
        lightGrayishRed: 'hsl(14, 92%, 95%)',
        lightRed: 'hsl(15, 100%, 70%)',
        paleBlue: 'hsl(226, 100%, 87%)',
        //Neutral
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryPaleBlue: 'hsl(230, 100%, 99%)',
        lightGrayishBlue: 'hsl(224, 65%, 95%)',
        lightGrayishBlueTwo: 'hsl(223, 50%, 87%)',
        grayishBlue: 'hsl(225, 20%, 60%)',
        darkDesaturatedBlue: 'hsl(227, 35%, 25%)',
      },
      fontFamily: {
        manrope: ['Manrope'],
      },
      backgroundImage: {
        slider: "url('./images/icon-slider.svg')",
        bgPattern: "url('./images/bg-pattern.svg')",
        circlesPattern: "url('./images/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
