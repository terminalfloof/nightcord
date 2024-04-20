/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            "sidebar": "#151521",
            "chat": "#3F365B",
            "background": "#50476A",
            "select": "#88829B",
            "text": "#DDD6E5"
        },
        fontFamily: {
            "mplus": ['"m-plus-1c"', "sans-serif"],
        }
    },
  },
  plugins: [],
}

