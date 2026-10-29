const ClienteRoutes = require("./ClienteRoutes");
const ClienteController = require("./ClienteController");

const ClienteRepositoryPostgres = require("../ClienteRepositoryPostgres");

const CrearCliente = require("../../Aplicacion/CrearCliente");
const ListarClientes = require("../../Aplicacion/ListarClientes");
const ObtenerClientePorId = require("../../Aplicacion/ObtenerClientePorId");
const EliminarCliente = require("../../Aplicacion/EliminarCliente");

module.exports = function registerClienteModule(app) {
  const repo = new ClienteRepositoryPostgres();

  const controller = new ClienteController({
    crearCliente: new CrearCliente(repo),
    listarClientes: new ListarClientes(repo),
    obtenerClientePorId: new ObtenerClientePorId(repo),
    eliminarCliente: new EliminarCliente(repo),
  });

  app.use("/api/clientes", ClienteRoutes(controller));
};
