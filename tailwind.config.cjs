/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', "./src/**/*.{js,jsx,ts,tsx}"], // Ensure this matches your project structure
    theme: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")], // Add DaisyUI here
  };
  