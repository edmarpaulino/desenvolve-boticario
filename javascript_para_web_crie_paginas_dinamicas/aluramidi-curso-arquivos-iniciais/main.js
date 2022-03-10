function tocaSom(seletor) {
	const elemento = document.querySelector(seletor);
	if (elemento === null || elemento.localName !== 'audio') {
		console.log('Elemento não encontrado ou seletor inválido!');
	} else {
		elemento.play();
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
	const tecla = listaDeTeclas[i];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`;

	tecla.onclick = () => tocaSom(idAudio);

	tecla.onkeydown = (evento) => {
		if (evento.code === 'Enter' || evento.code === 'Space') {
			tecla.classList.add('ativa');
		};
	};
	tecla.onkeyup = () => tecla.classList.remove('ativa');
}
