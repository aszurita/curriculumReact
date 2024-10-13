const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite/plugin");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Para asegurar que Flowbite esté en el contenido
  ],
  theme: {
    extend:{
      fontFamily:{
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'montserrat':['Montserrat','"Roboto Slab"', 'serif'],
        'comillas': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'gray': '#F8F9FA',
        'gray-2': '#DCDDDE',
        'green-calid':'#69B3A2',
      }
    }
  },
  plugins: [
    flowbite, // Para agregar Flowbite como plugin
  ],
});
