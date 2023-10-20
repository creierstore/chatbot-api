const Router = require("express");
const {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  getProducto,
  buscarProductoPorString,
  getProductoByCustomQuery
} = require("../controllers/productos.controller");

const router = Router();

router.get("/productos", getProductos);
router.post("/productos", createProducto);
router.put("/productos/:id", updateProducto);
router.delete("/productos/:id", deleteProducto);
router.get("/productos/:id", getProducto);
router.get("/productos/buscar/:q", buscarProductoPorString);
router.post("/productos/custom-query", getProductoByCustomQuery);

module.exports = router;
