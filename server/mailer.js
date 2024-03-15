import express from 'express';
import nodemailer from 'nodemailer';
import { DB_PASS_EMAIL } from './config.js';

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'beatrizcustodio262@gmail.com',
    pass: DB_PASS_EMAIL,
  },
});

app.post('/api/enviar-formulario', (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: 'beatrizcustodio262@gmail.com',
    to: formData.email,
    subject: 'Confirmación de Donación',
    text: 'Gracias por tu donación. Hemos recibido tu información correctamente.',
  };

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en el puerto ${PORT}`);
});
