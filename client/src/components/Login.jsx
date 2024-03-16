import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nav from './Nav';
import Footer from './Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      // Simular inicio de sesión exitoso después de 2 segundos (para demostración)
      setTimeout(() => {
        setIsLoading(false);
        // Redireccionar a la página de inicio después de iniciar sesión
        navigate('/HomeLogin');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error('Error al intentar iniciar sesión', error);
      // Mostrar mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al iniciar sesión. Por favor, intenta de nuevo más tarde.',
        icon: 'error',
      });
    }
  };

  const fillFields = () => {
    const userEmail = 'usuario@example.com';
    const userPassword = 'contraseña';

    setEmail(userEmail);
    setPassword(userPassword);
  };

  return (
    <>
      <ScrollToTop />
      <section className="relative max-w-auto">
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
        <Nav />
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-16 relative z-10">
        <div className="relative flex mt-[10px] flex-col  pb-5 break-words w-full shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg bg-blueGray-200">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3 z-0">
                <h6 className="text-white text-lg font-bold">Inicia sesión</h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-6 lg:px-10  mt-11  pt-0">
              <form>
                <div className="relative w-full mb-4">
                  <label className="block uppercase text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="relative w-full mb-4">
                  <label className="block uppercase text-white text-sm font-bold mb-2" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-0 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Contraseña"
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer" htmlFor="customCheckLogin">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-white">Remember me</span>
                  </label>
                </div>
                <div className="text-center mt-6 bg-blue-700 hover:bg-blue-800">
                  <button
                    onClick={handleLogin}
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                  </button>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-white">
                    No tienes cuenta?{' '}
                    <Link to="/RegisterPage" className="text-blue-700 font-bold  hover:text-blue-600">
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
                <div className="text-center mt-6">
                  <button
                    onClick={fillFields}
                    className="bg-blue-700 hover:bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Rellenar campos.
                  </button>
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

export default Login;

