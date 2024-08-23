/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:["Poppins", 'sans-serif']
      },
      borderRadius: {
        'custom-10-25': '10px 25px 25px 22px',
        'custom-12-25': '25px 22px 10px 25px',
        'custom-13-25': '220px 220px 0px 0px',
      },
      backgroundSize: {
        'auto-100px': 'auto 100px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

