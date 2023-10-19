const express = require("express");
const app = express();

app.use(express.json());

app.use('/', require("./src/routes/productos.routes"));
app.use('/', require("./src/routes/categorias.routes"));
app.use('/', require("./src/routes/clientes.routes"));
app.use('/', require("./src/routes/pedidos.routes"));
app.use('/', require("./src/routes/pedido-detalles.routes"));
app.use('/', require("./src/routes/whatsapp.routes"));
app.use('/', require('./src/routes/webhooks.routes'));


module.exports = app;
