// const database = require('../models');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const { TurmasServices } = require('../services');
const turmasServices = new TurmasServices();

class TurmaController {
	static async pegaTodasAsTurmas(req, res) {
		const { data_inicial, data_final } = req.query;
		try {
			const todasAsTurmas = await turmasServices.pegaTodosOsRegistros(data_inicial, data_final);
			return res.status(200).json(todasAsTurmas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaTurma(req, res) {
		const { id } = req.params;
		try {
			const umaTurma = await turmasServices.pegaUmRegistro(id);
			return res.status(200).json(umaTurma);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaTurma(req, res) {
		const novaTurma = req.body;
		try {
			const novaTurmaCriada = await turmasServices.criaUmRegistro(novaTurma);
			return res.status(200).json(novaTurmaCriada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizaTurma(req, res) {
		const { id } = req.params;
		const novasInfos = req.body;
		try {
			await turmasServices.atualizaRegistro(novasInfos, { id: Number(id) });
			const turmaAtualizada = await database.Turmas.findOne({
				where: {
					id: Number(id)
				}
			});
			return res.status(200).json(turmaAtualizada);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async apagaTurma(req, res) {
		const { id } = req.params;
		try {
			await turmasServices.apagaRegistro(id);
			return res.status(200).json({ mensagem: `id ${id} deletado` });
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async restauraTurma(req, res) {
		const { id } = req.params;
		try {
			await turmasServices.restauraRegistro(id);
			return res.status(200).json({ mensagem: `id ${id} foi restaurado com sucesso` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = TurmaController;
