// authController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../model/UserModel.js';

export const handleAuth = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Intentando autenticar usuario:', email);
    
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      // Si el usuario no existe, procede con el registro
      console.log('Usuario no encontrado. Iniciando registro.');
      return registerUser(req, res);
    }

    // Si el usuario existe, intenta realizar el inicio de sesión
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log('Contraseña incorrecta. Fallo en la autenticación.');
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    console.log('Autenticación exitosa. Generando token.');
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Error al manejar autenticación:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

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
