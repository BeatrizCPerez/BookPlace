import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert
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
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true); // Activa el estado de carga

    try {
      const response = await fetch('https://back-iax6.onrender.com/api/users/login', {
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
        // Si la respuesta no está bien (response.ok === false)
        const errorData = await response.json();
        console.error('Usuario no registrado:', errorData.message);

        // Muestra una notificación si el usuario no existe
        if (response.status === 401) {
          Swal.fire({
            title: 'Usuario no registrado',
            text: errorData.message,
            icon: 'error',
          });
        }
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión', error);
    } finally {
      setIsLoading(false); // Desactiva el estado de carga
    }
  };

  const fillFields = () => {
    // Aquí puedes definir los valores que quieres que se coloquen en los campos de correo electrónico y contraseña
    const userEmail = 'usuario@example.com';
    const userPassword = 'contraseña';

    setEmail(userEmail);
    setPassword(userPassword);
  };

  return (
    <>
      <ScrollToTop />
      <section className="relative">
      <video autoPlay muted loop className="w-full h-full object-cover fixed inset-0 z-0">
        <source src="https://res.cloudinary.com/djysp2khi/video/upload/v1710603298/yng09oaogupe1lysqugu.mp4" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
        <Nav />
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-16">
          <div className="relative flex mt-[20px] flex-col min-w-0 break-words w-full mb-2 shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg bg-blueGray-200">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3 z-0">
                <h6 className="text-white text-lg font-bold">Inicia sesión</h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
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
                    disabled={isLoading} // Desactiva el botón mientras se está cargando
                  >
                    {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
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
                {/* Botón para rellenar los campos */}
                <div className="text-center mt-6">
                  <button
                    onClick={fillFields}
                    className="bg-blue-700 hover:bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Rellenar campos
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
