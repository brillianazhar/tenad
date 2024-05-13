/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BF2A3E",
        primaryLight: "#E7E7E7",
        primaryDark: "#1C1C1E",
      },
    },
  },
  plugins: [],
  safelist: ["w-[80px]", "h-[80px]"],
};
