//const Carrito = require('../models/Carrito');
//const Categoria_plato = require('../models/Categoria_plato');
//const Receta = require('../models/Receta');

module.exports=(sequelize,DataTypes)=>{

    const Plato = sequelize.define("Plato",{
                id_plato:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                nombre:{
                    type:DataTypes.STRING
                },
                descripcion:{
                    type:DataTypes.STRING
                },
                imagen:{
                    type:DataTypes.STRING
                },
                precio:{
                    type:DataTypes.REAL
                },
                // Timestamps
                createdAt:{ type:DataTypes.DATE},
                updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'platos'
                    timestamps:true
                }         

    );
    Plato.associate = function(modelos){
        Plato.belongsTo(modelos.Receta,{
            as:'plato_receta',
            foreignKey:'id_receta'
        })
    }
    Plato.associate = function(modelos){
        Plato.belongsTo(modelos.Categoria_plato,{
            as:'plato_cat',
            foreignKey:'id_categoria'
        })
    }
    Plato.associate=function(modelos){
        Plato.belongsTo(modelos.Carrito,{
            as:'plato_carrito',
            foreignKey:'id_plato'
        })
    }

    return Plato;

}