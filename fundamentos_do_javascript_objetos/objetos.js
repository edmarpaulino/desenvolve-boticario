const listaCPFs = ['101010010101', '292929292929', '393939399393'];

// const cliente = ['nome', 'André', 'idade', 36];

const cliente = {
	nome: 'André',
	idade: 36,
	cpf: '123848237487328',
	email: 'andre@email.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0, 3));