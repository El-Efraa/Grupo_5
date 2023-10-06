function guestLog(req,res,next){
    if(req.session.usuarioLogueado){
        res.redirect('/')
    }
    next()

}
module.exports= guestLog;