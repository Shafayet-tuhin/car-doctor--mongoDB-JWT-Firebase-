/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc: ["Inter", "sans-serif"]
    }
  },
  plugins: [require('daisyui'),],
}

