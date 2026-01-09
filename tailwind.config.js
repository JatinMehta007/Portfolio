
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        title:["Geist Mono" ,"sans-serif"],
        hanken: ["Hanken Grotesk", "sans-serif"]
      },
keyframes: {
  moveHorizontal: {
  "0%": {
  transform: "translateX(-50%) translateY(-10%)",
  },
  "50%": {
  transform: "translateX(50%) translateY(10%)",
  },
  "100%": {
  transform: "translateX(-50%) translateY(-10%)",
  },
  },
  moveInCircle: {
  "0%": {
  transform: "rotate(0deg)",
  },
  "50%": {
  transform: "rotate(180deg)",
  },
  "100%": {
  transform: "rotate(360deg)",
  },
  },
  moveVertical: {
  "0%": {
  transform: "translateY(-50%)",
  },
  "50%": {
  transform: "translateY(50%)",
  },
  "100%": {
  transform: "translateY(-50%)",
  },
  },
  },
  },
  
  animation: {
    scroll:
      "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
  },
  keyframes: {
    scroll: {
      to: {
        transform: "translate(calc(-50% - 0.5rem))",
      },
    },
  },
    },
  
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}


