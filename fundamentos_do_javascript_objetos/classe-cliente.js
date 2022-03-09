class Cliente {
	constructor(nome, email, cpf, saldo){
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.saldo = saldo;
	};
	depositar(valor) {
		this.saldo += valor;
	}
	exibirSaldo() {
		console.log(this.saldo);
	}
}

const edmar = new Cliente("Edmar", "edmar@email.com", "11122233300", 10);
edmar.exibirSaldo();
edmar.depositar(90);
edmar.exibirSaldo();