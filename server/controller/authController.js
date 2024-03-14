// authController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../model/UserModel.js';

// Función para manejar el registro de nuevos usuarios
export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Registrando nuevo usuario:', email);

    const existingUser = await UserModel.findOne({ where: { email } });

    if (existingUser) {
      console.log('El usuario ya existe. Registro fallido.');
      return res.status(400).json({ success: false, message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser.id }, 'secreto', { expiresIn: '1h' });

    console.log('Registro exitoso. Generando token.');
    res.status(201).json({ success: true, message: 'Usuario registrado con éxito', token });
  } catch (error) {
    console.error('Error al intentar registrar usuario:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

// Función para manejar el inicio de sesión
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Intentando iniciar sesión:', email);
    
    // Buscar al usuario en la base de datos por su correo electrónico
    const user = await UserModel.findOne({ where: { email } });

    // Si el usuario no se encuentra en la base de datos, devolver un mensaje de error
    if (!user) {
      console.log('Usuario no encontrado.');
      return res.status(401).json({ success: false, message: 'Usuario no encontrado. Verifica tus credenciales de inicio de sesión.' });
    }

    // Comparar la contraseña ingresada con la contraseña almacenada para el usuario
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devolver un mensaje de error
    if (!passwordMatch) {
      console.log('Contraseña incorrecta. Fallo en la autenticación.');
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta. Verifica tus credenciales de inicio de sesión.' });
    }

    // Si las credenciales son correctas, generar un token de autenticación
    console.log('Inicio de sesión exitoso.');
    const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    // Devolver el token de autenticación como respuesta
    res.status(200).json({ success: true, message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    // Manejar cualquier error interno del servidor
    console.error('Error al manejar inicio de sesión:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};


// Función para obtener la lista de usuarios
export const getUsers = async (req, res) => {
  try {
    console.log('Obteniendo lista de usuarios.');

    const users = await UserModel.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};
