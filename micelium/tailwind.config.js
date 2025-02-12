/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
        primary: "#4CAF50", // Verde
        secondary: "#2196F3", // Azul
        accent: "#FFEB3B", // Amarillo
        neutral: "#607D8B", // Gris
        dark: "#2E7D32", // Verde oscuro
        light: "#C8E6C9", // Verde claro
      },
    },
  },
  plugins: [],
};
