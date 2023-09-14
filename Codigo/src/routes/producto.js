const express = require ('express');
const app = express();
const router =express.Router();
const productoController=require("../controllers/productoController")
const  multer = require('multer')

router.get('/', productoController.index)

router.get ('/create', productoController.create)

router.get('/:id/detail',productoController.show)

router.get ('/:id/edit', productoController.edit);

module.exports=router;
