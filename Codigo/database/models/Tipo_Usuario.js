
//const Usuario = require('../models/Usuario');
module.exports=(sequelize,DataTypes)=>{
    const Tipo_Usuario = sequelize.define("Tipo_Usuario",{
                id_tipo:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                tipo:{
                    type:DataTypes.STRING
                },
                descripcion_privilegios:{
                    type:DataTypes.STRING
                }},
                // Timestamps
               // createdAt:{ type:DataTypes.DATE},
                //updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'Tipo_usuarios'
                    timestamps:false
                }         

    );
    Tipo_Usuario.associate = function(modelos){
        Tipo_Usuario.hasMany(modelos.Usuario,{
            as:'tipo_usuario',
            foreignKey:'id_tipo'
        })
    }
    return Tipo_Usuario;

}