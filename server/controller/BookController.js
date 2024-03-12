

import BookModel from '../model/BookModel.js';

export const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.findAll();
    res.status(201).json({ success: true, data: books });
  } catch (error) {
    console.error('Error al obtener todos los libros:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const addBook = async (req, res) => {
  try {
    const { Img, Name, Year, Author, Description } = req.body;
    const newBook = await BookModel.create({ Img, Name, Year, Author, Description });
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    console.error('Error al agregar película:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { Img, Name, Year, Author, Description } = req.body;

    const book = await BookModel.findByPk(id);

    if (!book) {
      return res.status(404).json({ success: false, error: 'Libro no encontrado' });
    }

    await book.update({ Img, Name, Year, Author, Description });

    res.status(201).json({ success: true, data: book });
  } catch (error) {
    console.error('Error al editar libro:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await BookModel.findByPk(id);

    if (!book) {
      return res.status(404).json({ success: false, error: 'Libro no encontrado' });
    }

    await book.destroy();

    res.status(200).json({ success: true, message: 'Libro eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el Libro:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export default getAllBooks;
