/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        25: "25deg",
      },
      colors: {
        primarytext: "#011826",
        white: "#FFFFFF",
      },
      screens:{
        "ipad":"900px"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "none", // name of one of the included themes for dark mode
  },
};
