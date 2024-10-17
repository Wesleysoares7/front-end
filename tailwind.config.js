/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netural_colour: {
          black: "#000000",
          gray1: "#484848",
          gray2: "#797979",
          gray3: "#a9a9a9",
          gray4: "#d9d9d9",
          white: "#ffffff",
        },

        primary: {
          primary100: "#129575",
          primary80: "#71b1a1",
          primary60: "#afd3ca",
          primary40: "#dbebe7",
          primary20: "#f6faf9",
        },

        secondary: {
          secondary100: "#ff9c00",
          secondary80: "#ffa61a",
          secondary60: "#ffba4d",
          secondary40: "#ffce80",
          secondary20: "#ffe1b3",
        },
      },
    },
  },
  plugins: [],
};
