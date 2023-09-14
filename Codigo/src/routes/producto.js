const express = require ('express');
const path = require('path');
const router =express.Router();
const multer= require('multer');
const productoController=require("../controllers/productoController")

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname,'../../public/img'))
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
const uploadFile= multer({storage});

router.get('/', productoController.index)

router.get ('/create', productoController.create)
router.post('/create',uploadFile.single('image'), productoController.store)

router.get('/detail/:id',productoController.detalle)

router.get('/edit/:id', productoController.edit);
router.put('/edit/:id',uploadFile.single('image'), productoController.update);

router.get('/delete/:id', productoController.mostrarEliminar);
router.delete('/delete/:id',productoController.destroy);

module.exports=router;
