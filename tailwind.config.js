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
        homepage: "url('../img/hero.jpg')",
        hr: "url('../img/hr.jpg')",
        photographies: "url('../img/photographies.jpg')",
        'boulots-mixtes': "url('../img/boulots-mixtes.jpg')",
        pochoirs: "url('../img/pochoirs.jpg')",
        cartons: "url('../img/cartons.JPG')",
        aquarelles: "url('../img/aquarelles.jpg')",
      },
      backgroundColor: {
        newBlue: '#5296c1',
      },
      textColor: {
        newYellow: '#fcff7e',
        newRed: '#f01e1e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
