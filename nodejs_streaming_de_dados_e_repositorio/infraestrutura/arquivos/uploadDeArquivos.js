const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
	const tiposValidos = [ '.jpg', '.png', '.jpeg' ];
	const tipo = path.extname(caminho);
	const tipoEhValido = tiposValidos.indexOf(tipo) !== -1;

	if (tipoEhValido) {
		const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;
		
		fs.createReadStream(caminho)
		.pipe(fs.createWriteStream(novoCaminho))
		.on('finish', () => callbackImagemCriada(false, novoCaminho));
	} else {
		const erro = `Tipo '${tipo}' é inválido`;
		callbackImagemCriada(erro);
		console.log('Erro! Tipo inválido.')
	}
}
