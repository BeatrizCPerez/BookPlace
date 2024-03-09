

import VideoModel from '../model/VideoModel.js';

export const getAllVideos = async (req, res) => {
  try {
    const videos = await VideoModel.findAll();
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    console.error('Error al obtener todos los videos:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const addVideo = async (req, res) => {
  try {
    const { Img, Name, Year, Director, Description } = req.body;
    const newVideo = await VideoModel.create({ Img, Name, Year, Director, Description });
    res.status(201).json({ success: true, data: newVideo });
  } catch (error) {
    console.error('Error al agregar película:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const editVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { Img, Name, Year, Director, Description } = req.body;

    const video = await VideoModel.findByPk(id);

    if (!video) {
      return res.status(404).json({ success: false, error: 'Película no encontrada' });
    }

    await video.update({ Img, Name, Year, Director, Description });

    res.status(200).json({ success: true, data: video });
  } catch (error) {
    console.error('Error al editar película:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const video = await VideoModel.findByPk(id);

    if (!video) {
      return res.status(404).json({ success: false, error: 'Película no encontrada' });
    }

    await video.destroy();

    res.status(200).json({ success: true, message: 'Película eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar película:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export default getAllVideos;
