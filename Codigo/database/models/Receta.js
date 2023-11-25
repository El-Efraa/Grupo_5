const Plato = require('../models/Plato');

module.exports=(sequelize,DataTypes)=>{
    const Receta = sequelize.define("Receta",{
                id_receta:{
                    type:DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
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
                {   
                    tableName:'recetas',
                    timestamps:false
                }         

    );
    Receta.associate = function(modelos){
        Receta.hasOne(modelos.Plato,{
            as:'recetas_plato',
            foreignKey:'receta_id',
        })
    }
    return Receta;
}