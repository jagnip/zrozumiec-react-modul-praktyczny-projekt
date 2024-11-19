/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#000000",
        "text-primary-inverted": "#ffffff",
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#000000",
        "icon-primary": "#000000",
        "bg-primary-inverted": "#000000",
        "stroke-primary": "#000000",
        "stroke-primary-inverted": "#ffffff"
      },
      fontFamily: {
        display: ["GT Walsheim Pro", "sans-serif"],
        body: ["GT Walsheim Pro", "sans-serif"],
      },
      fontSize: {
        "4xl": "2.669rem",
        "3xl": "2.136rem",
        "2xl": "1.709rem",
        xl: "1.365rem",
        lg: "1.094rem",
        base: "0.875rem",
        xs: "0.709rem",
      },
      lineHeight: {
        h1: "3.205rem",
        h2: "2.563rem",
        h3: "2.051rem",
        h4: "1.638rem",
        h5: "1.313rem",
        body: "1.5rem",
      },
      spacing: {
        "page-margin": "1.5rem",
      },
    },
  },
  plugins: [],
};
