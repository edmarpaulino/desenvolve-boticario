const nomes = [ 'Ana', 'Ju', 'Leo', 'Paula' ];

// nomes.forEach( nome => {
// 	console.log(nome)
// });

function imprimeNome(nome) {
	console.log(nome);
}

function imprimeNomeEIndice(nome, indice) {
	console.log(`[${indice}] = ${nome}`);
}

function imprimeNomeIndiceEArray(nome, indice, array) {
	console.log(`[${indice}] = ${nome} = ${array}`);
}

nomes.forEach(imprimeNome);
nomes.forEach(imprimeNomeEIndice);
nomes.forEach(imprimeNomeIndiceEArray);