import { Sequelize } from "sequelize";
import {DB_NAME, DB_USER, DB_PASS, DB_HOST} from "../config.js"


const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_HOST,{
    host: DB_HOST,
    dialect: 'mysql'
})

export default connection_db

