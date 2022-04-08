// Precisamos iniciar a nossa API, antes de começar a trabalhar com nossos jogos.
// Então, vamos instalar os pacotes express e body-parser primeiro com o comando 
// npm install express body-parser.

// Depois, temos que criar um arquivo api.js para colocarmos todo nosso código,
// e então declaramos o pacote express e o instanciamos em uma variável chamada app.

// Com nossa aplicação declarada, precisamos chamar o pacote body-parser como bodyParser e
// utilizá-lo na nossa aplicação usando o método use() da variável app, passando o resultado
// de bodyParser.json() como parâmetro:

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Para que nossa API comece a receber requisições, temos que chamar o método app.listen() no
// final do arquivo, passando como primeiro parâmetro o número da porta que vamos escutar por
// requisições — usamos a porta 3000. E depois, como segundo parâmetro, passamos uma função
// que será executada quando a API escutando por novas requisições — nessa função, podemos apenas
// emitir uma mensagem no terminal avisando que está funcionando com console.log():

// Com isso, já podemos fazer requisições.
// Agora temos que declarar a nossa lista de jogos, com uma variável chamada jogosFavoritos
// como uma lista vazia — lembre-se de sempre colocar seu código antes de app.listen():

const jogosFavoritos = [];

// Depois, vamos precisar criar uma requisição para cadastrar um jogo na nossa variável e
// outra para exibir quais são nossos jogos favoritos.

// Primeiro, vamos usar o método POST para inserir um jogo na lista.
// No primeiro parâmetro vamos passar a rota da URL, então, vamos declarar /api para indicar
// que é uma rota de API, e juntar com /jogos para representar nossos documentos.
// No segundo parâmetro, vamos enviar uma função que recebe um objeto de requisição e
// resposta como parâmetros.

// Através dessa função podemos gerar a resposta da nossa requisição e atualizar nossa lista:

// Dentro dessa função, conseguimos acessar os dados da requisição na propriedade requisicao.body.
// Para verificar o nome da plataforma e do jogo, adicionamos uma condicional verificando se o
// objeto possui os campos nome e plataforma, caso não exista, vamos emitir um novo erro com a
// mensagem “Campos inválidos”.

// Depois dessa verificação, vamos executar o método jogosFavoritos.push() com os dados da
// requisição como parâmetro, assim conseguimos adicionar o jogo na nossa lista, então encerramos
// a requisição enviando os dados como resposta:

// Dentro da nossa verificação, estamos emitindo um erro caso os dados fornecidos estejam inválidos.
// Para enviar as informações sobre esse erro na requisição e comunicar ao cliente da API o que
// houve de errado, vamos criar um bloco try {} e colocar todo nosso código dentro dele, depois,
// colocamos outro bloco catch () {}, aceitando uma variável erro:

// No bloco catch () {}, vamos enviar na resposta da requisição, um objeto em JSON com a
// propriedade mensagem:

app.post("/api/jogos", (req, res) => {
	try {
		if (!req.body.nome || !req.body.plataforma) {
			throw new Error("Campos inválidos!");
		}
		jogosFavoritos.push(req.body);
		res.send(JSON.stringify(req.body));
	} catch (erro) {
		res.status(404).send(JSON.stringify({
			mensagem: erro.message
		}));
	}
});

// Como estamos querendo enviar todos os dados que temos, ou seja, nossa coleção de documentos,
// vamos chamar de /api/jogos com o método GET. Criamos também uma função que recebe um objeto
// de requisição e de resposta como parâmetros.

// Nessa função, vamos transformar nossa lista de jogosFavoritos em JSON e enviar essas informações
// na resposta com o método send():

app.get("/api/jogos", (req, res) => {
	res.send(JSON.stringify(jogosFavoritos));
});

app.delete("/api/jogos", (req, res) => {
	while (jogosFavoritos.length > 0) {
		jogosFavoritos.pop();
	}
	res.send(JSON.stringify({ mensagem: "Dados deletados" }));
});

app.listen(3003, () => console.log("API está funcionando"));