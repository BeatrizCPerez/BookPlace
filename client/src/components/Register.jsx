import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';  
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from '@react-hook/media-query'; 

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const isMobileAndHorizontal = useMediaQuery('(max-width: 768px) and (orientation: landscape)');

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = async () => {
    try {
      // Validations
      if (password.length < 6) {
        Swal.fire({
          title: 'Error',
          text: 'La contraseña debe tener al menos 6 caracteres.',
          icon: 'error',
        });
        return; // Exit early if password is too short
      }

      setIsLoading(true);

      const response = await axios.post('https://back-iax6.onrender.com/api/users/register', {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data.success) {
        setIsLoading(false);
        Swal.fire({
          title: 'Registro exitoso',
          text: '¡Tu cuenta ha sido creada!',
          icon: 'success',
        }).then(() => {
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
        });
      } else {
        setIsLoading(false);
        if (response.data.error === 'Email already registered') {
          Swal.fire({
            title: 'Error',
            text: 'El usuario ya está registrado.',
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al intentar registrarse. Por favor, inténtalo de nuevo más tarde.',
            icon: 'error',
          });
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error al intentar registrar:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al intentar registrarse. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
      });
    }
  };

  return (
    <>
      <section className="relative">
        <Nav />
        <img
          src="https://img.freepik.com/foto-gratis/gran-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29739.jpg?w=826&t=st=1710610681~exp=1710611281~hmac=a9182aaade0001eab120d67dc952bb76d5046bd6df5cd01d3a247826426ada6d"
          alt="Fondo"
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="w-full h- lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex mt-[40px] flex-col  break-words w-full shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg bg-blueGray-200">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3 z-0">
                <h6 className="text-white text-lg font-bold">Crea una cuenta</h6>
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
                <div className="text-center mt-6 text-white">
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
