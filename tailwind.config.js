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
        primary: {
          light: "#ffffff",
          light2: "#f9f9f9",
          default: "#ECF3FE",
          blue: {
            1: "#122447",
            2: "#ECF3FE",
            3: "#518AE1",
            4: "#004D8C",
            5: "#7BA0D8",
          },
          yellow: {
            1: "#F6AB0B",
          },
          dark: "#111111",
        },
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
