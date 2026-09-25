/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        "primary-hover": "#4338ca", // Hyphen wale name ko quotes ke andar likhein
        accent: "#f59e0b",
        success: "#10b981",
        dark: "#0f172a",
        light: "#fafafa",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm: '3rem'
        }
      }
    },
  },
  plugins: [],
}