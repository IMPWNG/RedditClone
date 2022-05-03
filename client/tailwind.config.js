// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: "#030303",
          brightest:'#1a1a1a',
          brighter: "#272728 ",
        },
        reddit_border: {
          DEFAULT: "#343536",
        },
        reddit_text:{
          DEFAULT: "rgb(215, 218, 220)",
          darker: "#818384",
        }
      },
      backgroundImage: {
        "reddit-banner": "url('./assets/banner/redditBanner.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};