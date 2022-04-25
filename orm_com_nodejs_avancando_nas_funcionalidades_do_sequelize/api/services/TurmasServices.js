const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class TurmasServices extends Services {
	constructor () {
		super('Turmas');
	}
	// métodos específicos do controlador de Turmas

	async pegaTodosOsRegistros(data_inicial, data_final) {
		const where = {};
		// data_inicial || data_final ? where.data_inicio = {} : null;
		// data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
		// data_final ? where.data_inicio[Op.lte] = data_final : null;
		if (data_inicial || data_final) where.data_inicio = {};
		if (data_inicial) where.data_inicio[Op.gte] = data_inicial;
		if (data_final) where.data_inicio[Op.lte] = data_final;
		return database[this.nomeDoModelo].findAll({ where });
	}
}

module.exports = TurmasServices;
