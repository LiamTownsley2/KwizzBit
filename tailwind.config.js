/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif']
    },
    extend: {
      colors: {
        'orange-1': '#f97316',
        'orange-2': '#f59000',
        'heading-1': '#292c3e',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
