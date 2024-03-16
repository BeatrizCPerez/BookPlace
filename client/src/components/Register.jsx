import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';  
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null); 
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {

    if (videoRef.current && isDesktop) {
      videoRef.current.play();
    }
  }, [isDesktop]);

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

  const handleRegister = async () => {
    try {
      console.log('Datos del formulario:', { firstName, lastName, email, password });

      if (password.length < 6) {
        Swal.fire({
          title: 'Error',
          text: 'La contraseña debe tener al menos 6 caracteres.',
          icon: 'error',
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          title: 'Error',
          text: 'Por favor, introduce un correo electrónico válido.',
          icon: 'error',
        });
        return;
      }

      setIsLoading(true);

      // Simular registro exitoso después de 2 segundos (para demostración)
      setTimeout(() => {
        setIsLoading(false);
        Swal.fire({
          title: 'Registro exitoso',
          text: '¡Tu cuenta ha sido creada!',
          icon: 'success',
        }).then(() => {
          // Redireccionar a la página de inicio de sesión utilizando Link de React Router
          return <Link to="/Loginpage" />;
        });
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error('Error al intentar registrar:', error);
    }
  };

  return (
    <>
      <section className="relative">
        <Nav />
        {isDesktop ? (
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
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex mt-[40px] flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg bg-blueGray-200">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3 z-0">
                <h6 className="text-white text-sm font-bold">Crea una cuenta</h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-white text-center mb-3 font-bold">
                <small>Regístrate con tus datos</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="firstName">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nombre"
                    autoComplete="given-name"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="lastName">Apellidos</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Apellidos"
                    autoComplete="family-name"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="password">Contraseña</label>
                  <input
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Contraseña"
                    autoComplete="new-password"
                  />
                </div>
                <div className="text-center mt-6 bg-black hover:bg-blue-800">
                  <button
                    onClick={handleRegister}
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    disabled={isLoading} 
                  >
                    {isLoading ? 'Registrando...' : 'Registrarse'}
                  </button>
                </div>
                <div className="text-center mt-6">
                  ¿Ya tienes una cuenta? <Link to="/Loginpage" className="font-bold text-blue-500">Inicia sesión</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
