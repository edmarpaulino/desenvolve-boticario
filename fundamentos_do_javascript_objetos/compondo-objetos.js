const cliente = {
	nome: 'André',
	idade: 36,
	cpf: '12345678900',
	email: 'andre@email.com',
	fones: ['5535991234567', '5535991236789']
};

cliente.dependentes = {
	nome: 'Sara',
	parentesco: 'filha',
	dataNascimento : '20/03/2011'
};

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente);