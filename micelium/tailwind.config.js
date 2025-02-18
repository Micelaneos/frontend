/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Personalizados para el proyecto
        grisOscuro: "#616161",
        grisFondo: "#F5F5F5",
        grisClaro: "#E0E0E0",
        grisMedio: "#9E9E9E",
        grisMuyOscuro: "#424242",
        grisCasiNegro: "#212121",
        // Colores personalizados por defecto
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
