const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let {check, validationResult, body} = require("express-validator")

const productsFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../../database/models')


let controller ={

login:(req, res) => {
    return  res.render('login')
},
processLogin: function(req,res){
    let errors= validationResult(req);
    let usuarioLogueado;
    console.log(errors.isEmpty());
    if(errors.isEmpty()){  
        db.Usuario.findAll()
        .then(function(usuario){
            for(let i=0;i<usuario.length;i++){
                if(usuario[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password,usuario[i].contraseña)){
                        usuarioLogueado= usuario[i];
                        delete usuarioLogueado.contraseña;
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
        })
        /*
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
        */
       
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
/* processRegister: (req, res) => {

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
    }, */
    profile:(req,res)=>{
        return res.render('usuarios/perfil',{
            user: req.session.usuarioLogueado
        })
    },
    createUser: (req, res) => {
        let errors=validationResult(req);
        console.log(errors.isEmpty());
        console.log(req.body, req.file);
        if(errors.isEmpty()){
            
           if(req.body.contrasenia===req.body.confirmar_contrasenia){
            let password= req.body.contrasenia

            let passEncriptada= bcrypt.hashSync(password, 4)
            

            let usuarioData = {
                DNI: req.body.dni,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha_nacimiento: req.body.fecha_nacimiento,
                direccion: req.body.domicilio,
                foto_usuario: req.file.filename,
                email: req.body.correo_electronico,
                contraseña: passEncriptada,
                tipo_usuario: 2
            }

            console.log(req.body)

            db.Usuario.create(usuarioData)
                .then(function(resultado) {
                    res.redirect('/')
                })
                console.log(usuarioData) 
        }else {
            res.render('registro')

        } 
        }else{
            res.send(errors.array())
        }
    
    },
    list: (req, res) => {
        db.Usuario.findAll()
            .then(function(usuarios) {
                res.render('usuarios/lista_usuarios', {usuarios: usuarios})
            })
    },
    detail: (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                res.render('usuarios/detalle-user', {user: user})
            })
    },
    edit: (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                res.render('usuarios/editar-user', {user: user})
            })
    },
    update: (req, res) => {
        // db.Usuario.findByPk(req.params.id)
        //     .then(user => {
        //         if(bcrypt.compareSync(req.body.contrasenia, user.contraseña)){
        //             if(req.body.nueva_contrasenia === req.body.confirmar_contrasenia){
        //                 let password = req.body.nueva_contrasenia
        //                 let passEncriptada = bcrypt.hashSync(password, 10);

        //                 let usuarioActualizado = {
        //                     nombre: req.body.nombre,
        //                     apellido: req.body.apellido,
        //                     DNI: req.body.dni,
        //                     fecha_nacimiento: req.body.fecha_nacimiento,
        //                     direccion: req.body.domicilio,
        //                     email: req.body.correo_electronico,
        //                     contraseña: passEncriptada 
        //                 }

        //                 db.Usuario.update(usuarioActualizado, {
        //                     where: {
        //                         id_usuario: req.params.id
        //                     }
        //                 })

        //                 res.redirect('/user/detail/' + req.params.id)
        //             }
        //         } else {
        //             console.log('error')
        //         }
        //     })

        db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            DNI: req.body.dni,
            fecha_nacimiento: req.body.fecha_nacimiento,
            direccion: req.body.domicilio,
            email: req.body.correo_electronico,
            
        }, {
            where : {
                id_usuario: req.params.id
            }
        })
        res.redirect('/user/detail/' + req.params.id)
    }


}
module.exports=controller;