/** @type {import('tailwindcss').Config} */

// https://uicolors.app/edit?sv1=burnt-sienna:50-fef4f2/100-fee7e2/200-fdd5cb/300-fbb6a6/400-f78c72/500-ee6c4d/600-da4a28/700-b73b1e/800-98341c/900-7e301e/950-44160b;mirage:50-f0f6fd/100-e4effb/200-cee1f7/300-b1cdf0/400-91b0e8/500-7694de/600-5c74cf/700-4c60b6/800-405193/900-394776/950-181d31;juniper:50-f5f8f7/100-dee9e5/200-bed1cd/300-95b3ac/400-678983/500-547872/600-425f5b/700-374e4b/800-2f403e/900-2a3735/950-151e1e

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      light: {
        lightest: "#f5f8f7",
        lighter: "#dee9e5",
        200: "#bed1cd",
        light: "#95b3ac",
        400: "#678983",
        500: "#547872",
        DEFAULT: "#425f5b",
        dark: "#374e4b",
        800: "#2f403e",
        darker: "#2a3735",
        darkest: "#151e1e",
      },
      brand: {
        lightest: "#fef4f2",
        100: "#fee7e2",
        lighter: "#fdd5cb",
        300: "#fbb6a6",
        light: "#f78c72",
        DEFAULT: "#ee6c4d",
        dark: "#da4a28",
        700: "#b73b1e",
        darker: "#98341c",
        900: "#7e301e",
        darkest: "#44160b",
      },
      dark: {
        950: "#1c2335",
        900: "#323749",
        800: "#484d5d",
        700: "#606472",
        600: "#797c88",
        500: "#92959f",
        50: "#f6f6f7",
        100: "#eef0f1",
        200: "#e0e2e5",
        300: "#cdd0d4",
        400: "#b7bbc2",
      },
    },
    fontFamily: {
      serif: ["Inter", "serif"],
      display: ['"Oleo Script"', "cursive"],
      mono: ['"Inconsolata"', "monospace"],
    },
    extend: {
      boxShadow: {
        "spread-xs":
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        "spread-sm":
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        spread:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        "spread-lg":
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
    },
  },
  plugins: [],
};
