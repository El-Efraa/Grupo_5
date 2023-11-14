const Plato = require('../models/Plato');

module.exports=(sequelize,DataTypes)=>{
    const Receta = sequelize.define("Receta",{
                id_receta:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    primarykey:true,
                    allowNull: false
                },
                descripcion:{
                    type:DataTypes.STRING(500),
                    allowNull: false
                },
                ingredientes:{
                    type:DataTypes.STRING,
                    allowNull: false
                }, 
                tiempo_preparacion:{
                    type:DataTypes.TIME,
                    allowNull: false
                },
                dificultad:{
                    type:DataTypes.TEXT
                },
               
            },
                // Timestamps
               // createdAt:{ type:DataTypes.DATE},
                //updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'recetas'
                    timestamps:false
                }         

    );
    Receta.associate = function(models){
        Receta.hasOne(models.Plato,{
            as:'recetas_plato',
            foreignKey:' receta_id'

        })
    }
    return Receta;
}