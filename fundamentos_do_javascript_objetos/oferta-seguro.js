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
	],
	saldo: 100,
	depositar: function (valor) {
		this.saldo += valor;
	}
};

function oferecerSeguro (obj) {
	const propsClientes = Object.keys(obj);
	if (propsClientes.includes("dependentes")) {
		console.log(`Oferta de seguro devida para ${obj.nome}`)
	}
}

oferecerSeguro(cliente);

console.log(Object.values(cliente));
console.log(Object.entries(cliente));