/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#B70569",
        "primary-pink-opacity": "rgba(183, 5, 105, 0.20)",
        "primary-light-pink": "#FFF7FC",
        "secondary-light-pink": "rgba(253, 192, 227, 0.2)",
        "linear-gradient":
          "linear-gradient(180deg, #B70569 17.71%, #210D15 81.77%)",
        "linear-gradient2": "linear-gradient(180deg, #B70569 0%, #210D15 100%)",
        "primary-brown": "#BF2828",
      },
      gridTemplateRows: {
        layout: "minmax(65px, 100px) 1fr 400px",
      },
      fontSize: {
        "56px": "56px",
      },
      rotate: {
        84: "84deg",
      },
      inset: {
        100: "28rem",
      },
      borderRadius: {
        "30px": "30px",
      },
      spacing: {
        3.5: "14px",
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
