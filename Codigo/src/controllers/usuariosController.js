const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let {check, validationResult, body} = require("express-validator")

const productsFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let controller ={

login:(req, res) => {
    return  res.render('login')
},
processLogin: function(req,res){
    let errors= validationResult(req);
    let usuarioLogueado;
    if(errors.isEmpty()){  
        for(let i=0;i<usuarios.length;i++){
            if(usuarios[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password,usuarios[i].password)){
                    usuarioLogueado= usuarios[i];
                    delete usuarioLogueado.password;
                    break;
                }

            }
        }
        if(usuarioLogueado == undefined){
                return res.render('login',{errors: [
                    {msg:'Credenciales invalidas!!!'}
                ]})
        }
        req.session.usuarioLogueado=usuarioLogueado;
        if(req.body.recordarUser){
            res.cookie('userEmail',req.body.email,{maxAge:(1000*60)*2})
        }
        res.redirect('/')
    }else{
        return res.render('login',{errors:errors.errors});
    }
    
},
logout: (req,res)=>{
    res.clearCookie('userEmail')
    req.session.destroy();
    res.redirect("/");
},
register: (req, res) => {
    return  res.render('registro')
},
processRegister: (req, res) => {

    if(req.body.contrasenia===req.body.confirmar_contrasenia){
       idNuevoUsuario= 0;
    for(let i=0; i<usuarios.length; i++){
       if(idNuevoUsuario<usuarios[i].id){
          idNuevoUsuario++
       }
    }

    idNuevoUsuario= idNuevoUsuario+1

      let password= req.body.contrasenia

      let passEncriptada= bcrypt.hashSync(password, 10)

      let nuevoUsuario= {
         id: idNuevoUsuario, 
         firstName: req.body.nombre,
         lastName: req.body.apellido,
         fecha_nacimiento: req.body.fecha_nacimiento,
         domicilio: req.body.domicilio,
         foto_usuario: req.file.filename,
         email: req.body.correo_electronico,
         password: passEncriptada,
      }

      usuarios.push(nuevoUsuario);

      fs.writeFileSync(productsFilePath, JSON.stringify(usuarios, null, " "))

      console.log(nuevoUsuario) 

      res.redirect('/')
    } else {
        res.render('registro')
    }
    },
    profile:(req,res)=>{
        return res.render('usuarios/perfil',{
            user: req.session.usuarioLogueado
        })
    }

}
module.exports=controller;