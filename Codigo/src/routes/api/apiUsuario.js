const express = require('express');
const router = express.Router();
const usuariosAPIController = require('../../controllers/api/usuariosAPIController')

router.get('/', usuariosAPIController.listado);

router.get('/detail/:id', usuariosAPIController.detalle)

module.exports = router