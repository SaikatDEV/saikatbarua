/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-lg": { max: "1300px" }, // Applies styles when screen is ≤ 1280px
        "custom-xl": { min: "1600px" }, // Applies styles when screen is ≥ 1600px
      },
    },
  },
  plugins: [],
};
