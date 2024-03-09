import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";

const VideoModel = connection_db.define('VideoClubStore', {
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
  Director: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

export default VideoModel;
