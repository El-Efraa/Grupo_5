const express = require('express')
const router = express.Router();
const mainController=require('../controllers/mainController.js')

router.get ('/',mainController.index)

router.get ('/registro',mainController.register)
//router.post ('/registro',mainController.createU)



module.exports=router;