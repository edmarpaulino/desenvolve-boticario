// expressão de função
// Se comporta como uma varíavel

const soma = function(num1, num2) {return num1 + num2};
console.log(soma(1, 1));

// Funções e var são 'listadas' no topo do arquivo  (hoisting)
function apresentar() {
	return 'olá';
}
