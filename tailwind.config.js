/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  theme: {
    
    extend: {spacing: {
      "screen-1/2": "50vh",
      "screen-4/5": "80vh",
      "screen-3/5": "60vh",
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [require('@tailwindcss/typography'),],
}

  