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
        'orange-3': '#ec9112',
        'orange-4': '#fac77b',
        'heading-1': '#292c3e',
        'gray-1': '#f0f1f5',
        'gray-2': '#d8d8d8',
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
