/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#03272e'
       },
       fontFamily:{
       'Noto':["Noto Sans", 'sans-serif']
       },
    },
  },
  plugins: [],
}

