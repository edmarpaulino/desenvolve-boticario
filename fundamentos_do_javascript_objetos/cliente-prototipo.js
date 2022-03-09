function Cliente(nome, cpf, email, saldo) {
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = valor => this.saldo += valor;
}

const edmar = new Cliente("Edmar", "11122233300", "edmar@email.com", 1000);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
	Cliente.call(this, nome, cpf, email, saldo);
	this.saldoPoup = saldoPoup;
}

const joaquim = new ClientePoupanca("Joaquim", "22233344400", "joaquim@email.com", 2000, 100);

ClientePoupanca.prototype.depositarPoup = valor => this.saldoPoup += valor;

console.log(edmar.hasOwnProperty("saldoPoup"));
console.log(joaquim.hasOwnProperty("saldoPoup"));
console.log(edmar instanceof Cliente);
console.log(typeof edmar);
console.log(typeof joaquim);
console.log(joaquim instanceof ClientePoupanca);
console.log(Function.prototype.isPrototypeOf(Cliente));
console.log(Cliente.constructor === Function);