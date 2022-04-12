const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
	.get('/pessoas', PessoaController.pegaTodasAsPessoas)
	.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
	.post('/pessoas', PessoaController.criaPessoa)
	.put('/pessoas/:id', PessoaController.atualizaPessoa)
	.delete('/pessoas/:id', PessoaController.apagaPessoa)
	.get('/pessoas/:estudanteId/matriculas', PessoaController.pegaTodasAsMatriculas)
	.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)
	.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)
	.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
	.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;
