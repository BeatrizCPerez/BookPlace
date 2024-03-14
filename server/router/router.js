// router.js

import express from 'express';
import nodemailer from 'nodemailer';
import { DB_PASS_EMAIL } from '../config.js'; // Asegúrate de importar la contraseña de correo electrónico desde tu archivo de configuración

// Importa controladores y modelos necesarios
import {
  getAllBooks,
  addBook,
  editBook,
  deleteBook,
} from '../controller/BookController.js';
import { registerUser, getUsers } from '../controller/authController.js';

const router = express.Router();

// Configura el transportador de correo electrónico
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Utiliza true para el puerto 465, false para todos los demás puertos
  auth: {
    user: "beatrizcustodio262@gmail.com",
    pass: DB_PASS_EMAIL, // Asegúrate de que esta contraseña sea accesible desde tu archivo de configuración
  },
});

// Rutas para el CRUD de libros
router.get('/book', getAllBooks);
router.post('/book', addBook);
router.put('/book/:id', editBook);
router.delete('/book/:id', deleteBook);

// Ruta para manejar el envío del formulario
router.post('/enviar-formulario', (req, res) => {
  // Extrae los datos del formulario del cuerpo de la solicitud
  const formData = req.body;

  // Configura las opciones del correo electrónico con una plantilla HTML
  const mailOptions = {
    from: 'beatrizcustodio262@gmail.com',
    to: formData.email,
    cc: 'beatrizcustodio262@yahoo.es', // Agrega tu dirección de correo electrónico aquí
    subject: 'Confirmación de Donación',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007bff;">Gracias por tu donación</h2>
        <p>Hola ${formData.name},</p>
        <p>Gracias por tu generosa donación. Hemos recibido tu información correctamente. Tu contribución es muy apreciada y ayudará a hacer una diferencia significativa.</p>
        <p>Detalles de la donación:</p>
        <ul>
          <li><strong>Nombre:</strong> ${formData.name} ${formData.lastName}</li>
          <li><strong>Número de Teléfono:</strong> ${formData.phone}</li>
          <li><strong>Correo Electrónico:</strong> ${formData.email}</li>
          <li><strong>Libro:</strong> ${formData.book}</li>
          <li><strong>Opción de Recogida:</strong> ${formData.recogida}</li>
          ${formData.recogida === 'casa' ? `<li><strong>Dirección de Recogida:</strong> ${formData.direccion}</li>` : ''}
          ${formData.recogida === 'casa' ? `<li><strong>Fecha de Recogida:</strong> ${formData.fechaRecogida}</li>` : ''}
        </ul>
        <p>¡Gracias nuevamente por tu generosidad!</p>
        <p>Saludos,<br/>Tu Equipo de Donaciones</p>
      </div>
    `
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico de confirmación:', error);
      res.status(500).send('Error al enviar el correo electrónico de confirmación');
    } else {
      console.log('Correo electrónico de confirmación enviado:', info.response);
      res.status(200).send('Correo electrónico de confirmación enviado');
    }
  });
});

// Rutas existentes para la autenticación de usuarios
router.post('/users', registerUser);
router.get('/users', getUsers);

export default router;
