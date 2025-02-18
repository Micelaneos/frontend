import React from "react";

const SeccionDatos = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Dato 1 */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">15</h3>
            <p className="text-gray-700">Socios</p>
          </div>

          {/* Dato 2 */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">9</h3>
            <p className="text-gray-700">Instituciones</p>
          </div>

          {/* Dato 3 */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">120</h3>
            <p className="text-gray-700">Clientes</p>
          </div>

          {/* Dato 4 */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">36</h3>
            <p className="texayree0-700">Productos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionDatos;
