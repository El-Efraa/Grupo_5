const express = require('express')
const router = express.Router();
const carritoController=require('../controllers/carritoController.js')

router.get ('/carrito',carritoController.index)

module.exports=router;