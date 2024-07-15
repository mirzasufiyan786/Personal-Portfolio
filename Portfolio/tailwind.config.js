/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        'md':'1200px',
        'sm' :'350px',
        'lg':'700px',
      },
    },
  },
  plugins: [],
}