import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-black">
        <iframe
          title="map"
          width="100%"
          height="300"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=Puerta%20de%20Alcalá,%20Madrid&ie=UTF8&t=&z=16&iwloc=B&output=embed"
        ></iframe>
        <div className="w-10 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-40 md:mt-40 ml-20 relative z-10 shadow-md">
          <p className="hidden md:block bg-black text-green-700 text-xl p-10 rounded-lg font-bold">
            ¿Alguna duda? Rellena el formulario y te contactaremos.
          </p>
        </div>
      </div>
      <div className="container px-5 py-12 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contactanos</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Hazte cliente rellenando el siguiente formulario
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre
            </label>
            <input
              type="Nombre"
              id="name"
              name="name"
              autoComplete="name" // Añadido autocomplete attribute
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="telefono" className="leading-7 text-sm text-gray-600">
              Número de teléfono
            </label>
            <input
              type="number"
              id="telefono"
              name="telefono"
              autoComplete="tel" // Añadido autocomplete attribute
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email" // Añadido autocomplete attribute
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off" // Añadido autocomplete attribute (puedes cambiar a 'message' si prefieres)
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Una vez envíes el formulario, nos pondremos en contacto contigo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
