function toRespuesta(calculadora) {
  return {
    id: calculadora.id,
    idCliente: calculadora.idCliente,
    capitalInicial: calculadora.capitalInicial,
    tasaInteresAnual: calculadora.tasaInteresAnual,
    periodosCapitalizacion: calculadora.periodosCapitalizacion,
    tiempoAños: calculadora.tiempoAños,
    montoFinal: calculadora.calcularMontoFinal(),
    interesGanado: calculadora.calcularInteresGanado(),
    categoria: calculadora.obtenerCategoria(),
    fechaRegistro: calculadora.fechaRegistro,
  };
}

class CalculadoraController {
  constructor({ crearCalculadora, listarCalculadoras, obtenerCalculadoraPorId, eliminarCalculadora }) {
    this.crearCalculadora = crearCalculadora;
    this.listarCalculadoras = listarCalculadoras;
    this.obtenerCalculadoraPorId = obtenerCalculadoraPorId;
    this.eliminarCalculadora = eliminarCalculadora;
  }

  crear = async (req, res) => {
    const calculadora = await this.crearCalculadora.ejecutar(req.body);
    res.status(201).json(toRespuesta(calculadora));
  };

  listar = async (req, res) => {
    const calculadoras = await this.listarCalculadoras.ejecutar();
    res.json(calculadoras.map(toRespuesta));
  };

  obtenerPorId = async (req, res) => {
    const calculadora = await this.obtenerCalculadoraPorId.ejecutar(req.params.id);
    if (!calculadora) return res.status(404).json({ message: "Simulación no encontrada" });
    res.json(toRespuesta(calculadora));
  };

  eliminar = async (req, res) => {
    await this.eliminarCalculadora.ejecutar(req.params.id);
    res.status(204).send();
  };
}

module.exports = CalculadoraController;
