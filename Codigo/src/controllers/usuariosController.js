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
                if(bcrypt.compare(req.body.password,usuarios[i].password)){
                    usuarioLogueado= usuarios[i];
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
            res.cookie('userEmail',req.body.email,{maxAge:(1000*60)*3})
        }
        res.redirect('/')
    }else{
        return res.render('login',{errors:errors.errors});
    }
    
},
logout: (req,res)=>{
    req.session.destroy();
}

}
module.exports=controller;