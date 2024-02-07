/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./components/*{html,js}",
    "./*.{html,js}",
    "./Html/*{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
