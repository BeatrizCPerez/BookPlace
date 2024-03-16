import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Nav from './Nav';

const Donation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    axios.post('https://back-iax6.onrender.com/api/enviar-formulario', data)
      .then(() => {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu donación!',
          text: 'Hemos recibido tu información de donación. ¡Te contactaremos pronto!',
        });
        // Restablecer los valores del formulario
        setValue('name', '');
        setValue('lastName', '');
        setValue('phone', '');
        setValue('email', '');
        setValue('recogida', 'tienda');
        setValue('direccion', '');
        setValue('fechaRecogida', '');
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('Error al enviar el formulario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
        });
      });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
       <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="https://res.cloudinary.com/djysp2khi/video/upload/v1710603298/yng09oaogupe1lysqugu.mp4" type="video/mp4" />
        </video>

        <div className="absolute left-0 right-0 mt-20   bg-black bg-opacity-90 flex items-center justify-center">
          <div className="text-white text-center p-4 rounded-md w-full max-w-sm relative">
            {isSubmitting && (
              <div className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2">
                Enviando formulario...
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Formulario de Donación</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 text-white">
                <div>
                  <label htmlFor="name" className="leading-7 text-xs text-gray-300">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    required 
                    {...register('name', { required: true })}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white">Apellido</label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    id="lastName"
                    {...register('lastName', { required: true })}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white">Número de Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    required 
                    placeholder="Teléfono"
                    {...register('phone', { required: true })}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="leading-7 text-xs text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required 
                    placeholder="Email"
                    {...register('email', { required: true , pattern: /^\S+@\S+$/i})}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="leading-7 text-xs text-gray-300">
                    Opción de entrega <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('recogida')}
                    className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-green-500 text-blue-700"
                  >
                    <option value="tienda" className='text-blue-700'>En tienda</option>
                    <option value="casa" className='text-blue-700'>A domicilio</option>
                  </select>
                </div>

                {watch('recogida') === 'casa' && (
                  <>
                    <div>
                      <label htmlFor="direccion" className="block text-sm font-medium text-white">Dirección</label>
                      <input
                        type="text"
                        id="direccion"
                        placeholder="Dirección"
                        required 
                        {...register('direccion', { required: true })}
                        className="mt-1 p-2 w-full border rounded-md bg-transparent focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="fechaRecogida" className="block text-sm font-medium text-">Fecha de Recogida</label>
                      <input
                        type="date"
                        id="fechaRecogida"
                        {...register('fechaRecogida', { required: true })}
                        className="mt-1 p-2 w-full border rounded-md bg-transparent  focus:outline-none focus:border-blue-500 text-white"
                        min={new Date().toISOString().split('T')[0]} // No permitir fechas anteriores a la actual
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                      />
                    </div>
                  </>
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
