import React, { useState, useEffect } from 'react';

const List = () => {
  const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(4);
  const [totalBooks, setTotalBooks] = useState(0);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://back-iax6.onrender.com/api/book');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setBooks(data.data);
        setTotalBooks(data.data.length);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Error al obtener los datos. Por favor, intenta nuevamente más tarde.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSeeMore = () => {
    const newVisibleBooks = visibleBooks + 4;
    setVisibleBooks(Math.min(newVisibleBooks, totalBooks));
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
          <h2 className="text-2xl font-bold tracking-tight text-white">Libros</h2>
          <div className="hidden sm:block">
            <a href="#" className="text-sm font-semibold text-teal-600 hover:text-cyan-500">
              Categorías
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
              Categorías
            </a>
          </div>
        )}

        {error && <div>Error: {error}</div>}

        {loading ? (
          <div className="text-white flex items-center justify-center h-32">
            <div className="spinner-border text-teal-500 mr-3" role="status"></div>
            <span>Cargando libros...</span>
          </div>
        ) : (
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {books.slice(0).reverse().map((book, index) => (
                  <BookCard key={book.id} book={book} isNew={index < 4} />
                ))}
              </ul>
            </div>
          </div>
        )}

        {visibleBooks < totalBooks && (
          <div className="mt-12 flex px-4 justify-center">
            <button
              onClick={handleSeeMore}
              className="text-sm font-semibold text-indigo-600 hover:bg-green-500 border border-indigo-600 hover:border-indigo-500 px-4 py-2 rounded-md"
            >
              Ver más
              <span aria-hidden="true"> &darr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const BookCard = ({ book, isNew }) => {
  const { Name, Author, Year, Img, Description } = book;

  return (
    <li className={`bg-black text-blue-500 border-yellow-500 border overflow-hidden mb-8 relative ${isNew ? 'animate-pulse' : ''}`}>
      <div className="relative overflow-hidden">
        <div className="aspect-h-1 aspect-w-1">
          <div className="transform transition-transform duration-300 hover:scale-110 relative">
            {isNew && (
              <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-sm font-semibold rounded-tl-md rounded-br-md">
                Recién llegado
              </div>
            )}
            <img src={Img} alt={Name} className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{Name}</h3>
          <p className="text-green-700">Author: {Author}</p>
          <p className="text-white">{`Año: ${Year}`}</p>
          <p className="text-gray-500">{Description}</p>
        </div>
      </div>
    </li>
  );
};

export default List;

