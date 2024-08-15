/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loading: "loading 1.5s ease-in-out infinite",
      },
      keyframes: {
        loading: {
          "0% , 100%": {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
          },
          "50%": {
            transform: "scaleX(1.1) scaleY(1.1)",
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
};
