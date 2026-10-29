const validator = require("validator");

class Cliente {
  constructor({ id, nombres, cedula, email, celular, estado = true }) {
    this.id = id;
    this.nombres = Cliente.validarNombres(nombres);
    this.cedula = Cliente.validarCedula(cedula);
    this.email = Cliente.validarEmail(email);
    this.celular = Cliente.validarCelular(celular);
    this.estado = estado;
  }

  static validarNombres(nombres) {
    if (!nombres || typeof nombres !== "string" || nombres.trim().length < 3) {
      throw new Error("El nombre debe tener al menos 3 caracteres");
    }
    return nombres.trim();
  }

  static validarCedula(cedula) {
    if (!cedula || !/^\d{10}$/.test(String(cedula).trim())) {
      throw new Error("La cédula debe tener 10 dígitos numéricos");
    }
    return String(cedula).trim();
  }

  static validarEmail(email) {
    if (!email || !validator.isEmail(String(email).trim())) {
      throw new Error("El email no tiene un formato válido");
    }
    return String(email).trim().toLowerCase();
  }

  static validarCelular(celular) {
    if (!celular || !/^\d{10}$/.test(String(celular).trim())) {
      throw new Error("El celular debe tener 10 dígitos numéricos");
    }
    return String(celular).trim();
  }
}

module.exports = Cliente;
