import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Importa SweetAlert
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    try {
      console.log('Datos del formulario:', { firstName, lastName, email, password });

      // Verificar que la contraseña tenga al menos 6 caracteres
      if (password.length < 6) {
        Swal.fire({
          title: 'Error',
          text: 'La contraseña debe tener al menos 6 caracteres.',
          icon: 'error',
        });
        return;
      }

      // Verificar el formato de correo electrónico
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
        // Mostrar alerta de registro exitoso
        Swal.fire({
          title: 'Registro exitoso',
          text: '¡Tu cuenta ha sido creada!',
          icon: 'success',
        }).then(() => {
          // Redirigir al inicio de sesión después del registro exitoso
          // Aquí usamos Link para redirigir en lugar de useHistory
          window.location.href = '/login'; // Cambia '/login' a la ruta real de inicio de sesión
        });
      }, 2000); // Simular 2 segundos de tiempo de carga
    } catch (error) {
      setIsLoading(false);
      console.error('Error al intentar registrar:', error);
    }
  };

  return (
    <>
      <section className="relative">
        <Nav />
        <video autoPlay muted loop className="w-full h-full object-cover fixed inset-0 z-0">
          <source src="https://res.cloudinary.com/djysp2khi/video/upload/v1710603298/yng09oaogupe1lysqugu.mp4" type="video/mp4" />
          Tu navegador no admite la etiqueta de video.
        </video>
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
                    disabled={isLoading} // Deshabilita el botón mientras se está procesando la solicitud
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
