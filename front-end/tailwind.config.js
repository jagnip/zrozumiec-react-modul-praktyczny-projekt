/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'text-primary': "#000000",
      },
      fontFamily: {
        display: ["GT Walsheim Pro", "sans-serif"],
        body: ["GT Walsheim Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
