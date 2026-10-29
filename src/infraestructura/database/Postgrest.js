const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_URI || "postgresql://postgres:postgres@127.0.0.1:5432/ExamenYugsi",
  {
    dialect: "postgres",
    logging: false,
  }
);

async function connection() {
  try {
    await sequelize.authenticate();
    console.log(`Se ha conectado a la bdd: ${sequelize.getDatabaseName()}`);
  } catch (error) {
    console.error("Error conectando a PostgreSQL:", error);
    throw new Error("No se ha podido establecer la conexión a la bdd");
  }
}

async function disconnect() {
  await sequelize.close();
  console.log("PostgreSQL desconectado correctamente");
}

module.exports = { sequelize, connection, disconnect };
