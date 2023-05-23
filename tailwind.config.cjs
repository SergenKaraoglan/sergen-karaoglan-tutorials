/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "screen-1/2": "50vh",
        "screen-4/5": "80vh",
        "screen-3/5": "60vh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
