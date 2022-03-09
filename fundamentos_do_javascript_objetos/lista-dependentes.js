const cliente = {
	nome: 'André',
	idade: 36,
	cpf: '12345678900',
	fones: ['5535991234567', '5535991235678'],
	dependentes: [
		{
			nome: 'Sara Silva',
			parentesco: 'filha',
			dataNascimento: '20/03/2011'
		},
		{
			nome: 'Samia Maria',
			parentesco: 'filha',
			dataNascimento: '04/01/2014'
		}
	]
};

cliente.dependentes.push({
	nome: 'Samia Maria',
	parentesco: 'filha',
	dataNascimento: '04/01/2014'
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === '04/01/2014');
console.log('----------------');
console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);