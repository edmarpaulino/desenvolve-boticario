const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');

class MatriculasServices extends Services {
	constructor () {
		super('Matriculas');
	}

	async pegaUmRegistro(where = {}) {
		return database[this.nomeDoModelo].findAll({ where: { ...where } })
	}

	async apagaUmRegistro(where = {}) {
		return database[this.nomeDoModelo].destroy({ where: { ...where } });
	}

	async pegaRegistrosPorTurma(where = {}) {
		return database[this.nomeDoModelo].findAndCountAll({
			where: { ...where },
			limit: 20,
			order: [['estudante_id', 'DESC']]
		});
	}

	async pegaRegistrosDeTurmasLotadas(lotacaoTurma , where = {}) {
		return database[this.nomeDoModelo].findAndCountAll({
			where: { ...where },
			attributes: ['turma_id'],
			group: ['turma_id'],
			having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
		});
	}

}

module.exports = MatriculasServices;
