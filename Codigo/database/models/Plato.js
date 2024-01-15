let modelos = require('../models')

module.exports=(sequelize,DataTypes)=>{

    const Plato = sequelize.define("Plato",{
                id_plato:{
                    type:DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                nombre:{
                    type:DataTypes.STRING(255),
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
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Receta',
                        key: 'id_receta'
                    }, 
                },
                categoria_id:{
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Categoria_plato',
                        key: 'id_categoria'
                    },
                    allowNull: false
                }},
                {
                    tableName:'platos',
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
        Plato.belongsTo(modelos.Categoria_plato,{
            as:'plato_cat',
            foreignKey:'categoria_id',
            foreignKeyConstraint: true
        })
        Plato.belongsToMany(modelos.Carrito,{
            as:'platos_carritos',
            through:'art_carrito',
            foreignKey:'plato_id',
            otherKey:'carrito_id',
            foreignKeyConstraint: true
        })
    }


    return Plato;

}