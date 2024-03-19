/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        customBlue: "#0F1629",
        deepMidnightBlue: "#0B1426",
        customDarkBlue: "#44475B",
        slateGray: "#768396",
        eerieBlack: "#111827",
        skyBlueMist: "#E8F4FD",
        shadowyNavy: "#191C1F",
        slateBlueGray: "#757779",
        greenishGray: "#3E424A",
        charcoalGray: "#1D1D1D",
        darkCharcoal: "#171717",
        darkGraphite: "#202020",
      },
    },
  },
  plugins: [],
};
