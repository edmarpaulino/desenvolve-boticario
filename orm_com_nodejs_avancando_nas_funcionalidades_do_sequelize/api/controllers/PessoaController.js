// const database = require('../models');
// const Sequelize = require('sequelize');

const { PessoasServices } = require('../services');
const pessoasServices = new PessoasServices();

class PessoaController {
	static async pegaPessoasAtivas(req, res) {
		try {
			const todasAsPessoas = await pessoasServices.pegaRegistrosAtivos();
			return res.status(200).json(todasAsPessoas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
			return res.status(200).json(todasAsPessoas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params;
		try {
			const umaPessoa = await pessoasServices.pegaUmRegistro(id);
			return res.status(200).json(umaPessoa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaPessoa(req, res) {
		const novaPessoa = req.body;
		try {
			const novaPessoaCriada = await pessoasServices.criaUmRegistro(novaPessoa);
			return res.status(201).json(novaPessoaCriada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizaPessoa(req, res) {
		const { id } = req.params;
		const novasInfos = req.body;
		try {
			await pessoasServices.atualizaRegistro(novasInfos, { id: Number(id) });
			const pessoaAtualizada = await pessoasServices.pegaUmRegistro(id);
			return res.status(200).json(pessoaAtualizada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaPessoa(req, res) {
		const { id } = req.params;
		try {
			await pessoasServices.apagaRegistro(id);
			return res.status(200).json({ mensagem: `id ${id} foi apagado com sucesso` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async restauraPessoa(req, res) {
		const { id } = req.params;
		try {
			await pessoasServices.restauraRegistro(id);
			return res.status(200).json({ mensagem: `id ${id} foi restaurado com sucesso` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async cancelaPessoa(req, res) {
		const { estudanteId } = req.params;
		try {
			await pessoasServices.cancelaPessoasEMatriculas(Number(estudanteId));
			return res.status(200).json({
				message: `matrículas referente estudante ${estudanteId} canceladas`
			});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PessoaController;
