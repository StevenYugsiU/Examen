class ObtenerCalculadoraPorId {
  constructor(calculadoraRepository) {
    this.calculadoraRepository = calculadoraRepository;
  }

  async ejecutar(id) {
    return await this.calculadoraRepository.findById(id);
  }
}

module.exports = ObtenerCalculadoraPorId;
