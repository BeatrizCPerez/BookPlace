import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeLogin = () => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    Img: '',
    Name: '',
    Year: '',
    Director: '',
    Description: '',
  });
  const [editingVideo, setEditingVideo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data.data))
      .catch(error => console.error('Error al obtener la lista de películas:', error));
  }, []);

  const handleAddVideo = () => {
    fetch('http://localhost:3000/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
      .then(response => response.json())
      .then(data => {
        setVideos([...videos, data.data]);
        setNewVideo({
          Img: '',
          Name: '',
          Year: 0,
          Director: '',
          Description: '',
        });
      })
      .catch(error => console.error('Error al agregar película:', error));
  };

  const handleEditClick = video => {
    setEditingVideo({ ...video });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditingVideo(null);
    setIsEditing(false);
  };

  const handleEditVideo = () => {
    fetch(`http://localhost:3000/api/videos/${editingVideo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingVideo),
    })
      .then(response => response.json())
      .then(data => {
        setVideos(videos.map(video => (video.id === editingVideo.id ? data.data : video)));
        setEditingVideo(null);
        setIsEditing(false);
      })
      .catch(error => console.error('Error al editar película:', error));
  };

  const handleDeleteVideo = id => {
    fetch(`http://localhost:3000/api/videos/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setVideos(videos.filter(video => video.id !== id));
      })
      .catch(error => console.error('Error al eliminar película:', error));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Menú lateral (visible solo en pantallas grandes) */}
      <div className="bg-gray-800 text-white lg:w-1/7 min-h-screen p-4 hidden lg:block">
        <h1 className="text-2xl font-bold mb-4">Panel</h1>
        <button className="bg-blue-500 text-white px-4 py-2 mb-4">Dashboard</button>
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
          {/* Lista de películas */}
          <h2 className="text-xl ml-4 font-bold mb-2">Lista de Películas</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-5">Imagen</th>
                  <th className="border border-gray-300 p-2">Nombre</th>
                  <th className="border border-gray-300 p-2">Año</th>
                  <th className="border border-gray-300 p-2">Director</th>
                  <th className="border border-gray-300 p-2">Descripción</th>
                  <th className="border border-gray-300 p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {videos.map(video => (
                  <tr key={video.id} className={isEditing && editingVideo.id === video.id ? 'bg-gray-200' : ''}>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingVideo.id === video.id ? (
                        <input
                          type="text"
                          value={editingVideo.Img}
                          onChange={e => setEditingVideo({ ...editingVideo, Img: e.target.value })}
                          className="w-full"
                        />
                      ) : (
                        <img src={video.Img} alt={video.Name} className="max-w-full max-h-20" />
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingVideo.id === video.id ? (
                        <input
                          type="text"
                          value={editingVideo.Name}
                          onChange={e => setEditingVideo({ ...editingVideo, Name: e.target.value })}
                          className="w-full"
                        />
                      ) : (
                        video.Name
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingVideo.id === video.id ? (
                        <input
                          type="number"
                          value={editingVideo.Year}
                          onChange={e =>
                            setEditingVideo({
                              ...editingVideo,
                              Year: parseInt(e.target.value) || 0,
                            })
                          }
                          className="w-full"
                        />
                      ) : (
                        video.Year
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingVideo.id === video.id ? (
                        <input
                          type="text"
                          value={editingVideo.Director}
                          onChange={e =>
                            setEditingVideo({ ...editingVideo, Director: e.target.value })
                          }
                          className="w-full"
                        />
                      ) : (
                        video.Director
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingVideo.id === video.id ? (
                        <textarea
                          value={editingVideo.Description}
                          onChange={e =>
                            setEditingVideo({ ...editingVideo, Description: e.target.value })
                          }
                          className="w-full"
                        />
                      ) : (
                        video.Description
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {isEditing && editingVideo.id === video.id ? (
                        <>
                          <button
                            onClick={handleEditVideo}
                            className="bg-green-500 text-white px-2 py-1 mr-2"
                          >
                            Guardar
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="bg-red-500 text-white px-2 py-1"
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditClick(video)}
                            className="bg-blue-500 text-white px-2 w-20 py-1 mr-2"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDeleteVideo(video.id)}
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
          {/* Agregar nueva película */}
          <h2 className="text-xl font-bold mb-2">Agregar Nueva Película</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="img">
              Imagen URL:
            </label>
            <input
              type="text"
              id="img"
              name="img"
              value={newVideo.Img}
              onChange={e => setNewVideo({ ...newVideo, Img: e.target.value })}
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
              value={newVideo.Name}
              onChange={e => setNewVideo({ ...newVideo, Name: e.target.value })}
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
              value={newVideo.Year}
              onChange={e => setNewVideo({ ...newVideo, Year: parseInt(e.target.value) || 0 })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="director">
              Director:
            </label>
            <input
              type="text"
              id="director"
              name="director"
              value={newVideo.Director}
              onChange={e => setNewVideo({ ...newVideo, Director: e.target.value })}
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
              value={newVideo.Description}
              onChange={e => setNewVideo({ ...newVideo, Description: e.target.value })}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button onClick={handleAddVideo} className="bg-blue-500 text-white px-4 py-2">
            Agregar Película
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
