import React, { useState, useEffect, useRef } from 'react';
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
  const videoRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const isMobileAndHorizontal = useMediaQuery('(max-width: 768px) and (orientation: landscape)');

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
    <div id='header' className="relative" style={{ height: isDesktop ? '90vh' : '90vh', overflow: 'hidden' }}>
      <ScrollToTop />
      {isDesktop && !isMobileAndHorizontal ? (
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
      ) : (
        <img
          src="https://okdiario.com/img/2022/11/22/libros-4-635x358.jpg"
          alt="Fondo"
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
      )}
      <div className="py-12 md:py-16 lg:py-20 relative" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="container m-auto px-6 space-y-8 text-white md:px-12 lg:px-20 relative z-10">
          <Fade bottom cascade>
            <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
              <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 className="text-4xl text-gray-300 font-bold md:text-5xl relative z-20">
                  <span className="relative mt-5 inline-block">
                    Reserva ya tu libro favorito!!
                  </span>
                </h1>
                <p className='text-xl relative z-20'>
                  BookPlace el rincon donde podrás disfrutar de ediciones exclusivas. Suscribete!!
                </p>
                <p className="text-lg relative z-20">
                  Únete a nuestra comunidad de lectores ubicados en Madrid.
                </p>
                <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:mb-5 md:gap-6 md:justify-end">
                  <button
                    type="button"
                    title="Reservar ahora"
                    className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                    onClick={scrollToContact}
                  >
                    <span className="block text-white font-semibold">Reservar ahora</span>
                  </button>
                  <button
                    type="button"
                    title="Sobre nosotr@s"
                    className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                    onClick={scrollToAbout}
                  >
                    <span className="block text-white font-semibold">Sobre nosotr@s</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12 relative z-20">
                <div className="col-span-2 row-span-4">
                  <img
                    src="https://th.bing.com/th/id/OIP.yp1w7G2fEAaLbduCQOBXawHaE7?w=800&h=533&rs=1&pid=ImgDetMain"
                    className="rounded-full"
                    width="640"
                    height="960"
                    alt="Libro 1"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-2 row-span-2">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/15/87/14/360_F_315871469_H0SM5Js5QGOGPQp319qEiR5jM7mZhfqp.jpg"
                    className="w-full h-full object-cover object-top rounded-xl"
                    width="640"
                    height="640"
                    alt="Libro 2"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-3 row-span-3">
                  <img
                    src="https://lapiedradesisifo.com/wp-content/uploads/2016/07/student-with-an-ipad-itunes-u-100609219-orig.jpg"
                    className="w-full h-full object-cover object-top rounded-xl"
                    width="640"
                    height="427"
                    alt="Libro 3"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
