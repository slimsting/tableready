/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerParallax: "url('../public/header_img.jpg')",
      },
      gridTemplateColumns: {
        custom: "0.5fr 2fr 1fr 1fr 2fr 2fr",
        custom2: "1fr 2fr 1fr",
        cart: "1fr 2fr 1fr 1fr 1fr 1fr",
      },
      fontFamily: {
        // outfit font
        outfit: ["outfit", "san-serif"],
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        rotate: "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360ged)" },
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
