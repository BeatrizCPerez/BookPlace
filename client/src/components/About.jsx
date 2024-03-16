import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section id='about' className="relative bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto">
       
        <div className="border-t-4 border-gray-500 my-8 w-full"></div>

        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-6/12 lg:w-5/12 px-6 md:px-4 mx-auto">
            <Fade bottom>
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                <img
                  alt="Books"
                  src="https://www.ecured.cu/images/8/81/Libro_abierto.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-6 mb-4">
                  <h4 className="text-2xl font-bold text-gray-700">
                    ¡Bienvenido a nuestro servicio de prestamos de Libros y Recolección Ecológica de Libros sin Uso!
                  </h4>
                  <p className="text-lg font-light mt-2 text-gray-800">
                    Disfruta de los libros por solo 10€ al mes durante 15 días. ¡Suscríbete y  disfruta del prestamo ilimitado de libros! Contribuye al medio ambiente donando libros no utilizados.
                  </p>
                </blockquote>
              </div>
            </Fade>
          </div>

          <div className="w-full md:w-6/12 lg:w-7/12 px-4">
            <div className="flex flex-wrap">
              <Zoom>
                <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
                  <div className="relative flex flex-col mt-4">
                    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 bg-teal-500 rounded-full">
                      <i className="fas fa-book text-white"></i>
                    </div>
                    <h6 className="text-xl mb-2 font-semibold">Prácticas Ecológicas</h6>
                    <p className="text-gray-600">
                      Nuestro servicio promueve la sostenibilidad ambiental mediante la recolección y reciclaje de libros no utilizados.
                    </p>
                  </div>
                </div>
              </Zoom>

              <Zoom>
                <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
                  <div className="relative flex flex-col mt-4">
                    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 bg-teal-500 rounded-full">
                      <i className="fas fa-book-open text-white"></i>
                    </div>
                    <h6 className="text-xl mb-2 font-semibold">Prestamo de Libros Accesible</h6>
                    <p className="text-gray-600">
                      Puedes reservar cualquier libro de nuestra colección por solo 10€ al mes durante un periodo de 15 días.
                    </p>
                  </div>
                </div>
              </Zoom>

              <Zoom>
                <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
                  <div className="relative flex flex-col mt-4">
                    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 bg-teal-500 rounded-full">
                      <i className="fas fa-gift text-white"></i>
                    </div>
                    <h6 className="text-xl mb-2 font-semibold">Beneficios de Suscripción</h6>
                    <p className="text-gray-600">
                      Suscríbete por €10 al mes y disfruta de alquiler ilimitado de libros, ¡ayudándote a ahorrar más y leer más!
                    </p>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-gray-500 my-8 "></div>

        <div className=" md:w-5/12 mx-auto">
          <Fade bottom>
            <div className="mt-8 text-center">
              <h4 className="text-2xl font-bold text-gray-700 mb-4">Contribuye al Medio Ambiente</h4>
              <p className="text-lg text-gray-800">
                ¡Ayúdanos a crear un impacto positivo! Dona tus libros no utilizados y nosotros nos encargaremos de recogerlos de forma gratuita. Tu pequeño gesto puede marcar la diferencia.
              </p>
            </div>
          </Fade>

          <Fade bottom>
          <div className="flex justify-center  mt-8  md:w-auto py-3  text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600">
          <Link to='./Donationpage' className="block w-20 text-white font-semibold">
  Donar
</Link>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
