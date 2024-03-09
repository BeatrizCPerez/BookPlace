// registerUserController.js
import bcrypt from 'bcrypt';
import UserModel from '../model/UserModel.js';

const registerUserController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'El usuario ya existe' });
    }

    // Hashear la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario en la base de datos
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    console.error('Error al intentar registrar:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

export default registerUserController;
