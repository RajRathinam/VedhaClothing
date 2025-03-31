/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "glitter-slide": "glitter 4s linear infinite",
      },
      keyframes: {
        glitter: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "50% 50%" },
        },
      },
      colors: {
        primary: "#184355", 
        secondary: "#c59b41",  
        accent:"#e9e6de"
      },
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
        breathney: ["Dancing Script", "cursive"],
        merienda: ["Merienda", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], 
  },
}

