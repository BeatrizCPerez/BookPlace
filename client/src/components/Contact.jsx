import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    telefono: '',
    email: '',
    eresSocio: '',
    libroDeseado: '',
    fechaAlquiler: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    axios.post('http://localhost:3000/api/enviar-formulario-contacto', formData)
      .then(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          telefono: '',
          email: '',
          eresSocio: '',
          libroDeseado: '',
          fechaAlquiler: '',
        });
        Swal.fire('¡Mensaje enviado!', 'Tu mensaje ha sido enviado correctamente.', 'success');
      })
      .catch((error) => {
        console.error('Error al enviar el formulario de contacto:', error);
        setIsSubmitting(false);
        Swal.fire('Error', 'Hubo un error al enviar el formulario de contacto. Por favor, inténtalo de nuevo más tarde.', 'error');
      });
  };

  return (
    <section id="contact" className="border-t-8 border-green-500 bg-gray-100 text-gray-800 body-font relative flex flex-col lg:flex-row md:flex-row">
      <div className="md:w-1/2 lg:w-1/2 bg-gray-100 flex justify-center">
        <Fade>
          <div className="bg-gray-100 p-4 text-center mt-11 text-gray-900">
            <h2 className='xl:text-xl xl:ml-14 sm:text-sm font-semibold mt-10 p-2 text-left'>
              Contactanos
              <p className='p-2'>1. Rellena el formulario.</p>
              <p className='p-2'> Si quieres <span className='text-green-500'>información</span> solo rellena los datos de contacto, te contactaremos a la mayor brevedad posible.</p>
              <p className='p-2'>2. Si deseas alquilar, completa el formulario.</p>
              <p className='p-2'>3. Una vez envíes el formulario te informaremos si está disponible tu libro.</p>
              <p className='p-2'>4. Si tu libro está disponible, hacemos la reserva y abonarás el precio al recogerlo.</p>
              <p className='p-2'>5. Recuerda, tienes mínimo 48h para disfrutarlo.</p>
            </h2>

            <div className="w-full lg:w-2/4 bg-gray-100">
              <div className='hidden lg:block mt-10 ml-16'>
                <iframe
                  title="map"
                  width="100%"
                  height="80%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Puerta%20de%20Alcalá,%20Madrid&ie=UTF8&t=&z=16&iwloc=B&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="w-auto h-auto xl:h-2/6 xl:w-2/6 bg-gray-800 p-4 ml-auto mr-auto mt-20 flex flex-col shadow-md">
        <p className="border-t-8 border-green-500 block bg-green-500 text-white text-sm p-2 rounded-lg font-bold mb-4">
          ¿Alguna duda? Rellena el formulario y te contactaremos.
        </p>
        <h2 className="text-gray-100 text-md mb-1 font-medium title-font">Contactanos</h2>
        <p className="leading-relaxed mb-3 text-gray-300 text-sm">
          ¿Quieres alquilar un libro? Rellena el siguiente formulario. Si solo deseas información, completa tus datos.
        </p>

        <div className="relative mb-2">
          <label htmlFor="name" className="leading-7 text-xs text-gray-300">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            required // Hacer el campo obligatorio
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
          />
        </div>
        <div className="relative mb-2">
          <label htmlFor="telefono" className="leading-7 text-xs text-gray-300">
            Número de teléfono
          </label>
          <input
            type="text" // Permitir cualquier entrada de texto
            id="telefono"
            name="telefono"
            autoComplete="tel"
            value={formData.telefono}
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
          />
        </div>
        <div className="relative mb-2">
          <label htmlFor="email" className="leading-7 text-xs text-gray-300">
            Email <span className="text-red-500">*</span>
          </label>
          <input
  type="email"
  id="email"
  name="email"
  autoComplete="email"
  value={formData.email}
  required
  pattern= "/^\S+@\S+$/i"
  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
  onChange={handleChange}
/>
        </div>
        <div className="relative mb-2">
        <label htmlFor="eresSocio" className="leading-7 text-xs text-gray-300">
            ¿Eres Socio? <span className="text-red-500">*</span>
          </label>
          <select
          required
            id="eresSocio"
            name="eresSocio"
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
            
          </select>
        </div>

        {formData.eresSocio === 'si' && (
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
                onChange={handleChange}
              />
            </div>

            <div className="relative mb-2">
              <label htmlFor="fechaAlquiler" className="leading-7 text-xs text-gray-300">
                Fecha de alquiler
              </label>
              <input
                type="date"
                id="fechaAlquiler"
                name="fechaAlquiler"
                min={new Date().toISOString().split('T')[0]} // No permitir fechas anteriores a la actual
                value={formData.fechaAlquiler}
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div className="relative mb-2">
          <label htmlFor="libroDeseada" className="leading-7 text-xs text-gray-300">
            LIBRO que deseas reservar
            <span className="block text-xs text-gray-400 mt-1">En caso de querer información, dejar en blanco.</span>
          </label>
          <input
            type="text"
            id="libroDeseado"
            name="libroDeseado"
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-xs outline-none text-gray-100 py-1 px-2 leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
          />
        </div>

        <Fade>
          <button
            className={`text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-sm ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </Fade>

        <p className="text-xs text-gray-300 mt-2">
          Una vez envíes el formulario, nos pondremos en contacto contigo.
        </p>
      </div>
    </section>
  );
};

export default Contact;
