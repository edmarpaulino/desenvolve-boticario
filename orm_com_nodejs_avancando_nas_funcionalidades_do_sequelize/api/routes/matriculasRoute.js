const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router
    .get('/pessoas/:estudanteId/matriculas', MatriculaController.pegaMatriculas)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.pegaUmaMatricula)
    .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
    .post('/pessoas/:estudanteId/matriculas', MatriculaController.criaMatricula)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.apagaMatricula);

module.exports = router;
