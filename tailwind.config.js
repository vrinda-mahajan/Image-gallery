/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0px 0px 3px 1px rgb(182,182,182,0.3)",
      },
    },
  },
  plugins: [],
};
