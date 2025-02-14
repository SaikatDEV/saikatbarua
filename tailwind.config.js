/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-lg": { min: "1420px" }, // Applies styles when screen is ≤ 1280px
      },
    },
  },
  plugins: [],
};
