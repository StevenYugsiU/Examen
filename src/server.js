const buildApp = require("./app");
const { sequelize, connection: connectPostgres } = require("./infraestructura/database/Postgrest");

require("./lib/Cliente/Infraestructura/ClienteModel");
require("./lib/Calculadora/Infraestructura/CalculadoraModel");

async function start() {
  const port = Number(process.env.PORT) || 3977;

  await connectPostgres();
  await sequelize.sync();

  const app = buildApp();

  app.listen(port, () => {
    console.log("Servidor esta corriendo correctamente en el puerto: " + port);
  });
}  

start().catch((e) => {
  console.error("Fallo al iniciar la aplicación:", e);
  process.exit(1);
});
