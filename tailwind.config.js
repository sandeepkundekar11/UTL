/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./*.{html,js}",
    "./Html/*{html,js}",
    "./ReuseComponents/*{html,js}",
    "./Html/About_pages/*{html,js}",
    "./Html/UTL_Groups/*{html,js}",
    "./Html/Products/*{html,js}",
    "./Html/Solutions_pages/*{html,js}",
    "./Html/Resources/*{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
