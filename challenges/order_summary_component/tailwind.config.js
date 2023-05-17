module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'optimum-order': '#232c49',
        primary: {
          'pale-blue': 'hsl(225, 100%, 94%)',
          'bright-blue': 'hsl(245, 75%, 52%)',
          'bluish-purple': '#5B48E6',
          'medium-slate-blue': '#766cf1',
        },
        neutral: {
          'very-pale-blue': 'hsl(225, 100%, 98%)',
          'desaturated-blue': 'hsl(224, 23%, 55%)',
          'dark-blue': 'hsl(223, 47%, 23%)',
        },
      },
      backgroundImage: {
        desktop: "url('./images/pattern-background-desktop.svg')",
        mobile: "url('./images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
