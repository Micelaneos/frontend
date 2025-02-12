import React from "react";

const SeccionServicios = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Servicios Contables
            </h3>
            <p className="text-green-700">
              Ofrecemos servicios contables especializados para empresas de
              energía renovable.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Consultoría Energética
            </h3>
            <p className="text-green-700">
              Asesoramiento personalizado para optimizar el uso de energías
              renovables.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Instalación de Paneles Solares
            </h3>
            <p className="text-green-700">
              Instalación y mantenimiento de paneles solares para hogares y
              empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionServicios;
