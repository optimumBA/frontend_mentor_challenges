module.exports = {
  content: ['./challenges/interactive_pricing_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        softCyan: 'hsl(174, 77%, 80%)', //Full Slider Bar
        strongCyan: 'hsl(174, 86%, 45%)', //Slider Background
        lightGrayishRed: 'hsl(14, 92%, 95%)', //Discount Text
        lightRed: 'hsl(15, 100%, 70%)', //discount text
        paleBlue: 'hsl(226, 100%, 87%)', //CTA Text
        white: 'hsl (0, 0%, 100%)', //Pricing Component Background
        veryPaleBlue: 'hsl(230, 100%, 99%)', //Main Background
        lightGrayishBlueOne: 'hsl(224, 65%, 95%)', //Empty Slider Bar
        lightGrayishBlueTwo: 'hsl(223, 50%, 87%)', //Toggle Background
        grayishBlue: 'hsl(225, 20%, 60%)', //text
        darkDesaturatedBlue: 'hsl(227, 35%, 25%)', //Text & CTA Background
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      //Font size (Introductory Paragraph): 15px
    },
  },
  plugins: [],
  variants: {},
}
