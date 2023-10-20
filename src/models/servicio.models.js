const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Importa tu instancia de Sequelize

const Cliente = require("../models/cliente.models")

const Servicio = sequelize.define('servicios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});



// Sincroniza el modelo con la base de datos (crea la tabla si no existe)
Servicio.sync();

module.exports = Servicio;