/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system',],
      poppins: ['Poppins', 'system-ui', '-apple-system',],
      sans: ['Open Sans Hebrew', 'system-ui', '-apple-system',],
    },
    container:{
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FEFEFE",
          light: "#F7F7F7",
          red: '#EB484C'
        },
        secondary: {
          DEFAULT: "#010101",
        },
      }
    },
  },
  plugins: [],
};
