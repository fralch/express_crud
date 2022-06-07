const { sequelize } = require('./config/mysql');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    'users',
    {
        dni:{
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
        },
        email: {
            type: DataTypes.STRING,
        },
        celular: {
            type: DataTypes.NUMBER,
        }
    },
    {
        timestamps: true,
    }
);
module.exports = User;