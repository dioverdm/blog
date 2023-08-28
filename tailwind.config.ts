import { type Config } from "tailwindcss";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: { 100: "#0598F4", 200: "#037ac7", 300: "#016cb0" },
          red: { 100: "#F00605", 200: "#b60505", 300: "#9a0404" },
        },
      },
      dropShadow: {
        ["red-glow"]: ["2px 2px 20px #f00505"],
        ["blue-glow"]: ["2px 2px 20px #0598f6"],
      },
    },
  },
  plugins: [],
} satisfies Config;
