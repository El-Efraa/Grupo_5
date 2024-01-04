const express = require('express')
const router = express.Router();
const carritoController=require('../controllers/carritoController.js')
const authMid=require('../../middlewares/authMiddleware.js')

router.get ('/carrito',authMid,carritoController.index)

//router.post('/carrito',authMid,carritoController.finalizarCompra)

module.exports=router;