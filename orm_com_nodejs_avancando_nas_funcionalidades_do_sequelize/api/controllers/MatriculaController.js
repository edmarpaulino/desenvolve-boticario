const { MatriculasServices } = require('../services');
const matriculasServices = new MatriculasServices();

class MatriculaController {
    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const pessoa = await matriculasServices.pegaUmRegistro(estudanteId);
            // TODO
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const umaMatricula = await matriculasServices.pegaUmRegistro({
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            });
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = {
            ...req.body,
            estudante_id: Number(estudanteId)
        };
        try {
            const novaMatriculaCriada = await matriculasServices.criaUmRegistro(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await matriculasServices.atualizaRegistro(novasInfos, {
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            });
            const matriculaAtualizada = await matriculasServices.pegaUmRegistro({
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            })
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await matriculasServices.apagaUmRegistro({
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
            });
            return res.status(200).json({
                mensagem: `id ${matriculaId} foi apagado com sucesso`
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try {
            const todasAsMatriculas = await matriculasServices.pegaRegistrosPorTurma({
                    turma_id: Number(turmaId),
                    status: 'confirmado'
            });
            return res.status(200).json(todasAsMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2;
        try {
            const turmasLotadas = await matriculasServices
                .pegaRegistrosDeTurmasLotadas(lotacaoTurma, { status: 'confirmado' });
            return res.status(200).json(turmasLotadas.count);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = MatriculaController;
