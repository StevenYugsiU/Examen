class EliminarCliente {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async ejecutar(id) {
    return await this.clienteRepository.deleteById(id);
  }
}

module.exports = EliminarCliente;
