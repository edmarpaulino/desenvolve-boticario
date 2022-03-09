const colecionador = {
	nome: 'João do Gibi',
	idade: 41,
	tipoDeColecao: ['quadrinhos'],
	contato: 'joao@email.com',
	adicionarTipo: function(propriedade, tipo) {
		this[propriedade].push(tipo);
	}
};

console.log(colecionador.nome);
console.log(colecionador['nome']);

for (let i = 0; i < 4; i++){
	colecionador.adicionarTipo('tipoDeColecao', "HQ" + i);
}

console.log(colecionador.tipoDeColecao);