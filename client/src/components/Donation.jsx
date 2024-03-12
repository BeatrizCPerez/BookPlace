import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';  // Asegúrate de importar useLocation
import Nav from './Nav';



const Donation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const controls = useAnimation();
  const { handleSubmit, register, setValue, watch } = useForm();

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const onSubmit = (data) => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu donación!',
      text: 'Hemos recibido tu información de donación. ¡Te contactaremos pronto!',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
    <ScrollToTop />
    <Nav />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="max-w-md mx-auto relative"
    >
       
      <video autoPlay muted loop className="w-full h-full object-cover fixed inset-0 z-0 opacity-70">
        <source src="../src/assets/donation.mp4" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>

      <div className="absolute left-0 right-0 mt-20 bg-black bg-opacity-90 flex items-center justify-center">
    
        <div className="text-white text-center p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Formulario de Donación</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  z-10">
            <div className="grid grid-cols-1 gap-4 text-white">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder='Nombre'
                  {...register('name', { required: true })}
                  className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder='Apellido'
                  id="lastName"
                  {...register('lastName', { required: true })}
                  className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder='Teléfono'
                  {...register('phone', { required: true })}
                  className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder='Email'
                  {...register('email', { required: true })}
                  className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="book" className="block text-sm font-medium text-white">
                  Libro
                </label>
                <input
                  type="text"
                  id="book"
                  placeholder='Titulo del libro'
                  {...register('book', { required: true })}
                  className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Opciones de Recogida</label>
                <div className="space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="tienda"
                      {...register('recogida')}
                      className="form-radio"
                    />
                    <span className="ml-2">En tienda</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input
                      type="radio"
                      value="casa"
                      {...register('recogida')}
                      className="form-radio"
                    />
                    <span className="ml-2">A domicilio</span>
                  </label>
                </div>
              </div>

              {watch('recogida') === 'casa' && (
                <div>
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    placeholder='Dirección'
                    {...register('direccion', { required: true })}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-blue-500 text-black"
                  />
                </div>
              )}

              {watch('recogida') === 'casa' && (
                <div>
                  <label htmlFor="fechaRecogida" className="block text-sm font-medium text-gray-700">
                    Fecha de Recogida
                  </label>
                  <input
                    type="date"
                    id="fechaRecogida"
                    {...register('fechaRecogida', { required: true })}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-blue-500 text-black"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
        >
          Subir
        </motion.button>
      )}
    </motion.div>
    </>
  );
};

export default Donation;

