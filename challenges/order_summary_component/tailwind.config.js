module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',

        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        redHat: ['Red Hat Display'],
      },
      backgroundImage: {
        mobilePattern: "url('./images/pattern-background-mobile.svg')",
        desktopPattern: "url('./images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
