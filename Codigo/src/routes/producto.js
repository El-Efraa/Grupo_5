const express = require ('express');
const app = express();
const router =express.Router();
const productoController=require("../controllers/productoController")
const  multer = require('multer')

router.get('/', productoController.index)

router.get ('/create', productoController.create)

router.get('/detail/:id',productoController.detalle)

router.get ('/edit/:id', productoController.edit);

module.exports=router;
