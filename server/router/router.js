// router.js
import express from 'express';
import {
  getAllVideos,
  addVideo,
  editVideo,
  deleteVideo,
} from '../controller/VideoController.js';
import { handleAuth, getUsers } from '../controller/authController.js';
import registerUserController from '../model/RegisterUserModel.js';

const router = express.Router();

// Rutas para el CRUD de películas
router.get('/videos', getAllVideos);
router.post('/videos', addVideo);
router.put('/videos/:id', editVideo);
router.delete('/videos/:id', deleteVideo);

// Rutas existentes
router.post('/users', handleAuth);
router.post('/user', registerUserController);
router.get('/users', getUsers);

export default router;

