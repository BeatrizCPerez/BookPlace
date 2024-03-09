import React, { useState, useEffect } from 'react';

const List = () => {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(4);
  const [totalMovies, setTotalMovies] = useState(0);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/videos');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setMovies(data.data);
        setTotalMovies(data.data.length);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Error al obtener los datos. Por favor, intenta nuevamente más tarde.');
      }
    };

    fetchMovies();
  }, []);

  const handleSeeMore = () => {
    const newVisibleMovies = visibleMovies + 4;
    setVisibleMovies(Math.min(newVisibleMovies, totalMovies));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black">
      <div
        className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8"
        style={{
          background: `url("your-background-image-url.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-white">Movies</h2>
          <div className="hidden sm:block">
            <a href="#" className="text-sm font-semibold text-teal-600 hover:text-cyan-500">
              Categories
            </a>
          </div>
          <div className="sm:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden">
            <a href="#" className="block text-sm font-semibold text-teal-600 hover:text-cyan-500 mt-2">
              Login
            </a>
            <a href="#" className="block text-sm font-semibold text-teal-600 hover:text-cyan-500 mt-2">
              Categories
            </a>
          </div>
        )}

        {error && <div>Error: {error}</div>}

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {movies.slice(0, visibleMovies).map((movie) => (
                <ProductCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
        </div>

        {visibleMovies < totalMovies && (
          <div className="mt-12 flex px-4 justify-center">
            <button
              onClick={handleSeeMore}
              className="text-sm font-semibold text-indigo-600 hover:bg-green-500 border border-indigo-600 hover:border-indigo-500 px-4 py-2 rounded-md"
            >
              Ver mas
              <span aria-hidden="true"> &darr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ movie }) => {
  const { Name, Director, Year, Img, Description } = movie;

  return (
    <li className="inline-flex w-64 flex-col text-center lg:w-auto bg-black text-blue-500 border-yellow-500 border overflow-hidden">
      <div className="group relative overflow-hidden">
        <div className="aspect-h-1 aspect-w-1 w-full">
          <div className="transform transition-transform duration-300 hover:scale-110">
            <img src={Img} alt={Name} className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mt-1 font-semibold text-white-300">{Name}</h3>
          <p className="mt-1 text-green-700">Director: {Director}</p>
          <p className="mt-1 text-white">{`Año: ${Year}`}</p>
          <p className="mt-1 text-gray-500">{Description}</p>
        </div>
      </div>
    </li>
  );
};

export default List;
