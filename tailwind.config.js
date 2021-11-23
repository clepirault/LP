module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      //
    },
    extend: {
      backgroundImage: {
        'homepage': "url('../img/hero.jpg')",
        'hr': "url('../img/hr.jpg')"
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
