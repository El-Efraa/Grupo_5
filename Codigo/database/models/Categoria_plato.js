//const Plato = require('../models/Plato');

module.exports=(sequelize,DataTypes)=>{
    const Categoria_plato = sequelize.define("Categoria_plato",{
                id_categoria:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                nombre:{
                    type:DataTypes.STRING
                },
                descripcion:{
                    type:DataTypes.STRING
                }},
                // Timestamps
               // createdAt:{ type:DataTypes.DATE},
                //updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'Categoria_plato'
                    timestamps:false
                }         

    );

    Categoria_plato.associate = function(modelos){
        Categoria_plato.hasMany(modelos.Plato,{
            as:'cat_plato',
            foreignKey:'id_categoria'
        })
    }
    return Categoria_plato;

}