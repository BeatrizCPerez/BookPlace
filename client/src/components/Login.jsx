import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';  // Importa SweetAlert
import Nav from './Nav';
import Footer from './Footer';


// Nuevo componente para manejar el desplazamiento al cambiar de ruta
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
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso');
        console.log('Token:', data.token);

        // Muestra la alerta de SweetAlert al iniciar sesión
        Swal.fire({
          title: 'Inicio de sesión exitoso',
          text: '¡Has iniciado sesión!',
          icon: 'success',
        });

        // Puedes almacenar el token en el estado del componente o en el localStorage según tus necesidades

        // Redireccionar al usuario después del inicio de sesión
        navigate('/HomeLogin');
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión', error);
    }
  };

  return (
    <>
    <ScrollToTop />
       <section className="relative">
        <video autoPlay muted loop className="w-full h-full object-cover fixed inset-0 z-0">
          <source src="../src/assets/videoLogin.mp4" type="video/mp4" />
          Tu navegador no admite la etiqueta de video.
        </video>
        <Nav />
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-16">
          <div className="relative flex mt-[100px] flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg bg-blueGray-200">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3 z-0">
                <h6 className="text-white text-lg font-bold">Inicia sesión</h6>
              </div>
              <div className="btn-wrapper text-center">
                {/* Botones de inicio de sesión con Google y Github */}
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
              <div className="text-gray-600 text-center mb-3 font-bold">
                <small></small>
              </div>
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
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-0 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
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
                  >
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-blueGray-500">
                    No tienes cuenta?{' '}
                    <Link to="/RegisterPage" className="text-blue-700 font-bold  hover:text-blue-600">
                      Registrate aqui
                    </Link>
                  </p>
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
