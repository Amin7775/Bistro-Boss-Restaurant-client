/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customInter: ["Inter", "sans-serif"],
        customCinzel: ["Cinzel", "serif"],  
     }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

