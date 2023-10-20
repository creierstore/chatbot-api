
const router = require("express").Router();

const { createServicio, deleteServicio, getServicio, getServicios, updateServicio } = require("../controllers/servicios.controller");

router.get("/servicios", getServicios);
router.get("/servicios/:id", getServicio);
router.post("/servicios", createServicio);
router.put("/servicios/:id", updateServicio);
router.delete("/servicios/:id", deleteServicio);


module.exports = router;