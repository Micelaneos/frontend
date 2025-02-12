import React from "react";

const SeccionClientes = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Nuestros Clientes
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Logos de clientes (reemplaza con imágenes reales) */}
          <img
            src="https://via.placeholder.com/150"
            alt="Cliente 1"
            className="w-32 h-32 object-contain"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Cliente 2"
            className="w-32 h-32 object-contain"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Cliente 3"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SeccionClientes;
