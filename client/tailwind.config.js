/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',  // Extra small devices
      'sm': '600px',  // Small devices
      'md': '768px',  // Medium devices
      'lg': '1024px', // Large devices
      'xl': '1280px', // Extra large devices
      '2xl': '1536px' // Extra extra large devices
    },
    extend: {
      fontFamily: {
        'Noto': ["Noto Sans", "sans-serif"],
        'Gupter': ["Gupter", "serif"]
      },
    },
  },
  plugins: [
  ],
}

