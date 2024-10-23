/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cormorant-infant": ['"Cormorant Infant"', "serif"],
        "cormorant-sc": ['"Cormorant SC"', "serif"],
        "cormorant-unicase": ['"Cormorant Unicase"', "serif"],
      },
    },
  },
  plugins: [],
};
