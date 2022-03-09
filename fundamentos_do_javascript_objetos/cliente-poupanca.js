function Cliente(nome, cpf, email, saldo) {
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = function(valor) {
		this.saldo += valor;
	}
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
	Cliente.call(this, nome, cpf, email, saldo);
	this.saldoPoup = saldoPoup;
}

const cliente = new ClientePoupanca(
									'edmar',
									'11122233300',
									'edmar@email.com',
									1000,
									2000
									);

console.log(cliente);

ClientePoupanca.prototype.depositarPoup = function(valor) {
	this.saldoPoup += valor;
}

cliente.depositarPoup(100);

console.log(cliente);

console.log(ClientePoupanca.prototype)

console.log(Object.getOwnPropertyDescriptor(cliente, "saldo"))