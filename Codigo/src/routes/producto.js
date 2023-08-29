const express = require ('express');
const router =express.Router();
const productoController=require("../controllers/productoController")


router.get ('/regionales',productoController.regionales)

module.exports=router;
