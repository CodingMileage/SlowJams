/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollBackground: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
      },
      animation: {
        scrollBackground: "scrollBackground 200s linear infinite",
      },
    },
  },
  plugins: [],
};
