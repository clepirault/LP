module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/hero.jpg')"
       },
      textColor: {
        'customYellow': '#fcff7e'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
