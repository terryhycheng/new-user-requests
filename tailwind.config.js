/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#004C93",
        secondary: "#24B3AA",
        error: "#E73A85",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
