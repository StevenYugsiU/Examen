const CalculadoraRoutes = require("./CalculadoraRoutes");
const CalculadoraController = require("./CalculadoraController");

const CalculadoraRepositoryPostgres = require("../CalculadoraRepositoryPostgres");
const ClienteRepositoryPostgres = require("../../../Cliente/Infraestructura/ClienteRepositoryPostgres");

const CrearCalculadora = require("../../Aplicacion/CrearCalculadora");
const ListarCalculadoras = require("../../Aplicacion/ListarCalculadoras");
const ObtenerCalculadoraPorId = require("../../Aplicacion/ObtenerCalculadoraPorId");
const EliminarCalculadora = require("../../Aplicacion/EliminarCalculadora");

module.exports = function registerCalculadoraModule(app) {
  const repo = new CalculadoraRepositoryPostgres();
  const clienteRepo = new ClienteRepositoryPostgres();

  const controller = new CalculadoraController({
    crearCalculadora: new CrearCalculadora(repo, clienteRepo),
    listarCalculadoras: new ListarCalculadoras(repo),
    obtenerCalculadoraPorId: new ObtenerCalculadoraPorId(repo),
    eliminarCalculadora: new EliminarCalculadora(repo),
  });

  app.use("/api/calculadora", CalculadoraRoutes(controller));
};
