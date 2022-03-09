function Cliente(nome, cpf, email, saldo) {
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = valor => this.saldo += valor;
}

const novoCliente = new Cliente('Edmar', '12345678900', 'edmar@email.com', 0);

console.log(novoCliente);
novoCliente.depositar(1000);
console.log(novoCliente);