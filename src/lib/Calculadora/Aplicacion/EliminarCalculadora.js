class EliminarCalculadora {
  constructor(calculadoraRepository) {
    this.calculadoraRepository = calculadoraRepository;
  }

  async ejecutar(id) {
    return await this.calculadoraRepository.deleteById(id);
  }
}

module.exports = EliminarCalculadora;
