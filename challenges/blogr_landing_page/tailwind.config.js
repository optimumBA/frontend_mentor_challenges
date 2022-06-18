module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        lightRed: 'hsl(356, 100%, 66%)' /* cta text */,
        veryLightRed: 'hsl(355, 100%, 74%)' /* CTA hover background*/,
        veryDarkBlue: 'hsl(208, 49%, 24%)' /* headlings */,
        grayishBlue: 'hsl(240, 2%, 79%)' /* footer text */,
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)' /* body copy*/,
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)' /* footer background */,
        mobileVeryLightRed: 'hsl(13, 100%, 72%)' /* mobile gradient */,
        mobileLighRred: 'hsl(353, 100%, 62%)' /* mobile gradient */,
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)' /* background gradient */,
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)' /* background gradient */,
      },
      fontFamily: {
        overpass: ['Overpass'],
        ubuntu: ['Ubuntu'],
      },
      backgroundImage: {
        circles: "url('./images/bg-pattern-circles.svg')",
        mobilePattern: "url('./images/bg-pattern-intro-mobile.svg')",
        desktopPattern: "url('./images/bg-pattern-intro-desktop.svg')",
        prvasekcija: "url('./images/illustration-editor-desktop.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
