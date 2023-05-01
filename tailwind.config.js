/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        "royal-blue": "#08387f",
      },
      fontFamily: {
        rockwell: ["Rockwell", 'ui-serif'],
      },
      spacing: {
        '25': '6.25rem',
      }
    },
  },
  plugins: [],
};
