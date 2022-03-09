class Cliente {
	constructor(nome, email, cpf, saldo) {
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.saldo = saldo;
	}
	depositar = (valor) => this.saldo += valor;
	exibirSaldo = () => console.log(this.saldo);
}

class ClientePoupanca extends Cliente {
	constructor(nome, email, cpf, saldo, saldoPoupanca) {
		super(nome, email, cpf, saldo);
		this.saldoPoupanca = saldoPoupanca;
	}
	depositarPoupanca = (valor) => this.saldoPoupanca += valor;
	exibirSaldoPoupanca = () => console.log(this.saldoPoupanca);
}

class ClienteMaster extends ClientePoupanca {
	constructor(nome, email, cpf, saldo, saldoPoupanca) {
		super(nome, email, cpf, saldo, saldoPoupanca);
	}
	sacar = (valor) => this.saldo -= valor;
	sacarPoupanca = (valor) => this.saldoPoupanca -= valor;
}

const cliente = new ClientePoupanca("André", "andre@email.com", "11122233300", 100, 200);~

console.log(cliente);
cliente.depositar(10);
cliente.exibirSaldo();
cliente.depositarPoupanca(50);
cliente.exibirSaldoPoupanca();
console.log(cliente);

const clienteMaster = new ClienteMaster("Edmar", "edmar@email.com", "22233344400", 1000, 2000);
console.log(clienteMaster);
clienteMaster.sacar(500);
clienteMaster.exibirSaldo();
clienteMaster.sacarPoupanca(100);
clienteMaster.exibirSaldoPoupanca();