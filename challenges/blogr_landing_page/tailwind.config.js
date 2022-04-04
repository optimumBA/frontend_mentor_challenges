module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        //primary
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        //Neutral
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackhBlue: 'hsl(240, 10%, 16%)',
        //Background gradient - Intro/CTA mobile nav
        veryLightRed: 'hsl(13, 100%, 72%)',
        lightRed: 'hsl(353, 100%, 62%)',
        //Background gradient - body
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        overpass: ['Overpass'],
        ubuntu: ['Ubuntu'],
      },
      backgroundImage: {
        circles: "url('./images/bg-pattern-circles.svg')",
        mobilePattern: "url('./images/bg-pattern-intro-mobile.svg')",
        desktopPattern: "url('./images/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
