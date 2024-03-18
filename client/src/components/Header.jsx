import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from '@react-hook/media-query';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isLandscape = useMediaQuery('(orientation: landscape)');

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='header' className="relative" style={{ height: '100vh', overflow: 'hidden' }}>
      <ScrollToTop />
      <img
        src="https://img.freepik.com/foto-gratis/gran-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29739.jpg?w=826&t=st=1710610681~exp=1710611281~hmac=a9182aaade0001eab120d67dc952bb76d5046bd6df5cd01d3a247826426ada6d"
        alt="Fondo"
        className="absolute w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: -1 }}></div>
      <div className="py-12 md:py-16 lg:py-20 relative z-10">
        <div className="container m-auto px-6 space-y-8 text-white md:px-12 lg:px-20">
          <Fade bottom cascade>
            <div className={`justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16 ${isMobile && isLandscape ? 'flex-col' : ''}`}>
              <div className="mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 className="text-4xl text-gray-300 font-bold md:text-5xl">
                  <span className="relative mt-5 inline-block">
                    Reserva ya tu libro favorito!!
                  </span>
                </h1>
                <p className='text-xl'>
                  BookPlace el rincon donde podrás disfrutar de ediciones exclusivas. Suscribete!!
                </p>
                <p className="text-lg mb-5">
                  Únete a nuestra comunidad de lectores ubicados en Madrid.
                </p>
                <div className={`flex flex-row-reverse justify-center  mt-5 gap-4 md:gap-6 md:justify-end ${isMobile && isLandscape ? 'mb-6' : ''}`}>
                  <button
                    type="button"
                    title="Reservar ahora"
                    className="py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600"
                    onClick={scrollToContact}
                  >
                    <span className="text-white font-semibold">Reservar ahora</span>
                  </button>
                  <button
                    type="button"
                    title="Sobre nosotr@s"
                    className="py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600"
                    onClick={scrollToAbout}
                  >
                    <span className="text-white font-semibold">Sobre nosotr@s</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:w-6/12 lg:w-6/12 justify-center">
                <div className='mt-10'>
                  <img
                    src="https://t3.ftcdn.net/jpg/03/15/87/14/360_F_315871469_H0SM5Js5QGOGPQp319qEiR5jM7mZhfqp.jpg"
                    className="w-full object-cover rounded-xl"
                    alt="Libro 2"
                  />
                </div>
                <div  className='mt-10'>
                  <img
                    src="https://estaticos-cdn.prensaiberica.es/clip/6fe3113d-af11-41bd-84ac-9340c4ee95f0_16-9-discover-aspect-ratio_default_0.webp"
                    className="w-full object-cover rounded-xl"
                    alt="Libro 1"
                  />
                </div>
                {!isMobile && (
                  <>
                    <div className="mb-10">
                      <img
                        src="https://th.bing.com/th/id/OIP.yp1w7G2fEAaLbduCQOBXawHaE7?w=800&h=533&rs=1&pid=ImgDetMain"
                        className="w-full object-cover rounded-xl"
                        alt="Libro 1"
                      />
                    </div>
                    <div className="mb-10">
                      <img
                        src="https://img.freepik.com/foto-gratis/cerca-adultos-jovenes-disfrutando-lectura_23-2149134387.jpg?w=740&t=st=1710767966~exp=1710768566~hmac=3715ddc5e78f3636c2f1efb86d1c1c4b1592cdeaaebfed6a80396cd8d07a907f"
                        className="w-full object-cover rounded-xl"
                        alt="Libro 1"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
