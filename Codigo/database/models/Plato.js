module.exports=(sequelize,DataTypes)=>{

    const Plato = sequelize.define("Plato",{
                id_plato:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey:true
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
                createdAt:{ 
                    type:DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false
                }},
                {
                    //tablename:'platos'
                    timestamps:true
                }         

    );
    Plato.associate = function(modelos){
        Plato.belongsTo(modelos.Receta,{
            as:'plato_receta',
            foreignKey:'receta_id'
        })
    }
    Plato.associate = function(modelos){
        Plato.belongsTo(modelos.Categoria_plato,{
            as:'plato_cat',
            foreignKey:'categoria_id'
        })
    }
    Plato.associate=function(modelos){
        Plato.belongsTo(modelos.Carrito,{
            as:'plato_carrito',
            foreignKey:'plato_id'
        })
    }

    return Plato;

}