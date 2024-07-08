/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
      },
      gridTemplateColumns: {
        "custom-layout": "0.5fr 1.5fr 1fr 1fr 0.5fr",
        orders: "0.5fr 2fr 1fr 1fr 1fr",
        orders_sm: " 0.5fr 2fr 1fr",
      },
    },
  },
  plugins: [],
};
