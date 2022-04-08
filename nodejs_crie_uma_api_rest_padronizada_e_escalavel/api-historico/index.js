const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const historico = [];

app.post("/api/historico", (req, res) => {
	try {
		if (!req.body.url || !req.body.dataDeAcesso) {
			throw new Error(`Os campos 'url' e 'dataDeAcesso' são obrigatórios e não podem estar vazios!`);
		}
		const site = {
			url: req.body.url,
			dataDeAcesso: req.body.dataDeAcesso
		}
		historico.push(site);
		res.status(201);
		res.end();
	} catch (erro) {
		res.status(400);
		res.send(
			JSON.stringify({
				mensagem: erro.message
			})
		);
	}
});

app.get("/api/historico", (req, res) => {
	res.status(200);
	res.send(
		JSON.stringify(historico)
	);
});

app.listen(3004, () => console.log("API no ar"));