const express = require("express");

const router = express.Router();

const clientesController = require("../controllers/clientes.controller.js");

router.post("/cadastrar", clientesController.cadastrarCliente);
router.get("/listar", clientesController.listarClientes);
router.get("/buscar/:id", clientesController.buscarCliente);
router.put("/atualizar/:id", clientesController.atualizarCliente);
router.delete("/deletar/:id", clientesController.deletarCliente);

module.exports = router;