import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-30 p-4  fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          BookStore
        </Link>

        <button
          className="lg:hidden md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        <div className="hidden md:flex space-x-4">
          <Link to="/Loginpage" className="text-white text-xl hover:text-green-500">
            Iniciar sesión
          </Link>
          <Link to="/Registerpage" className="text-white text-xl hover:text-blue-500">
            Registrarse
          </Link>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden md:hidden absolute top-full left-0 right-0 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-md shadow-md">
            {/* Contenido del menú desplegable */}
            <Link to="/Loginpage" className="text-green-500 text-xl w-25 block py-2 hover:text-gray-500">
              Iniciar sesión
            </Link>
            <Link to="/Registerpage" className="text-blue-600 text-xl block py-2  w-20 hover:text-green-500">
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
