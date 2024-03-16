import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="text-gray-400 body-font bg-black">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
        
          <Fade bottom cascade>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center bg-gray-800 border border-green-700 shadow-md rounded-lg p-4">
               
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://previews.123rf.com/images/iordani/iordani1601/iordani160100088/50111664-close-up-retrato-de-ruidosamente-riendo-hombre-joven-aislado-en-fondo-blanco-cara-de-tonto-tonto-de.jpg"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '50%' }}
                />
                
                <p className="leading-relaxed">
                  ¡La experiencia de alquilar libros fue increíble! El libro que elegí estaba en perfectas condiciones, y lo mejor es que pude llevarme a casa una joya literaria que no estaba disponible en ninguna otra parte. Definitivamente, recomendaré este servicio a mis amigos.
                </p>
                
                <div className="flex mt-6 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              
                <h2 className="text-gray-300 font-medium title-font tracking-wider text-sm">CLIENTE SATISFECHO</h2>
                <p className="text-gray-400">Amante de los libros</p>
              </div>
            </div>
          </Fade>

      
          <Fade bottom cascade>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center bg-gray-800 border border-green-700 shadow-md rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://st1.uvnimg.com/dims4/default/600228f/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fimj%2Fvivirsalud%2FL%2FLas-caracteristicas-de-los-diferentes-tipos-de-rostros-2.jpg"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '50%' }}
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

          <Fade bottom cascade>
            <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center bg-gray-800 border border-green-700 shadow-md rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn3.dorsia.es/wp-content/uploads/2023/04/28223401/Florence-Colgate-02.jpg"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '50%' }}
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
