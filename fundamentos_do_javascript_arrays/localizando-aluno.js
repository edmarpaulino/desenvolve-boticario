const alunos = [ 'João', 'Juliana', 'Caio', 'Ana' ];
const mediaDosAlunos = [ 10, 7, 9, 6 ];
let listaDeNotasEAlunos = [ alunos, mediaDosAlunos ];

const exibeNomeNota = (nomeDoAluno) => {
	if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
		let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
		return (`${listaDeNotasEAlunos[0][indice]}, sua nota é ${listaDeNotasEAlunos[1][indice]}.`);
	} else {
		return (`${nomeDoAluno} não tem cadastro!`);
	}
};

console.log(exibeNomeNota('João'));
console.log(exibeNomeNota('Juliana'));
console.log(exibeNomeNota('Caio'));
console.log(exibeNomeNota('Ana'));
console.log(exibeNomeNota('Laura'));