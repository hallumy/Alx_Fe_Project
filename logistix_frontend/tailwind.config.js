/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logistixBlue: {
          700: "#2F539B",
        }
      },
    },
  },
  plugins: [],
}

