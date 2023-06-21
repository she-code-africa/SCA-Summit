/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#B70569",
        "primary-light-pink": "#FFF7FC",
        "secondary-light-pink": "rgba(253, 192, 227, 0.2)",
      },
    },
  },
  plugins: [],
};
