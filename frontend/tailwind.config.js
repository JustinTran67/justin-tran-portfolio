/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.1" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
      },
    },
  },
  plugins: [],
}

