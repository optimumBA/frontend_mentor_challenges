module.exports = {
  content: ['./challenges/interactive_pricing_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        /*Primary*/
        /* Full slider bar*/
        'soft-cyan': 'a5f3eb',
        /*Slider background */
        'strong-cyan': '#10d5c2',
        /*Discount background */
        'light-grayish-red': '#feece7',
        /*Discount text */
        'discount-text': '#ff8c66',
        /*CTA text*/
        'pale-blue': '#bdccff',

        /*Neutral  */

        /*Pricing component background */
        white: '#ffff',
        /*Main background */
        'very-pale-blue': 'fafbff',
        /*Empty Slider Bar */
        'light-grayish-blue': '#eaeefb',
        /*Toggle background */
        'light-grayish-blue': '#eaeefb',
        /*Text*/
        'grayish-blue': '858fad',
        /*Text & CTA Background */
        'dark-desaturated-blue': '#293356',
      },
      fontFamily: {
        mantrope: ['Manrope'],
      },
      backgroundImage: {
        bgPattern: 'url(../images/bg-pattern.svg)',
        patternCircles: 'url(../images/pattern-circles.svg)',
      },
    },
  },
  plugins: [],
  variants: {},
}
