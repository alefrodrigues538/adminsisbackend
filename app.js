const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

//ROTAS
const index = require('./api/routes/index');
const clientes = require('./api/routes/clientesRoute');

app.use('/', index);
app.use('/clientes',clientes);

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;