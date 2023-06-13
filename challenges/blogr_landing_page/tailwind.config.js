module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        lightRed: 'hsl(356, 100%, 66%)', //CTA text
        veryLightRed: 'hsl(355, 100%, 74%)', //CTA hover background
        veryDarkBlue: 'hsl(208, 49%, 24%)', //headings
        white: 'hsl(0, 0%, 100%)', //text
        grayishBlue: 'hsl(240, 2%, 79%)', //footer text
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)', //body copy
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)', //footer background
        //Background gradient - Intro/CTA mobile nav:
        veryLightRedTwo: 'hsl(13, 100%, 72%)',
        lightRedTwo: 'hsl(353, 100%, 62%)',
        //Background gradient - body:
        veryDarkGrayBlueTwo: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {},
}
