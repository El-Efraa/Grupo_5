//const Plato = require('../models/Plato');

module.exports=(sequelize,DataTypes)=>{
    const Receta = sequelize.define("Receta",{
                id_receta:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                descripcion:{
                    type:DataTypes.STRING
                },
                ingredientes:{
                    type:DataTypes.STRING
                },
                dificultad:{
                    type:DataTypes.STRING
                },
                tiempo_preparacion:{
                    type:DataTypes.TIME
                }
            },
                // Timestamps
               // createdAt:{ type:DataTypes.DATE},
                //updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'recetas'
                    timestamps:false
                }         

    );
    Receta.associate = function(modelos){
        Receta.hasOne(modelos.Plato,{
            as:'recetas_plato',
            foreignKey:'id_receta'

        })
    }
    return Receta;
}