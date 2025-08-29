/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        delura: {
          maroon: "#6b1f2a",
          raspberry: "#b85c7a",
          ivory: "#f8f5f0",
          ink: "#111827",
          muted: "#374151"
        },
        rose: {
          100: "#ffe4e6",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
        }
      }
    },
  },
  plugins: [],
}
