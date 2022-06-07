const { Sequelize } = require('sequelize');

// const database = new Sequelize('mysql://root:root@localhost:3306/test');
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database, 
    username, 
    password, 
    { 
        host, 
        dialect: 'mysql' 
    }
);

// const dbConnectMysql = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
const dbConnectMysql = () => {
    sequelize.authenticate()
    .then(() => {
        console.log('conexion a la base de datos exitosa');
    })
    .catch(err => {
        console.error('No se puede conectar a la base de datos: ', err);
    });
}; 

module.exports = {sequelize, dbConnectMysql};
