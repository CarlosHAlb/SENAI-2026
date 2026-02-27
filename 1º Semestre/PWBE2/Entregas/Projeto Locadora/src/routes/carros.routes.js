const express = require("express");

const router = express.Router();

const carrosController = require("../controllers/carros.controller.js");

router.post("/cadastrar", carrosController.cadastrarCarro);
router.get("/listar", carrosController.listarCarros);
router.get("/buscar/:id", carrosController.buscarCarro);
router.put("/atualizar/:id", carrosController.atualizarCarro);
router.delete("/deletar/:id", carrosController.deletarCarro);

module.exports = router;