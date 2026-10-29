const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../infraestructura/database/Postgrest");

const ClienteModel = sequelize.define(
  "Cliente",
  {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombres: { type: DataTypes.STRING(100), allowNull: false },
    cedula: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(250), allowNull: false, unique: true },
    celular: { type: DataTypes.STRING(250), allowNull: false },
    estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    fecha_registro: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    fecha_actualizacion: { type: DataTypes.DATE },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = ClienteModel;
