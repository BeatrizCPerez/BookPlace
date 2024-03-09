// app.js

import express from 'express';
import cors from 'cors';
import router from './router/router.js';
import connection_db from './database/connection_db.js';
import VideoModel from './model/VideoModel.js';
import UserModel from './model/UserModel.js';
import { PORT } from './config.js';
import { getAllVideos, addVideo, editVideo, deleteVideo } from './controller/VideoController.js';

const app = express();

// Configurar CORS
app.use(cors());

// Middleware para procesar datos JSON
app.use(express.json());

// Usar el enrutador
app.use('/api', router);

// Rutas para videos
router.get('/videos', getAllVideos);
router.post('/videos', addVideo);
router.put('/videos/:id', editVideo); // Ajusta la ruta según la estructura de tu API
router.delete('/videos/:id', deleteVideo); // Ajusta la ruta según la estructura de tu API

const main = async () => {
  try {
    // Conectar a la base de datos
    await connection_db.authenticate();
    console.log('✅✅ Successful connection to the database ✅✅');

    // Sincronizar modelos con la base de datos
    await VideoModel.sync();
    await UserModel.sync();
    console.log('✅✅ Models synced with the database ✅✅');
  } catch (error) {
    console.log('❌❌ Database connection or sync error ❌❌', error);
  }
};

// Iniciar el servidor
const server = app.listen(PORT, () => {
  console.log(`💚 Server is running on port ${PORT}`);
}).on('error', (error) => {
  console.log('❌❌ Server error ❌❌:', error.message);
});

// Manejar cierre grácil del servidor
process.on('SIGINT', async () => {
  try {
    // Cerrar la conexión a la base de datos
    await connection_db.close();
    console.log('✅✅ Database connection closed ✅✅');
  } catch (error) {
    console.log('❌❌ Error closing the database connection ❌❌', error);
  }

  // Cerrar el servidor
  server.close(() => {
    console.log('💔 Server closed');
    process.exit(0);
  });
});

main();
