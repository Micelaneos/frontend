import React from "react";

const SeccionTestimonios = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Testimonios
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <blockquote className="text-green-700 italic">
            “Esta empresa es espectacular, los chicos son re simpáticos.”
          </blockquote>
          <p className="text-green-900 font-semibold mt-4">
            - La vecina colorada
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeccionTestimonios;
