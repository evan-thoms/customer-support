/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        'ClayCreek': '#948d63',
        'Cararra': '#e9eae2',
        'Masala': '#4c4744',
        'AquamarineBlue': '#67e2c5',
        'ShadowGreen': '#8ebcbc',
        'GrannyApple': '#e3f9ec',
      },
    },
    
  },
  plugins: [],
}