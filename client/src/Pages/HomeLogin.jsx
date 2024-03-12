import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const HomeLogin = () => {
 const [books, setBooks] = useState([]);
 const [newBook, setNewBook] = useState({
    Img: '',
    Name: '',
    Year: 0,
    Author: '',
    Description: '',
 });
 const [editingBook, setEditingBook] = useState(null);
 const [isEditing, setIsEditing] = useState(false);

 useEffect(() => {
    fetch('http://localhost:3000/api/book')
      .then(response => response.json())
      .then(data => setBooks(data.data))
      .catch(error => console.error('Error al obtener la lista de libros:', error));
 }, []);

 useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth < 768) {
        Swal.fire('Notificación', 'Por favor, ponga el móvil horizontal para una mejor visualización.', 'info');
      }
    };

    window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', handleOrientationChange);
 }, []);

 const handleAddBook = () => {
    fetch('http://localhost:3000/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => {
        setBooks([...books, data.data]);
        setNewBook({
          Img: '',
          Name: '',
          Year: 0,
          Author: '',
          Description: '',
        });
        Swal.fire('¡Éxito!', 'Libro agregado con éxito.', 'success');
      })
      .catch(error => {
        console.error('Error al agregar libro:', error);
        Swal.fire('Error', 'Hubo un error al agregar el libro.', 'error');
      });
 };

 const handleEditClick = book => {
    setEditingBook({ ...book });
    setIsEditing(true);
 };

 const handleCancelEdit = () => {
    setEditingBook(null);
    setIsEditing(false);
 };

 const handleEditBook = () => {
    fetch(`http://localhost:3000/api/book/${editingBook.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingBook),
    })
      .then(response => response.json())
      .then(data => {
        setBooks(books.map(book => (book.id === editingBook.id ? data.data : book)));
        setEditingBook(null);
        setIsEditing(false);
        Swal.fire('¡Éxito!', 'Libro editado con éxito.', 'success');
      })
      .catch(error => {
        console.error('Error al editar libro:', error);
        Swal.fire('Error', 'Hubo un error al editar el libro.', 'error');
      });
 };

 const handleDeleteBook = id => {
    fetch(`http://localhost:3000/api/book/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
        Swal.fire('¡Éxito!', 'Libro eliminado con éxito.', 'success');
      })
      .catch(error => {
        console.error('Error al eliminar libro:', error);
        Swal.fire('Error', 'Hubo un error al eliminar el libro.', 'error');
      });
 };

 return (
    <div className="flex flex-col lg:flex-row">
      {/* Menú lateral (visible solo en pantallas grandes) */}
      <div className="bg-gray-800 text-white lg:w-1/7 min-h-screen p-4 hidden lg:block">
        <h1 className="text-2xl font-bold mb-4">Panel</h1>
        <button className="bg-blue-500 text-white px-4 py-2 mb-4">Dashboard</button>
        <Link to='/'>
          <button className="bg-red-500 text-white px-4 py-2 lg:mr-4 mb-4 lg:mb-0">Salir</button>
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="w-full p-4 lg:pl-48"> {/* Ajuste de margen con el menú izquierdo */}
        {/* Barra de navegación superior */}
        <div className="flex justify-between items-center mb-4 lg:mb-8 lg:px-4 bg-white text-black fixed top-0 z-10 w-full">
          <h1 className="text-3xl font-bold">Panel de Control</h1>
          <Link to='/'>
            <button className="bg-red-500 text-white px-4 py-2 lg:mr-4 mb-4 lg:mb-0">Salir</button>
          </Link>
        </div>

        <div className="mb-8 mt-12 lg:mt-20">
          {/* Lista de libros */}
          <h2 className="text-xl ml-4 font-bold mb-2">Lista de Libros</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                 <th className="border border-gray-300 p-5">Imagen</th>
                 <th className="border border-gray-300 p-2">Nombre</th>
                 <th className="border border-gray-300 p-2">Año</th>
                 <th className="border border-gray-300 p-2">Autor</th>
                 <th className="border border-gray-300 p-2">Descripción</th>
                 <th className="border border-gray-300 p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                 <tr key={book.id} className={isEditing && editingBook.id === book.id ? 'bg-gray-200' : ''}>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingBook.id === book.id ? (
                        <input
                          type="text"
                          value={editingBook.Img}
                          onChange={e => setEditingBook({ ...editingBook, Img: e.target.value })}
                          className="w-full"
                        />
                      ) : (
                        <img src={book.Img} alt={book.Name} className="max-w-full max-h-20" />
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingBook.id === book.id ? (
                        <input
                          type="text"
                          value={editingBook.Name}
                          onChange={e => setEditingBook({ ...editingBook, Name: e.target.value })}
                          className="w-full"
                        />
                      ) : (
                        book.Name
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingBook.id === book.id ? (
                        <input
                          type="number"
                          value={editingBook.Year}
                          onChange={e =>
                            setEditingBook({
                              ...editingBook,
                              Year: parseInt(e.target.value) || 0,
                            })
                          }
                          className="w-full"
                        />
                      ) : (
                        book.Year
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingBook.id === book.id ? (
                        <input
                          type="text"
                          value={editingBook.Author}
                          onChange={e =>
                            setEditingBook({ ...editingBook, Author: e.target.value })
                          }
                          className="w-full"
                        />
                      ) : (
                        book.Author
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingBook.id === book.id ? (
                        <textarea
                          value={editingBook.Description}
                          onChange={e =>
                            setEditingBook({ ...editingBook, Description: e.target.value })
                          }
                          className="w-full"
                        />
                      ) : (
                        book.Description
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingBook.id === book.id ? (
                        <>
                          <button
                            onClick={handleEditBook}
                            className="bg-green-500 text-white px-2 py-1 mr-2"
                          >
                            Guardar
                          </button>
                          <button
                            onClick={() => handleEditClick(book)}
                            className="bg-blue-500 text-white px-2 w-20 py-1 mr-2"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDeleteBook(book.id)}
                            className="bg-red-500 text-white w-20 px-2 py-1"
                          >
                            Eliminar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditClick(book)}
                            className="bg-blue-500 text-white px-2 w-20 py-1 mr-2"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDeleteBook(book.id)}
                            className="bg-red-500 text-white w-20 px-2 py-1"
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </td>
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          {/* Agregar nuevo libro */}
          <h2 className="text-xl font-bold mb-2">Agregar Nuevo Libro</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="img">
              Imagen URL:
            </label>
            <input
              type="text"
              id="img"
              name="img"
              value={newBook.Img}
              onChange={e => setNewBook({ ...newBook, Img: e.target.value })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newBook.Name}
              onChange={e => setNewBook({ ...newBook, Name: e.target.value })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="year">
              Año:
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={newBook.Year}
              onChange={e => setNewBook({ ...newBook, Year: parseInt(e.target.value) || 0 })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="author">
              Autor:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.Author}
              onChange={e => setNewBook({ ...newBook, Author: e.target.value })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="description">
              Descripción:
            </label>
            <textarea
              id="description"
              name="description"
              value={newBook.Description}
              onChange={e => setNewBook({ ...newBook, Description: e.target.value })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button onClick={handleAddBook} className="bg-blue-500 text-white px-4 py-2">
            Agregar Libro
          </button>
        </div>
      </div>
    </div>
 );
};

export default HomeLogin;
