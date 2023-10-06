const express = require('express')
const router = express.Router();
const path = require('path');
const usuariosController=require('../controllers/usuariosController.js')
const gestMid=require('../../middlewares/guestMiddleware.js')

const {check} = require('express-validator');


//router.get('register',gestMid,usuariosController.register)
//formulario de login
router.get ('/login',gestMid,usuariosController.login)
//procesamiento del login
router.post('/login',[
    check('email').isEmail(),
    check('password').isLength({min:8}).withMessage(`La contraseña tiene que tener 8 caracteres.`)
],usuariosController.processLogin)
//salir de Session
router.get('/logout',usuariosController.logout)
module.exports=router;