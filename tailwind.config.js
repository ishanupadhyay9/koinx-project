/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2870EA 100%, #1B4AEF 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      
      boxShadow: {
        custom: '0px 0px 12px 0px rgba(16, 38, 73, 0.06)',  // Custom box shadow
      },
    
    },
  },
  plugins: [],
}
