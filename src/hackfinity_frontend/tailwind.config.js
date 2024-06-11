/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#009edb",
        "light-blue": "#E2EDF1",
        "custom-bg": "var(--Blue, #2B59FF)",
      },
      colors: {
        'custom-blue': '#009ebd',
        'custom-purple': '#6D28D9',
        'custom-gray': '#F3F4F6',
        'custom-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        xs: "300px",
        ss: "620px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      fontFamily: {
        "lexend-exa": ["Lexend Exa", "sans-serif"],
      },

      lineHeight: {
        34: "34px",
      },

      backgroundImage: {
        "header-pattern":
          "url(' https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/139/original/Rectangle_40.jpg?1701100078')",
        "header-bottom":
          "url(' https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/140/original/Rectangle_41.jpg?1701100194')",
      },
    },
  },
  plugins: [],
};
