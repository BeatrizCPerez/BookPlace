import React from 'react';
import { Zoom } from 'react-reveal';


const Price = () => {
  return (
    <div className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
      <div className="container px-4 mx-auto">
        <div className="relative">
          <div className="w-full border-t border-white mb-6"></div>
          <Zoom>
            <div>
              <div id="subscription" className="text-center my-6">
                <h2 className="font-bold text-4xl text-white">Tarifas</h2>

                <p className="text-white text-xl">
                  <span className='text-green-500 font-bold'>¡Suscríbete por €10 al mes</span> y disfruta de acceso a 10 libros de nuestra colección mensual!
                </p>
              </div>
              <div id="title" className="text-center my-10">
                <p className="text-light text-gray-500 text-xl">
                  Descubre nuestras opciones de alquiler de libros
                </p>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
              >
                <Zoom>
                  <div
                    id="plan"
                    className="rounded-lg text-center overflow-hidden w-full border border-gray-800 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                  >
                    <div id="title" className="w-full py-5 border-b border-gray-800">
                      <h2 className="font-bold text-3xl text-white">Básico</h2>
                      <h3 className="font-normal text-blue-500 text-xl mt-2">
                        €2<span>,00</span>/libro
                      </h3>
                    </div>
                    <div id="content" className="">
                      <div id="icon" className="my-5">
                        <img
                          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/book_120256.png"
                          alt="Icono Libro Normal"
                          className="h-12 w-12 bg-white rounded-full mx-auto"
                        />
                        <p className="text-gray-300 text-xl pt-2">
                          Libros para un público general
                        </p>
                      </div>
                      <div id="contain" className="leading-8 mb-10 text-lg font-light">
                        <ul>
                          <li>Alquiler por 48 horas</li>
                          <li>Versión estándar</li>
                          <li>Disponibilidad inmediata</li>
                        </ul>
                        <div id="choose" className="w-full mt-10 px-6">
                          <a
                            href="#"
                            className="w-full block text-black bg-gray-700 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                          >
                            Elegir
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div
                    id="plan"
                    className="rounded-lg text-center overflow-hidden w-full border border-gray-800 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                  >
                    {/* Contenido del Plan Exclusivo */}
                    <div id="title" className="w-full py-5 border-b border-gray-800">
                      <h2 className="font-bold text-3xl text-white">Exclusivo</h2>
                      <h3 className="font-normal text-blue-500 text-xl mt-2">
                        €4<span>,00</span>/libro
                      </h3>
                    </div>
                    <div id="content" className="">
                      <div id="icon" className="my-5">
                        <img
                          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/book_120256.png"
                          alt="Icono Libro Exclusivo"
                          className="h-12 w-12 bg-white rounded-full mx-auto"
                        />
                        <p className="text-gray-300 text-xl pt-2">
                          Libros exclusivos y populares
                        </p>
                      </div>
                      <div id="contain" className="leading-8 mb-10 text-lg font-light">
                        <ul>
                          <li>Alquiler a partir de 48 horas</li>
                          <li>Versión HD</li>
                          <li>Acceso a contenido exclusivo</li>
                        </ul>
                        <div id="choose" className="w-full mt-10 px-6">
                          <a
                            href="#"
                            className="w-full block text-black bg-blue-700 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                          >
                            Elegir
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div
                    id="plan"
                    className="rounded-lg text-center overflow-hidden w-full border border-gray-800 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                  >
                    {/* Contenido del Plan VIP */}
                    <div id="title" className="w-full py-5 border-b border-gray-800">
                      <h2 className="font-bold text-3xl text-white">VIP</h2>
                      <h3 className="font-normal text-blue-500 text-xl mt-2">
                        €6<span>,00</span>/libro
                      </h3>
                    </div>
                    <div id="content" className="">
                      <div id="icon" className="my-5">
                        <img
                          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/book_120256.png"
                          alt="Icono Libro VIP"
                          className="h-12 w-12 bg-white rounded-full mx-auto"
                        />
                        <p className="text-gray-300 text-xl pt-2">
                          Libros extremadamente exclusivos
                        </p>
                      </div>
                      <div id="contain" className="leading-8 mb-10 text-lg font-light">
                        <ul>
                          <li>Alquiler a partir de 48 horas</li>
                          <li>Versión 4K</li>
                          <li>Acceso a estrenos exclusivos</li>
                        </ul>
                        <div id="choose" className="w-full mt-10 px-6">
                          <a
                            href="#"
                            className="w-full block text-black bg-yellow-700 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                          >
                            Elegir
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </Zoom>
          <div className="w-full border-t border-white mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Price;

