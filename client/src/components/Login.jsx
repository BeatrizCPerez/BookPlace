import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { useMediaQuery } from '@react-hook/media-query'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('https://back-iax6.onrender.com/api/users/login', { email, password });
    
      if (response.data.success) {
        navigate('/HomeLogin');
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Credenciales inválidas. Por favor, inténtalo de nuevo.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión', error);
     
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
      });
    } finally {
      setIsLoading(false);
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
      <section className="relative max-w-auto">
        <img
          src="https://img.freepik.com/foto-gratis/gran-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29739.jpg?w=826&t=st=1710610681~exp=1710611281~hmac=a9182aaade0001eab120d67dc952bb76d5046bd6df5cd01d3a247826426ada6d"
          alt="Fondo"
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
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
