// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: "#030303",
          brighter: "#272728 ",
        },
        reddit_border: {
          DEFAULT: "#343536",
        },
        
      },
      backgroudImage: {
        'reddit-banner': "url('../assets/banner/redditBanner.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};