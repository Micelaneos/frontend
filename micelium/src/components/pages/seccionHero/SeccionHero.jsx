import React from "react";
import ImagenHero from "../../../../public/energia-solar.jpg"; // Importa la imagen local

const SeccionHero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-green-100">
      {/* Contenedor de la imagen */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={ImagenHero}
          alt="Micelium Energía Renovable"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Contenedor de la información */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="text-4xl font-bold text-green-900 mb-4">
          Llevando tu negocio al siguiente nivel
        </h1>
        <p className="text-lg text-green-700 mb-6">
          Micelium es nuestro proyecto sobre energía renovable. Ofrecemos
          soluciones innovadoras y sostenibles para un futuro más verde.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Más información
        </button>
      </div>
    </section>
  );
};

export default SeccionHero;
