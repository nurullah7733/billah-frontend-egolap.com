/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
      xs: { max: "450px" },
      xxs: { max: "400px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff007f",
          100: "#FF5F84",
          200: "#D40032",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
  darkMode: "class",
  // daisyui: {},
};
