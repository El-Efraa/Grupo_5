const express = require ('express');
const path = require('path');
const router =express.Router();
const multer= require('multer');
const gestMid=require('../../../middlewares/guestMiddleware.js')
const authMid=require('../../../middlewares/authMiddleware.js')
const apiProductoController=require("../../controllers/api/apiProductoController.js")

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname,'../../../public/img'))
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
const uploadFile= multer({storage});

router.get('/', apiProductoController.index)
router.get('/detail/:id',apiProductoController.detalle)


module.exports=router;
