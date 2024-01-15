const express = require('express')
const router = express.Router();
const path = require('path');
const multer= require('multer');
const usuariosController=require('../controllers/usuariosController.js')
// const usuariosAPIController=require('../controllers/api/usuariosAPIController.js')
const gestMid=require('../../middlewares/guestMiddleware.js')
const authMid=require('../../middlewares/authMiddleware.js')
const {body, check} = require('express-validator');
const { userInfo } = require('os');

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname,'../../public/img/usuarios'))
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
const uploadFile= multer({storage});

const validations= 
//RUTAS
router.get('/', usuariosController.list);
router.get('/register',gestMid,usuariosController.register)
router.post('/create' /*[
    check('nombre').isLength({min:3}),
    check('apellido').notEmpty(),
    check('dni').notEmpty().isLength({min:8}),
    check('fecha_nacimiento').notEmpty(),
    check('domicilio').notEmpty(),
    check('correo_electronico').notEmpty().isEmail(),
    check('contrasenia').notEmpty().isLength({min:8}),
    check('confirmar_comtrasenia').isLength({min:8}),
    check('foto_usuario').custom((value, { req }) => {
        let file = req.file;
        
        let extensiones = ['.png', '.jpg', '.gif', '.svg'] 
        if(file){
           let fileExtension = path.extname(file.originalname); 
           extensiones.includes(fileExtension) 
        }
    })
]*/,uploadFile.single('foto_usuario'), usuariosController.createUser);
// router.post('/register',uploadFile.single('foto_usuario'), usuariosController.processRegister)
//formulario de login
router.get ('/login',gestMid,usuariosController.login);
router.get('/profile',authMid,usuariosController.profile);
//procesamiento del login
router.post('/login',[
    check('email').isEmail(),
    check('password').isLength({min:8}).withMessage(`La contraseña tiene que tener 8 caracteres.`)
],usuariosController.processLogin)
//salir de Session
router.get('/logout',usuariosController.logout)

router.get('/detail/:id',authMid, usuariosController.detail);

router.get('/editar/:id',authMid, usuariosController.edit);
router.post('/editar/:id',authMid, usuariosController.update);


//API
// router.get('/api',usuariosAPIController.listado)
// router.get('/api/:id',usuariosAPIController.detalle)


module.exports=router;