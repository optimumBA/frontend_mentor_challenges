module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        base: ['Red Hat Display', 'sans-serif'],
      },
      boxShadow: {
        btn: '0 20px 20px 0 hsla(245, 75%, 52%, 20%)',
      },
      backgroundImage: {
        mobile: "url('pattern-background-mobile.svg')",
        desktop: "url('pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
