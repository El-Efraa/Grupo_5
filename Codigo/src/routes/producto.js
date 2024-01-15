const express = require ('express');
const path = require('path');
const router =express.Router();
const multer= require('multer');
const gestMid=require('../../middlewares/guestMiddleware.js')
const authMid=require('../../middlewares/authMiddleware.js')
const productoController=require("../controllers/productoController")

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname,'../../public/img/productos'))
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
const uploadFile= multer({storage});

router.get('/', productoController.index)

router.get ('/create', productoController.create)
router.post('/create',uploadFile.single('imagen'), productoController.store)

router.get('/detail/:id',authMid,productoController.detalle)

router.get('/edit/:id',authMid, productoController.edit);
router.put('/edit/:id',authMid,uploadFile.single('imagen'), productoController.update);

router.get('/delete/:id',authMid, productoController.mostrarEliminar);
router.delete('/delete/:id',authMid,productoController.destroy);

router.post('/search', productoController.search)

module.exports=router;
