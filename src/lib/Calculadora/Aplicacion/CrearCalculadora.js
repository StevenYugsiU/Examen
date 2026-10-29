const Calculadora = require("../Dominio/Entidades/Calculadora");

class CrearCalculadora {
  constructor(calculadoraRepository, clienteRepository) {
    this.calculadoraRepository = calculadoraRepository;
    this.clienteRepository = clienteRepository;
  }

  async ejecutar(data) {
    const cliente = await this.clienteRepository.findById(data.idCliente);
    if (!cliente) throw new Error("el cliente no existe");

    const calculadora = new Calculadora(data);
    return await this.calculadoraRepository.save(calculadora);
  }
}

module.exports = CrearCalculadora;
