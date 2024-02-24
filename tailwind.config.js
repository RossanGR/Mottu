/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily:{
        'creepster-regular': ['"Creepster", system-ui'],
      },
      margin:{
        'auto':'0 auto',
      },
      colors:{
        'light-green':'#00B5CC',
        'gray-350':'#A4A4A4',
      },
    },
  },
  plugins: [],
}

