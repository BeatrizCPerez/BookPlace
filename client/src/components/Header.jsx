import React from 'react';
import { Parallax } from 'react-parallax';

const Header = () => {
  return (
    <Parallax bgImage="https://blogs.uninter.edu.mx/ESCAT/wp-content/uploads/2021/10/Venom-simbionte-resena2-2021-2.jpg" strength={400}>
      <div className="relative h-[70vh] md:h-screen"> {/* Ajusta la altura para dispositivos móviles y grandes */}
        <div className="absolute inset-0 bg-opacity-0 bg-black"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-center shadow-lg">
            Regístrate y visualiza tu película favorita
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center shadow-lg">
            Inicia sesión y disfruta
          </h1>
        </div>
      </div>
    </Parallax>
  );
}

export default Header;
