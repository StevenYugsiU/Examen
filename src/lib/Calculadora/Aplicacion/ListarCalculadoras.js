class ListarCalculadoras {
  constructor(calculadoraRepository) {
    this.calculadoraRepository = calculadoraRepository;
  }

  async ejecutar() {
    return await this.calculadoraRepository.findAll();
  }
}

module.exports = ListarCalculadoras;
