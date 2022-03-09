const cliente = {
	nome: 'André',
	idade: 36,
	cpf: '12345678900',
	email: 'andre@email.com'
};

const chaves = ['nome', 'idade', 'cpf', 'email'];

// for (let i = 0; i < chaves.length; i++) {
// 	console.log(cliente[chaves[i]]);
// }

chaves.forEach( info => console.log(cliente[info]));

console.log(cliente['nome']);
console.log(cliente['conta']);