import React from 'react';
import { Parallax } from 'react-parallax';

const Header = () => {
  return (
    <Parallax bgImage="https://blogs.uninter.edu.mx/ESCAT/wp-content/uploads/2021/10/Venom-simbionte-resena2-2021-2.jpg" strength={400}>
      <div className="relative h-[70vh] md:h-screen"> {/* Ajusta la altura para dispositivos móviles y grandes */}
        <div className="absolute inset-0 bg-opacity-0 bg-black"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-bold text-4xl md:text-5xl lg:w-10/12 text-center ">
            Alquila tus películas favoritas
          </h1>
          <p className="mt-6 text-xl font-bold text-black bg-opacity-80 bg-blue-800 rounded-lg p-4 lg:w-6/12 text-center shadow-md">
            Descubre un mundo de entretenimiento desde la comodidad de tu hogar. 
          </p>
          <div className="mt-10">
            <button type="button" title="Start watching" className="w-40 h-12 px-4 text-center rounded-md border-4 border-red-500 transition bg-blue-600 hover:bg-yellow-400 active:bg-yellow-400 focus:bg-yellow-300">
              <span className="block text-gray-300 font-bold text-lg">
                Ver Películas
              </span>
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Header;
