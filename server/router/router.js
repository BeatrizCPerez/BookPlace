

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
import { registerUser, getUsers, loginUser } from '../controller/authController.js';

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
          <li><strong>Opción de Recogida:</strong> ${formData.recogida}</li>
          ${formData.recogida === 'casa' ? `<li><strong>Dirección de Recogida:</strong> ${formData.direccion}</li>` : ''}
          ${formData.recogida === 'casa' ? `<li><strong>Fecha de BookStore:</strong> ${formData.fechaRecogida}</li>` : ''}
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



// Ruta para manejar el envío del formulario de contacto
router.post('/enviar-formulario-contacto', (req, res) => {
  const formData = req.body;
  
  const mailOptions = {
    from: 'beatrizcustodio262@gmail.com',
    to: formData.email,
    cc: 'beatrizcustodio262@yahoo.es', // Cambia a la dirección de correo electrónico donde deseas recibir los mensajes de contacto
    subject: '¡Gracias por tu mensaje!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007bff;">¡Gracias por tu mensaje!</h2>
        <p style="font-size: 16px;">Hola ${formData.name},</p>
        <p style="font-size: 16px;">Hemos recibido tu solicitud y estamos encantados de ayudarte. En breve nos pondremos en contacto contigo.</p>
        <p style="font-size: 16px;">A continuación, te proporcionamos los detalles de tu mensaje:</p>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Nombre:</strong> ${formData.name}</li>
          <li><strong>Teléfono:</strong> ${formData.telefono}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>¿Eres socio?:</strong> ${formData.eresSocio}</li>
        </ul>
        <p style="font-size: 16px;">¡Muchas gracias por confiar en nosotros!</p>
        <p style="font-size: 16px;">En breve nos pondremos en contacto contigo para atender tu solicitud.</p>
        <p style="font-size: 16px;">Saludos cordiales,</p>
        <p style="font-size: 16px;">El equipo de BookStore</p>
      </div>
    `
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico de contacto:', error);
      res.status(500).send('Error al enviar el correo electrónico de contacto');
    } else {
      console.log('Correo electrónico de contacto enviado:', info.response);
      res.status(200).send('Correo electrónico de contacto enviado');
    }
  });
});

// Rutas existentes para la autenticación de usuarios
// Rutas para la autenticación de usuarios
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users', getUsers);


export default router;
