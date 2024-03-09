import React from 'react';

const Price = () => {
  return (
    <div className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
      <div className="container px-4 mx-auto">
        <div className="relative">
          <div className="w-full border-t border-white mb-6"></div>
          <div>
            <div id="title" className="text-center my-10">
              <h1 className="font-bold text-4xl text-white">Tarifas</h1>
              <p className="text-light text-gray-500 text-xl">
                Descubre nuestras opciones de alquiler
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
            >
              <div
                id="plan"
                className="rounded-lg text-center overflow-hidden w-full border border-gray-800 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div id="title" className="w-full py-5 border-b border-gray-800">
                  <h2 className="font-bold text-3xl text-white">Básico</h2>
                  <h3 className="font-normal text-indigo-500 text-xl mt-2">
                    €2<span>,00</span>/película
                  </h3>
                </div>
                <div id="content" className="">
                  <div id="icon" className="my-5">
                    <img
                      src="ruta_del_icono_normal.png"
                      alt="Icono Película Normal"
                      className="h-12 w-12 mx-auto"
                    />
                    <p className="text-gray-500 text-sm pt-2">
                      Películas para un público general
                    </p>
                  </div>
                  <div id="contain" className="leading-8 mb-10 text-lg font-light">
                    <ul>
                      <li>Alquiler por 48 horas</li>
                      <li>Calidad estándar</li>
                      <li>Disponibilidad inmediata</li>
                    </ul>
                    <div id="choose" className="w-full mt-10 px-6">
                      <a
                        href="#"
                        className="w-full block text-black bg-gray-500 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        Elegir
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repite el bloque similar para el plan "Exclusivo" */}
              <div
                id="plan"
                className="rounded-lg text-center overflow-hidden w-full border border-gray-800 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div id="title" className="w-full py-5 border-b border-gray-800">
                  <h2 className="font-bold text-3xl text-white">Exclusivo</h2>
                  <h3 className="font-normal text-indigo-500 text-xl mt-2">
                    €4<span>,00</span>/película
                  </h3>
                </div>
                <div id="content" className="">
                  <div id="icon" className="my-5">
                    <img
                      src="ruta_del_icono_exclusivo.png"
                      alt="Icono Película Exclusiva"
                      className="h-12 w-12 mx-auto"
                    />
                    <p className="text-gray-500 text-sm pt-2">
                      Películas exclusivas y populares
                    </p>
                  </div>
                  <div id="contain" className="leading-8 mb-10 text-lg font-light">
                    <ul>
                      <li>Alquiler por 48 horas</li>
                      <li>Calidad HD</li>
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
              {/* Repite el bloque similar para el plan "VIP" */}
              <div
                id="plan"
                className="rounded-lg text-center overflow-hidden w-full border border-gray-800 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div id="title" className="w-full py-5 border-b border-gray-800">
                  <h2 className="font-bold text-3xl text-white">VIP</h2>
                  <h3 className="font-normal text-indigo-500 text-xl mt-2">
                    €6<span>,00</span>/película
                  </h3>
                </div>
                <div id="content" className="">
                  <div id="icon" className="my-5">
                    <img
                      src="ruta_del_icono_vip.png"
                      alt="Icono Película VIP"
                      className="h-12 w-12 mx-auto"
                    />
                    <p className="text-gray-500 text-sm pt-2">
                      Películas extremadamente exclusivas y de alta calidad
                    </p>
                  </div>
                  <div id="contain" className="leading-8 mb-10 text-lg font-light">
                    <ul>
                      <li>Alquiler por 48 horas</li>
                      <li>Calidad 4K</li>
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
            </div>
          </div>
          <div className="w-full border-t border-white mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Price;
