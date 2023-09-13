const express = require ('express');
const app = express();
const router =express.Router();
const productoController=require("../controllers/productoController")

router.get('/', productoController.index)

router.get ('/regionales',productoController.regionales)

router.get ('/create', productoController.create)

router.get ('/edit', productoController.edit);

module.exports=router;
