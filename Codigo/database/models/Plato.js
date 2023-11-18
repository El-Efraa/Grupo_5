let modelos = require('../models')

module.exports=(sequelize,DataTypes)=>{

    const Plato = sequelize.define("Plato",{
                id_plato:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                nombre:{
                    type:DataTypes.STRING,
                    allowNull: false
                },
                descripcion:{
                    type:DataTypes.STRING,
                    allowNull: false
                },
                imagen:{
                    type:DataTypes.STRING,
                    allowNull: false
                },
                precio:{
                    type:DataTypes.REAL,
                    allowNull: false
                },
                // Timestamps
                /*createdAt:{ 
                    type:DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false,
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false
                }*/
                receta_id:{
                    type: DataTypes.INTEGER,
                    foreignKey: true,
                    references: {
                        model: 'recetas',
                        key: 'id_receta'
                    }
                },
                categoria_id:{
                    type: DataTypes.INTEGER,
                    foreignKey: true,
                    references: {
                        model: 'categoria_platos',
                        key: 'id_categoria'
                    }
                }},
                {
                    tablename:'Platos',
                    timestamps: true,
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }         

    );
    Plato.associate = function(modelos){
        Plato.belongsTo(modelos.Receta,{
            as:'plato_receta',
            foreignKey:'receta_id',
            foreignKeyConstraint: true
        })
    }
    Plato.associate = function(modelos){
        Plato.belongsTo(modelos.Categoria_plato,{
            as:'plato_cat',
            foreignKey:'categoria_id',
            foreignKeyConstraint: true
        })
    }
    /*Plato.associate=function(modelos){
        Plato.belongsTo(modelos.Carrito,{
            as:'plato_carrito',
            //foreignKey:'plato_id',
            //foreignKeyConstraint: true
        })
    }*/

    return Plato;

}