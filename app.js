const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())

app.use('/', require("./src/routes/productos.routes"));
app.use('/', require("./src/routes/categorias.routes"));
app.use('/', require("./src/routes/clientes.routes"));
app.use('/', require("./src/routes/pedidos.routes"));
app.use('/', require("./src/routes/pedido-detalles.routes"));
app.use('/', require("./src/routes/whatsapp.routes"));
app.use('/', require('./src/routes/webhooks.routes'));
app.use('/', require('./src/routes/servicios.routes'));


module.exports = app;
