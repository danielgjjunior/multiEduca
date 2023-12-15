module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          200: "#b4bdc4",
          300: "#8f9bb3",
          800: "#2e3a59",
          900: "#292d32",
          "900_01": "#202244",
        },
        gray: { 50: "#f7f9fc", 200: "#f0f0f0", 500: "#a0a4ab" },
        blue: { A700: "#3366ff", A700_33: "#3366ff33" },
        red: { 500: "#ff323f", A200: "#f75f5f", "500_33": "#ff333f33" },
        orange: {
          200: "#ffb878",
          400: "#ff9432",
          A700: "#ff6b00",
          "400_33": "#ff953333",
        },
        indigo: { A100: "#768cff" },
        green: { 400: "#64e561" },
        black: { "900_14": "#00000014" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto", jost: "Jost", mulish: "Mulish" },
      boxShadow: { bs: "0px 4px  10px 0px #00000014" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
