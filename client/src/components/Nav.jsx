import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      setShowMobileNav(screenWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`w-screen h-fit overflow-hidden fixed z-50 bg-transparent border-b-2 border-white`}>
      <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
        <Link to="/">
          <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
            VideoStore
          </button>
        </Link>
        <div className="hidden lg:flex gap-8 uppercase tracking-wider cursor-pointer text-lg items-center">
        <span className="group">
            Services
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
          <span className="group">
            About
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
          <Link to="/LoginPage">
            <span className="group bg-green-500 inline-block p-2 rounded-full hover:bg-blue-300">
              LogIn
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span>
          </Link>
          <Link to="/Registerpage">
            <span className="group inline-block p-2 rounded-full border border-white hover:border-green-500 hover:text-green-500">
              Register
            </span>
          </Link>
        </div>
        <div
          id="hamburger"
          className="lg:hidden flex items-center text-xl z-50"
          onClick={toggleMobileNav}
        >
          {showMobileNav ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        {showMobileNav && (
          <div
            id="mobileNav"
            className="lg:hidden fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] ease-in-out duration-500 cursor-pointer z-50"
            style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <span>Servicios</span>
            <span>Peliculas</span>
            <Link to='/LoginPage'><span className='text-green-500 text-2xl'>LogIn</span></Link>
            <Link to='/RegisterPage'><span className='text-white text-2xl'>Register</span></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
