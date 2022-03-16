module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-display': ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        'bright-blue': '#e0e8ff',
        'pale-blue': '#3829e0',
        'very-pale-blue': '#f5f7ff',
        'desatured-blue': '#7280a7',
        'dark-blue': '#1f2f56',
        'req-blue': ' #382ae1',
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      backgroundImage: {
        'hero-pattern': "url('images/pattern-background-desktop.svg')",
        'footer-texture': "url('images/pattern-background-mobile.svg')",
      },
      width: {
        400: '23rem',
        350: '20rem',
        '85p': '85%',
        '350p': '21.8rem',
      },
    },
  },
  plugins: [],
}
