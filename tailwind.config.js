/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
      colors: {
        orange: {
          DEFAULT: "#F15A29",
          dark:    "#d44a1d",
          light:   "#ff6d3f",
        },
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
        600: "600ms",
        900: "900ms",
      },
      transitionDelay: {
        80:  "80ms",
        140: "140ms",
        200: "200ms",
        260: "260ms",
        320: "320ms",
        380: "380ms",
        460: "460ms",
      },
      backdropBlur: {
        28: "28px",
      },
    },
  },
  plugins: [],
};
