// Parâmetros de função
function soma(num1, num2) {
	return num1 + num2;
}

console.log(soma(21, 21));
console.log(soma(-21, 21));
console.log(soma(-21, -21));

// parâmetro X argumentos

// ordem dos parâmetros 

function nomeIdade(nome, idade) {
	return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Joaquim', 47));
console.log(nomeIdade(47, 'Joaquim'));

function multiplica(num1 = 1, num2 = 1) {
	return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));
console.log(multiplica(soma(4, 5)));
console.log(multiplica());
