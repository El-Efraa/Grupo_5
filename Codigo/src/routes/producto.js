const express = require ('express');
const app = express();
const router =express.Router();
const multer= require('multer');
const productoController=require("../controllers/productoController")

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/img')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
const uploadFile= multer({storage});

router.get('/', productoController.index)

router.get ('/regionales',productoController.regionales)

router.get ('/create', productoController.create)
router.post('/create',uploadFile.single('image'), productoController.store)

router.get ('/edit', productoController.edit);

module.exports=router;
