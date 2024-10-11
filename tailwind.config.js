const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend:{
      fontFamily:{
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'montserrat':['Montserrat','"Roboto Slab"', 'serif'],
        'comillas': ['"Playfair Display"', 'serif'],
      },colors: {
        'gray': '#F8F9FA',
        'gray-2': '#DCDDDE',
        'green-calid':'#69B3A2',
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
};
