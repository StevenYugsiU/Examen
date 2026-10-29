const CAPITAL_MINIMO = 100;
const PERIODOS_MENSUAL = 12;

class Calculadora {
  constructor({ id, idCliente, capitalInicial, tasaInteresAnual, periodosCapitalizacion, tiempoAños, fechaRegistro }) {
    if (!Number.isInteger(Number(idCliente))) throw new Error("idCliente requerido");

    this.id = id;
    this.idCliente = Number(idCliente);
    this.capitalInicial = Calculadora.validarCapital(capitalInicial);
    this.tasaInteresAnual = Calculadora.validarTasa(tasaInteresAnual);
    this.periodosCapitalizacion = Calculadora.validarPeriodos(periodosCapitalizacion);
    this.tiempoAños = Calculadora.validarTiempo(tiempoAños);
    this.fechaRegistro = fechaRegistro;
  }

  static validarCapital(valor) {
    const capital = Number(valor);
    if (Number.isNaN(capital) || capital <= CAPITAL_MINIMO) {
      throw new Error(`El capital inicial debe ser mayor a ${CAPITAL_MINIMO} USD`);
    }
    return capital;
  }

  static validarTasa(valor) {
    const tasa = Number(valor);
    if (Number.isNaN(tasa) || tasa <= 0) {
      throw new Error("La tasa de interés anual debe ser un porcentaje mayor a 0");
    }
    return tasa;
  }

  static validarPeriodos(valor) {
    const n = Number(valor);
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error("El número de periodos de capitalización debe ser un entero positivo");
    }
    return n;
  }

  static validarTiempo(valor) {
    const t = Number(valor);
    if (Number.isNaN(t) || t <= 0) {
      throw new Error("El tiempo en años debe ser mayor a 0");
    }
    return t;
  }

  get tasaDecimal() {
    return this.tasaInteresAnual / 100;
  }

  calcularMontoFinal() {
    const montoFinal =
      this.capitalInicial * Math.pow(1 + this.tasaDecimal / this.periodosCapitalizacion, this.periodosCapitalizacion * this.tiempoAños);
    return Math.round(montoFinal * 100) / 100;
  }

  calcularInteresGanado() {
    return Math.round((this.calcularMontoFinal() - this.capitalInicial) * 100) / 100;
  }

  obtenerCategoria() {
    if (this.periodosCapitalizacion !== PERIODOS_MENSUAL) return "Sin categoría";
    if (this.capitalInicial > 1000) return "Categoría 1";
    if (this.capitalInicial >= 501) return "Categoría 2";
    if (this.capitalInicial >= 100 && this.capitalInicial <= 500) return "Categoría 3";
    return "Sin categoría";
  }
}

module.exports = Calculadora;
