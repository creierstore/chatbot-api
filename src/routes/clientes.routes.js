const Router = require("express");
const {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
  getCliente,
  getClienteTelefono
} = require("../controllers/clientes.controller");

const router = Router();

router.get("/clientes", getClientes);
router.post("/clientes", createCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);
router.get("/clientes/:id", getCliente);
router.get("/clientes-phone/:telephone", getClienteTelefono);

module.exports = router;
