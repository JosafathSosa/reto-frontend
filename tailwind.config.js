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
        SoftOrange: "hsl(35, 77%, 62%)",
        SoftRed: "hsl(5, 85%, 63%)",
        OffWhite: "hsl(36, 100%, 99%)",
        GrayishBlue: "hsl(233, 8%, 79%)",
        DarkGrayishBlue: "hsl(236, 13%, 42%)",
        VeryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
