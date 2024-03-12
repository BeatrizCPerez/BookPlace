import express from 'express';
import cors from 'cors';
import router from './router/router.js';
import connection_db from './database/connection_db.js';
import BookModel from './model/BookModel.js';
import UserModel from './model/UserModel.js';
import { PORT } from './config.js';

const app = express();

// Configurar CORS
app.use(cors());

// Middleware para procesar datos JSON
app.use(express.json());

// Usar el enrutador
app.use('/api', router);


const main = async () => {
  try {
    // Conectar a la base de datos
    await connection_db.authenticate();
    console.log('✅✅ Successful connection to the database ✅✅');

    // Sincronizar modelos con la base de datos
    await BookModel.sync();
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
