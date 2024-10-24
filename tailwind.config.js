const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "75px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: "#FF48B6",
          secondary: "#5C2D2D",
          border: "#E4E6EB",
        },
      },
      spacing: {
        7.5: "30px",
        12.5: "50px",
      },
      borderRadius: {
        20: "20px",
        30: "30px",
      },
    },
  },
  plugins: [],
};
