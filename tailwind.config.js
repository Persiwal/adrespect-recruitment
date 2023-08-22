/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
        inter: ["Inter"],
      },
      transitionProperty: {
        height: "height",
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
        bounceRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "60%": {
            transform: "translateX(3px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        bounceLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "60%": {
            transform: "translateX(-3px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down-and-dissapear": "slideDownAndDissapear 0.3s ease-out",
        "bounce-left": "bounceLeft 1s ease-in-out infinite",
        "bounce-right": "bounceRight 1s ease-in-out infinite",
        wave: "wave 2s linear infinite",
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
