/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "30px": "7.5rem",
        "290px": "290px",
        "396px": "396px",
        "500px": "500px",
        "980px": "980px",
      },
      fontSize: {
        subtitle: "1.7rem",
      },
      colors: {
        "main-gray": "#f0f2f5",
        "main-blue": "#1877f2",
        "main-blue-hover": "#166FE5",
        "main-green": "#42B72A",
        "main-green-hover": "#36A420",
      },
    },
  },
  plugins: [],
};
