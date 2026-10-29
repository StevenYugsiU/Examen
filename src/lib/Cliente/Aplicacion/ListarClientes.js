class ListarClientes {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async ejecutar() {
    return await this.clienteRepository.findAll();
  }
}

module.exports = ListarClientes;
