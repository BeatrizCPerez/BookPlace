// HomeLogin.js (frontend)

import React, { useState, useEffect } from 'react';

const HomeLogin = () => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    Img: '',
    Name: '',
    Year: 0,
    Director: '',
    Description: '',
  });
  const [editingVideo, setEditingVideo] = useState(null);

  useEffect(() => {
    // Obtener la lista de películas al cargar el componente
    fetch('http://localhost:3000/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data.data))
      .catch(error => console.error('Error al obtener la lista de películas:', error));
  }, []);

  const handleAddVideo = () => {
    // Enviar una solicitud para agregar una nueva película
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

  const handleEditVideo = () => {
    // Enviar una solicitud para editar una película
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
      })
      .catch(error => console.error('Error al editar película:', error));
  };

  const handleDeleteVideo = (id) => {
    // Enviar una solicitud para eliminar una película
    fetch(`http://localhost:3000/api/videos/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setVideos(videos.filter(video => video.id !== id));
      })
      .catch(error => console.error('Error al eliminar película:', error));
  };

  const handleEditClick = (video) => {
    setEditingVideo({ ...video });
  };

  const handleCancelEdit = () => {
    setEditingVideo(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Panel de Control</h1>

      {/* Lista de Películas */}
      <div className="mb-8 overflow-x-auto">
        <h2 className="text-xl font-bold mb-2">Lista de Películas</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Nombre</th>
              <th className="border border-gray-300 p-2">Año</th>
              <th className="border border-gray-300 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(video => (
              <tr key={video.id}>
                <td className="border border-gray-300 p-2">{video.Name}</td>
                <td className="border border-gray-300 p-2">{video.Year}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDeleteVideo(video.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                    onClick={() => handleEditClick(video)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulario para agregar nueva película */}
      <div>
        <h2 className="text-xl font-bold mb-2">Agregar Nueva Película</h2>
        <div className="flex items-center mb-4">
          <label className="mr-2">Nombre:</label>
          <input
            type="text"
            className="border border-gray-300 p-2"
            value={newVideo.Name}
            onChange={(e) => setNewVideo({ ...newVideo, Name: e.target.value })}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2">Año:</label>
          <input
            type="number"
            className="border border-gray-300 p-2"
            value={newVideo.Year}
            onChange={(e) => setNewVideo({ ...newVideo, Year: e.target.value })}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2">Imagen URL:</label>
          <input
            type="text"
            className="border border-gray-300 p-2"
            value={newVideo.Img}
            onChange={(e) => setNewVideo({ ...newVideo, Img: e.target.value })}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2">Director:</label>
          <input
            type="text"
            className="border border-gray-300 p-2"
            value={newVideo.Director}
            onChange={(e) => setNewVideo({ ...newVideo, Director: e.target.value })}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2">Descripción:</label>
          <textarea
            className="border border-gray-300 p-2"
            value={newVideo.Description}
            onChange={(e) => setNewVideo({ ...newVideo, Description: e.target.value })}
          />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAddVideo}
        >
          Agregar Película
        </button>
      </div>

      {/* Formulario para editar película */}
      {editingVideo && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Editar Película</h2>
          <div className="flex items-center mb-4">
            <label className="mr-2">Nombre:</label>
            <input
              type="text"
              className="border border-gray-300 p-2"
              value={editingVideo.Name}
              onChange={(e) => setEditingVideo({ ...editingVideo, Name: e.target.value })}
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">Año:</label>
            <input
              type="number"
              className="border border-gray-300 p-2"
              value={editingVideo.Year}
              onChange={(e) => setEditingVideo({ ...editingVideo, Year: e.target.value })}
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">Imagen URL:</label>
            <input
              type="text"
              className="border border-gray-300 p-2"
              value={editingVideo.Img}
              onChange={(e) => setEditingVideo({ ...editingVideo, Img: e.target.value })}
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">Director:</label>
            <input
              type="text"
              className="border border-gray-300 p-2"
              value={editingVideo.Director}
              onChange={(e) => setEditingVideo({ ...editingVideo, Director: e.target.value })}
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">Descripción:</label>
            <textarea
              className="border border-gray-300 p-2"
              value={editingVideo.Description}
              onChange={(e) => setEditingVideo({ ...editingVideo, Description: e.target.value })}
            />
          </div>
          <div className="flex items-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleEditVideo}
            >
              Guardar Cambios
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLogin;
