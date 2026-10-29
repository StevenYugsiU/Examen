const Cliente = require("../Dominio/Entidades/Cliente");

class CrearCliente {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async ejecutar(data) {
    const cliente = new Cliente(data);
    return await this.clienteRepository.save(cliente);
  }
}

module.exports = CrearCliente;
