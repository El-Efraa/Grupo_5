function authLog(req,res,next){
    if(!req.session.usuarioLogueado){
        return res.direct('/user/login')
    }
    next();

}
module.exports=authLog;