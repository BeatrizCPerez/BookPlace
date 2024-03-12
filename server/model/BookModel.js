import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";

const BookModel = connection_db.define('BookStore', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Author: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Description: {
    type: DataTypes.STRING(300),
    allowNull: true,
  }
});

export default BookModel;
