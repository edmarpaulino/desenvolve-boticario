class Cliente {
	constructor(nome, email, cpf, saldo) {
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.saldo = saldo;
	}

	depositar = valor => this.saldo += valor;

	exibirSaldo = _ => console.log(this.saldo);
}

class ClientePoupanca extends Cliente {
	constructor(nome, email, cpf, saldo, saldoPoupanca) {
		super(nome, email, cpf, saldo);
		this.saldoPoupanca = saldoPoupanca;
	}

	depositarPoupanca = valor => this.saldoPoupanca += valor;

	exibirSaldoPoupanca = _ => console.log(this.saldoPoupanca);
}

const edmar = new ClientePoupanca("Edmar", "edmar@email.com", "11122233300", 100, 200);
console.log(edmar);
edmar.depositar(100);
edmar.exibirSaldo();
edmar.depositarPoupanca(200);
edmar.exibirSaldoPoupanca();
console.log(edmar);