const Calculadora = require("../Dominio/Entidades/Calculadora");
const CalculadoraModel = require("./CalculadoraModel");

function toCalculadora(row) {
  return new Calculadora({
    id: row.id_simulacion.toString(),
    idCliente: row.id_usuario,
    capitalInicial: Number(row.capital_inicial),
    tasaInteresAnual: Number(row.tasa_interes_anual),
    periodosCapitalizacion: row.periodos_capitalizacion,
    tiempoAños: Number(row.tiempo_años),
    fechaRegistro: row.fecha_registro,
  });
}

class CalculadoraRepositoryPostgres {
  async save(calculadora) {
    const row = await CalculadoraModel.create({
      id_usuario: calculadora.idCliente,
      capital_inicial: calculadora.capitalInicial,
      tasa_interes_anual: calculadora.tasaInteresAnual,
      periodos_capitalizacion: calculadora.periodosCapitalizacion,
      tiempo_años: calculadora.tiempoAños,
      monto_final: calculadora.calcularMontoFinal(),
      interes_ganado: calculadora.calcularInteresGanado(),
      categoria: calculadora.obtenerCategoria(),
    });

    return toCalculadora(row);
  }

  async findById(id) {
    const row = await CalculadoraModel.findByPk(id);
    if (!row) return null;

    return toCalculadora(row);
  }

  async findAll() {
    const rows = await CalculadoraModel.findAll({ order: [["id_simulacion", "ASC"]] });
    return rows.map(toCalculadora);
  }

  async deleteById(id) {
    await CalculadoraModel.destroy({ where: { id_simulacion: id } });
  }
}

module.exports = CalculadoraRepositoryPostgres;
