
module.exports=(sequelize,DataTypes)=>{
    const Tipo_Usuario = sequelize.define("Tipo_Usuario",{
                id_tipo:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey:true
                },
                tipo:{
                    type:DataTypes.STRING(100),
                    allowNull: false
                },
                descripcion:{
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
            as:'tipo_user',
            foreignKey:'tipo_usuario'
        })
    }
    return Tipo_Usuario;

}