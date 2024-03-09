// userModel.js (puedes crearlo en la carpeta model)
import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const UserModel = connection_db.define('UserRegisterm', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  

  export default UserModel