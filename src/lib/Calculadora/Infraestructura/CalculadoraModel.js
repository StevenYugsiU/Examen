const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../infraestructura/database/Postgrest");
const ClienteModel = require("../../Cliente/Infraestructura/ClienteModel");

const CalculadoraModel = sequelize.define(
  "Calculadora",
  {
    id_simulacion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    capital_inicial: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    tasa_interes_anual: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
    periodos_capitalizacion: { type: DataTypes.INTEGER, allowNull: false },
    tiempo_años: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
    monto_final: { type: DataTypes.DECIMAL(14, 2), allowNull: false },
    interes_ganado: { type: DataTypes.DECIMAL(14, 2), allowNull: false },
    categoria: { type: DataTypes.STRING(20), allowNull: false },
    fecha_registro: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "calculadora",
    timestamps: false,
  }
);

CalculadoraModel.belongsTo(ClienteModel, { foreignKey: "id_usuario" });

module.exports = CalculadoraModel;
