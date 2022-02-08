// let x = '';
// console.log(x);
// x = 'oi';

// Uma função possuí dois momentos:
// 1) quando a gente declara a função igual abaixo
function imprimeTexto(texto) {
	console.log(texto.toString());
}
// 2) quando a gente chama/executa a função (uma ou mais vezes)
imprimeTexto('oi');
imprimeTexto('outro texto');

function soma() {
	return 2 + 2;
}

console.log(soma());
imprimeTexto(soma());
