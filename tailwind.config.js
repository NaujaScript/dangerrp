module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy-blue': '#050A10',
      },
      fontFamily: {
        'russo': ['Russo One', 'sans-serif']
      },
      spacing: {
        'spacing-mobile': '500px'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/background.jpg')",
        'mustang': "url('/img/mustang.jpg')",
        'emergency': "url('/img/emergency.jpg')",
        'road': "url('/img/road-min.jpg')",
      }),

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}