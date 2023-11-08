//const Carrito = require('../models/Carrito');
//const Tipo_Usuario = require('../models/Tipo_Usuario');

module.exports=(sequelize,DataTypes)=>{
    const Usuario = sequelize.define("Usuario",{
                id_usuario:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                DNI:{
                    type:DataTypes.INTEGER
                },
                nombre:{
                    type:DataTypes.STRING
                },
                apellido:{
                    type:DataTypes.STRING
                },
                fecha_nacimiento:{
                    type:DataTypes.DATE
                },
                direccion:{
                    type:DataTypes.STRING
                },
                foto_usuario:{
                    type:DataTypes.STRING
                },
                email:{
                    type:DataTypes.STRING
                },
                password:{
                   type:DataTypes.STRING 
                },
                // Timestamps
                createdAt:{ type:DataTypes.DATE},
                updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'usuarios'
                    timestamps:true
                }         

    );
    Usuario.associate = function(modelos){
        Usuario.belongsTo(modelos.Tipo_Usuario,{
            as:'usuario_tipo',
            foreignKey:'id_tipo'
        })
    }
    Usuario.associate=function(modelos){
        Usuario.hasMany(modelos.Carrito,{
            as:'usuario_carrito',
            foreignKey:'id_usuario'
        })
    }
    return Usuario;

}