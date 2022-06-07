const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

const UserModel = sequelize.define(
    'users',
    {
        dni:{
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.DATE
        },
        email: {
            type: DataTypes.STRING
        },
        celular: {
            type: DataTypes.NUMBER
        }
    },
    {
        timestamps: true,
    }
);
module.exports = UserModel;