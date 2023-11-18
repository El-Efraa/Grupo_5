
module.exports=(sequelize,DataTypes)=>{
    const Categoria_plato = sequelize.define("Categoria_plato",{
                id_categoria:{
                    type:DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                    
                },
                nombre:{
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
                    //tablename:'Categoria_platos'
                    timestamps:false
                }         

    );

    Categoria_plato.associate = function(modelos){
        Categoria_plato.hasMany(modelos.Plato,{
            as:'cat_plato',
            foreignKey:'categoria_id'
        })
    }
    return Categoria_plato;

}