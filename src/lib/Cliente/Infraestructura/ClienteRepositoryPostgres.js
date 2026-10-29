const Cliente = require("../Dominio/Entidades/Cliente");
const ClienteModel = require("./ClienteModel");

function toCliente(row) {
  return new Cliente({
    id: row.id_usuario.toString(),
    nombres: row.nombres,
    cedula: row.cedula,
    email: row.email,
    celular: row.celular,
    estado: row.estado,
  });
}

class ClienteRepositoryPostgres {
  async save(cliente) {
    const row = await ClienteModel.create({
      nombres: cliente.nombres,
      cedula: cliente.cedula,
      email: cliente.email,
      celular: cliente.celular,
    });

    return toCliente(row);
  }

  async findById(id) {
    const row = await ClienteModel.findByPk(id);
    if (!row) return null;

    return toCliente(row);
  }

  async findAll() {
    const rows = await ClienteModel.findAll({
      where: { estado: true },
      order: [["id_usuario", "ASC"]],
    });
    return rows.map(toCliente);
  }

  async deleteById(id) {
    await ClienteModel.update({ estado: false }, { where: { id_usuario: id } });
  }
}

module.exports = ClienteRepositoryPostgres;
