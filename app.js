const express = require("express");
const productosRoutes = require("./src/routes/productos.routes");
const CategoriasRoutes = require("./src/routes/categorias.routes");
const ClientesRoutes = require("./src/routes/clientes.routes");
const PedidosRoutes = require("./src/routes/pedidos.routes");
const PedidosDetallesRoutes = require("./src/routes/pedido-detalles.routes");
const whatsappRoute = require("./src/routes/whatsapp.routes");

const app = express();
app.use(express.json());

app.use(productosRoutes);
app.use(CategoriasRoutes);
app.use(ClientesRoutes);
app.use(PedidosRoutes);
app.use(CategoriasRoutes);
app.use(PedidosDetallesRoutes);
app.use(whatsappRoute);

module.exports = app;
