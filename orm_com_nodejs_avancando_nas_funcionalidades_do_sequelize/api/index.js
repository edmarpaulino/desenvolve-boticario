const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = 3000;

routes(app);

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));

module.exports = app;
