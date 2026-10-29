class ObtenerClientePorId {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async ejecutar(id) {
    return await this.clienteRepository.findById(id);
  }
}

module.exports = ObtenerClientePorId;
