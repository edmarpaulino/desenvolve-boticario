const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
	.get('/pessoas', PessoaController.pegaTodasAsPessoas)
	.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
	.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
	.post('/pessoas', PessoaController.criaPessoa)
	.put('/pessoas/:id', PessoaController.atualizaPessoa)
	.delete('/pessoas/:id', PessoaController.apagaPessoa)
	.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
	.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);

module.exports = router;
