import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [isSocio, setIsSocio] = useState(false);
  const [isHacerseSocio, setIsHacerseSocio] = useState(false);

  const handleSocioChange = (e) => {
    setIsSocio(e.target.value === 'si');
    setIsHacerseSocio(false); // Reiniciar el estado de hacerse socio al cambiar la respuesta de socio
  };

  const handleHacerseSocioChange = (e) => {
    setIsHacerseSocio(e.target.value === 'si');
  };

  const handleSubmit = () => {
    Swal.fire('¡Solicitud enviada!', 'Su solicitud ha sido enviada correctamente.', 'success');
   
  };

  return (
    <section className="text-gray-600 body-font bg-black relative flex">
      <div className="w-1/2 relative h-64 ml-20 bg-black flex justify-center">
        <div className="bg-black p-2 text-center mt-11 text-gray-300">
          <p>
            <ol className='text-xl text-left'>
              <li className='p-2'>1. Rellena el formulario.</li>
              <li className='p-2'>  Si quieres <span className='text-green-500'>información</span> solo rellena los datos de contacto, te contactaremos a la mayor brevedad posible.</li>
              <li className='p-2'>2. Si deseas alquilar, completa el formulario.</li>
              <li className='p-2'>3. Una vez envíes el formulario te informaremos si está disponible tu película.</li>
              <li className='p-2'>4. Si tu película está disponible, hacemos la reserva y abonarás el precio al recogerla.</li>
              <li className='p-2'>5. Recuerda, tienes mínimo 48h para disfrutarla.</li>
            </ol>
          </p>
          <div className='mt-10 ml-3'>
            <iframe
              title="map"
              width="70%"
              height="70%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Puerta%20de%20Alcalá,%20Madrid&ie=UTF8&t=&z=16&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-1/3 bg-gray-800 p-4 ml-auto mr-auto flex flex-col shadow-md">
        <p className="block bg-green-500 text-white text-sm p-2 rounded-lg font-bold mb-4">
          ¿Alguna duda? Rellena el formulario y te contactaremos.
        </p>
        <h2 className="text-gray-100 text-md mb-1 font-medium title-font">Contactanos</h2>
        <p className="leading-relaxed mb-3 text-gray-300 text-sm">
          ¿Quieres alquilar una película? Rellena el siguiente formulario. Si solo deseas información, completa tus datos.
        </p>

        <div className="relative mb-2">
          <label htmlFor="name" className="leading-7 text-xs text-gray-300">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-2">
          <label htmlFor="eresSocio" className="leading-7 text-xs text-gray-300">
            ¿Eres socio?
          </label>
          <select
            id="eresSocio"
            name="eresSocio"
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleSocioChange}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {isSocio && (
          <>
            <div className="relative mb-2">
              <label htmlFor="numeroSocio" className="leading-7 text-xs text-gray-300">
                Número de socio
              </label>
              <input
                type="text"
                id="numeroSocio"
                name="numeroSocio"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-2">
              <label htmlFor="peliculaDeseada" className="leading-7 text-xs text-gray-300">
                ¿Qué película desea alquilar?
                <span className="block text-xs text-gray-400 mt-1">En caso de querer información, dejar en blanco.</span>
              </label>
              <input
                type="text"
                id="peliculaDeseada"
                name="peliculaDeseada"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </>
        )}

        {isSocio ? (
          <div className="relative mb-2">
            <label htmlFor="fechaAlquiler" className="leading-7 text-xs text-gray-300">
              Fecha de alquiler
            </label>
            <input
              type="date"
              id="fechaAlquiler"
              name="fechaAlquiler"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
        ) : (
          
          <div className="relative mb-2">
            <div className="relative mb-2">
          <label htmlFor="name" className="leading-7 text-xs text-gray-300">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="Email"
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-2">
          <label htmlFor="eresSocio" className="leading-7 text-xs text-gray-300">
            ¿Quieres ser socio?
          </label>
          <select
            id="eresSocio"
            name="eresSocio"
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleSocioChange}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
            <label htmlFor="comentario" className="leading-7 text-xs text-gray-300">
              Comentario
            </label>
            <textarea
              id="comentario"
              name="comentario"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        )}

        <button
          className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-sm"
          onClick={handleSubmit}
        >
          Enviar
        </button>

        <p className="text-xs text-gray-300 mt-2">
          Una vez envíes el formulario, nos pondremos en contacto contigo.
        </p>
      </div>
    </section>
  );
};

export default Contact;
