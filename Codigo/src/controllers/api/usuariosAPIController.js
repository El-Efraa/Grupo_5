const db = require('../../../database/models')

let controller={
    //API Usuarios
    listado:(req,res) =>{
        var aux =[];
        db.Usuario.findAll()
            .then((usuarios) => {
                usuarios.forEach((usuario)=>aux.push({
                        id:usuario.id_usuario,
                        dni: usuario.DNI,
                        name:usuario.nombre,
                        apellido: usuario.apellido,
                        email:usuario.email,
                        direccion: usuario.direccion,
                        image: usuario.foto_usuario,
                        detail:"www.localhost:3002/user/detail/"+usuario.id_usuario})
                    );
                return res.status(200).json({
                    count: usuarios.length,
                    users: aux,
                    status: 200
                })
            })
    },
    detalle: (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then((usuario) => {
                return res.status(200).json({
                    id: usuario.id_usuario,
                    DNI:usuario.DNI,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    fecha_nacimiento: usuario.fecha_nacimiento,
                    direccion: usuario.direccion,
                    email: usuario.email,
                    imagen:usuario.foto_usuario,
                    link_detalle: "www.localhost:3002/user/detail/"+usuario.id_usuario,
                    status: 200
                })
            })
    },
}
module.exports=controller;