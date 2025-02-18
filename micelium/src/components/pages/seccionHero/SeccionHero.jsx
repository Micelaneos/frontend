import React from "react";
import ImagenHero from "../../../../public/energia-solar.jpg"; // Importa la imagen local

const SeccionHero = () => {
  return (
    <section className="border border-red-500 h-screen flex flex-col md:flex-row items-center justify-center p-8">
      {/* Contenedor de la información */}
      <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6">
          Micelium Proyecto
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Proyecto</h2>
        <p className="text-lg text-gray-600 mb-8">
          Micelium es nuestro proyecto sobre energía renovable. Ofrecemos
          soluciones innovadoras y sostenibles para un futuro más verde.
        </p>
        <button className=" bg-blue-500 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition duration-300">
          Más información
        </button>
      </div>

      {/* Contenedor de la imagen */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={ImagenHero}
          alt="Micelium Energía Renovable"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
};

export default SeccionHero;
