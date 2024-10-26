/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "pink-lg":
          "0 10px 15px -3px rgba(236, 72, 153, 0.4), 0 4px 6px -2px rgba(236, 72, 153, 0.2)",
      },
      fontFamily: {
        "cormorant-infant": ['"Cormorant Infant"', "serif"],
        "cormorant-sc": ['"Cormorant SC"', "serif"],
        "cormorant-unicase": ['"Cormorant Unicase"', "serif"],
        whisper: ['"Whisper"', "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
