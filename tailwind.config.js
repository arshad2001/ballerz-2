/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1EA0FF",
        "custom-white": "#FFFDF4",
        "custom-yellow": "#FFE457",
      },
      scale: {
        102: "1.02",
      },
      maxWidth: {
        "32px": "32px",
      },
      width: {
        card: "360px",
      },
      height: {
        card: "270px",
      },
    },
  },
  plugins: [],
};
