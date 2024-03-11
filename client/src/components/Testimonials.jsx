import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="text-gray-400 body-font bg-black">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Testimonio 1 */}
          <Fade bottom cascade>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center bg-gray-800 border border-green-700 shadow-md rounded-lg p-4">
                {/* Imagen del testimonio */}
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                />
                {/* Contenido del testimonio */}
                <p className="leading-relaxed">
                  ¡La experiencia de alquilar libros fue increíble! El libro que elegí estaba en perfectas condiciones, y lo mejor es que pude llevarme a casa una joya literaria que no estaba disponible en ninguna otra parte. Definitivamente, recomendaré este servicio a mis amigos.
                </p>
                {/* Estrellas para comentarios */}
                <div className="flex mt-6 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                {/* Nombre y cargo del autor del testimonio */}
                <h2 className="text-gray-300 font-medium title-font tracking-wider text-sm">CLIENTE SATISFECHO</h2>
                <p className="text-gray-400">Amante de los libros</p>
              </div>
            </div>
          </Fade>

          {/* Testimonio 2 */}
          <Fade bottom cascade>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center bg-gray-800 border border-green-700 shadow-md rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/300x300"
                />
                <p className="leading-relaxed">
                  Alquilar libros aquí es como descubrir un tesoro escondido. Encontré un libro fascinante que no estaba disponible en ninguna otra librería. Además, el proceso de alquiler fue sencillo y rápido. ¡Muy recomendado!
                </p>
                <div className="flex mt-6 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h2 className="text-gray-300 font-medium title-font tracking-wider text-sm">GRAN DESCUBRIMIENTO</h2>
                <p className="text-gray-400">Lector entusiasta</p>
              </div>
            </div>
          </Fade>

          {/* Testimonio 3 */}
          <Fade bottom cascade>
            <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center bg-gray-800 border border-green-700 shadow-md rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed">
                  Mi experiencia de alquilar un libro aquí fue excelente. No solo encontré el libro que estaba buscando, sino que también pude llevarme a casa un libro adicional que no pensé que necesitaría. ¡El servicio es maravilloso!
                </p>
                <div className="flex mt-6 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h2 className="text-gray-300 font-medium title-font tracking-wider text-sm">EXCELENTE SERVICIO</h2>
                <p className="text-gray-400">Amante de la lectura</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
