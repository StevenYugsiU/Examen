class ClienteController {
  constructor({ crearCliente, listarClientes, obtenerClientePorId, eliminarCliente }) {
    this.crearCliente = crearCliente;
    this.listarClientes = listarClientes;
    this.obtenerClientePorId = obtenerClientePorId;
    this.eliminarCliente = eliminarCliente;
  }

  crear = async (req, res) => {
    const cliente = await this.crearCliente.ejecutar(req.body);
    res.status(201).json(cliente);
  };

  listar = async (req, res) => {
    const clientes = await this.listarClientes.ejecutar();
    res.json(clientes);
  };

  obtenerPorId = async (req, res) => {
    const cliente = await this.obtenerClientePorId.ejecutar(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(cliente);
  };

  eliminar = async (req, res) => {
    await this.eliminarCliente.ejecutar(req.params.id);
    res.status(204).send();
  };
}

module.exports = ClienteController;
