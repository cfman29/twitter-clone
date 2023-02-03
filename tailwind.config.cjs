/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#31404e",
        cardBackground: "#15202b",
        link: "#1d9bf0",
        faded: "#8b98a5",
      },
    },
  },
  plugins: [],
};
