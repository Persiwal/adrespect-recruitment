/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
        inter: ["Inter"],
      },
      keyframes: {
        slideUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideDownAndDissapear: {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down-and-dissapear": "slideDownAndDissapear 0.3s ease-out",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
