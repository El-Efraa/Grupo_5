const fs = require('fs');
const path = require('path');
const usuarioFilePath = path.join(__dirname, '../src/data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));


function userLogged(req,res,next){
    res.locals.isLogged= false;
    let emailInCokie=req.cookies.userEmail;
    let userFromCookie=usuarios.find(oneUser => oneUser['email']===emailInCokie);

    if(userFromCookie){
        req.session.usuarioLogueado=userFromCookie;
    }

    if(req.session.usuarioLogueado){
        res.locals.isLogged=true;
        res.locals.userLogged=req.session.usuarioLogueado;
    }
    next();
}
module.exports= userLogged;