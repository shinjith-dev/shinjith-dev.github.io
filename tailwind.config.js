/** @type {import('tailwindcss').Config} */

// https://uicolors.app/edit?sv1=burnt-sienna:50-fef4f2/100-fee7e2/200-fdd5cb/300-fbb6a6/400-f78c72/500-ee6c4d/600-da4a28/700-b73b1e/800-98341c/900-7e301e/950-44160b;mirage:50-f0f6fd/100-e4effb/200-cee1f7/300-b1cdf0/400-91b0e8/500-7694de/600-5c74cf/700-4c60b6/800-405193/900-394776/950-181d31;juniper:50-f5f8f7/100-dee9e5/200-bed1cd/300-95b3ac/400-678983/500-547872/600-425f5b/700-374e4b/800-2f403e/900-2a3735/950-151e1e

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      light: {
        50: "#f5f8f7",
        100: "#dee9e5",
        200: "#bed1cd",
        300: "#95b3ac",
        400: "#678983",
        500: "#547872",
        DEFAULT: "#425f5b",
        600: "#425f5b",
        700: "#374e4b",
        800: "#2f403e",
        900: "#2a3735",
        950: "#151e1e",
      },
      brand: {
        50: "#fef4f2",
        100: "#fee7e2",
        200: "#fdd5cb",
        300: "#fbb6a6",
        400: "#f78c72",
        DEFAULT: "#ee6c4d",
        500: "#ee6c4d",
        600: "#da4a28",
        700: "#b73b1e",
        800: "#98341c",
        900: "#7e301e",
        950: "#44160b",
      },
    },
    fontFamily: {
      serif: ["Inter", "serif"],
      display: ['"Lobster"'],
    },
    extend: {},
  },
  plugins: [],
};
