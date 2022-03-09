const objPersonagem = {
	nome: 'Gandalf',
	classe: 'mago',
	nivel: '20',
	aliado: {
		nome: 'Saruman',
		classe: 'mago'
	},
	status: 'desaparecido'
};

console.log(objPersonagem);

delete objPersonagem.aliado;

console.log(objPersonagem);

delete objPersonagem['status'];

console.log(objPersonagem);

const delProp = delete objPersonagem.nivel;
const delPropInexistente = delete objPersonagem.endereco;

console.log(delProp, delPropInexistente);