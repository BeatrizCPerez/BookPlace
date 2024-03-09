import React, { useState, useEffect } from 'react';

const HomeLogin = () => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    Img: null,
    Name: '',
    Year: 0,
    Director: '',
    Description: '',
  });
  const [editingVideo, setEditingVideo] = useState(null);
  const [editingVideoImage, setEditingVideoImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data.data))
      .catch(error => console.error('Error al obtener la lista de películas:', error));
  }, []);

  const handleAddVideo = () => {
    const formData = new FormData();
    formData.append('Img', newVideo.Img);
    formData.append('Name', newVideo.Name);
    formData.append('Year', newVideo.Year);
    formData.append('Director', newVideo.Director);
    formData.append('Description', newVideo.Description);

    fetch('http://localhost:3000/api/videos', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setVideos([...videos, data.data]);
        setNewVideo({
          Img: null,
          Name: '',
          Year: 0,
          Director: '',
          Description: '',
        });
      })
      .catch(error => console.error('Error al agregar película:', error));
  };

  const handleEditClick = (video) => {
    setEditingVideo({ ...video });
    setEditingVideoImage(null);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditingVideo(null);
    setEditingVideoImage(null);
    setIsEditing(false);
  };

  const handleEditVideo = () => {
    const formData = new FormData();
    formData.append('Img', editingVideoImage || newVideo.Img);
    formData.append('Name', editingVideo.Name);
    formData.append('Year', editingVideo.Year);
    formData.append('Director', editingVideo.Director);
    formData.append('Description', editingVideo.Description);

    fetch(`http://localhost:3000/api/videos/${editingVideo.id}`, {
      method: 'PUT',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setVideos(videos.map(video => (video.id === editingVideo.id ? data.data : video)));
        setEditingVideo(null);
        setEditingVideoImage(null);
        setIsEditing(false);
      })
      .catch(error => console.error('Error al editar película:', error));
  };

  const handleDeleteVideo = (id) => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Panel de Control</h1>

      <div className="mb-8 overflow-x-auto">
        <h2 className="text-xl font-bold mb-2">Lista de Películas</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Imagen</th>
              <th className="border border-gray-300 p-2">Nombre</th>
              <th className="border border-gray-300 p-2">Año</th>
              <th className="border border-gray-300 p-2">Director</th>
              <th className="border border-gray-300 p-2">Descripción</th>
              <th className="border border-gray-300 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(video => (
              <tr key={video.id}>
                <td className="border border-gray-300 p-2">
                  {isEditing && editingVideo.id === video.id ? (
                    <input
                      type="file"
                      onChange={(e) => setEditingVideoImage(e.target.files[0])}
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    <img src={video.Img} alt={video.Name} className="max-h-16" />
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {isEditing && editingVideo.id === video.id ? (
                    <input
                      type="text"
                      value={editingVideo.Name}
                      onChange={(e) => setEditingVideo({ ...editingVideo, Name: e.target.value })}
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
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, Year: parseInt(e.target.value) || 0 })
                      }
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
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, Director: e.target.value })
                      }
                    />
                  ) : (
                    video.Director
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {isEditing && editingVideo.id === video.id ? (
                    <textarea
                      value={editingVideo.Description}
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, Description: e.target.value })
                      }
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
                        className="bg-blue-500 text-white px-2 py-1 mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        className="bg-red-500 text-white px-2 py-1"
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

      <div>
        <h2 className="text-xl font-bold mb-2">Agregar Nueva Película</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newVideo.Name}
            onChange={(e) => setNewVideo({ ...newVideo, Name: e.target.value })}
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
            onChange={(e) => setNewVideo({ ...newVideo, Year: parseInt(e.target.value) || 0 })}
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
            onChange={(e) => setNewVideo({ ...newVideo, Director: e.target.value })}
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
            onChange={(e) => setNewVideo({ ...newVideo, Description: e.target.value })}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="img">
            Imagen:
          </label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setNewVideo({ ...newVideo, Img: e.target.files[0] })}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <button onClick={handleAddVideo} className="bg-blue-500 text-white px-4 py-2">
          Agregar Película
        </button>
      </div>
    </div>
  );
};

export default HomeLogin;
