// router.js
import express from 'express';
import {
  getAllBooks,
  addBook,
  editBook,
  deleteBook,
} from '../controller/BookController.js';
import { handleAuth, getUsers } from '../controller/authController.js';
import registerUserController from '../model/RegisterUserModel.js';

const router = express.Router();

// Rutas para el CRUD de películas
router.get('/book', getAllBooks);
router.post('/book', addBook);
router.put('/book/:id', editBook);
router.delete('/book/:id', deleteBook);

// Rutas existentes
router.post('/users', handleAuth);
router.post('/user', registerUserController);
router.get('/users', getUsers);

export default router;

