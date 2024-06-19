/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // outfit font
        outfit: ["outfit", "san-serif"],
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".hide-scrollbar": {
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
            "scrollbar-width": "none" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "none" /* Safari and Chrome */,
            },
          },
        },
        ["responsive"]
      );
    },
  ],
};
