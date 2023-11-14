
module.exports=(sequelize,DataTypes)=>{
    const Carrito = sequelize.define("Carrito",{
                id_carrito:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primarykey:true
                },
                cantidad:{
                    type:DataTypes.INTEGER,
                    allowNull: false
                    
                },
                importe:{
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
                    //tablename:'carritos'
                    timestamps:true
                }         

    );
    Carrito.associate=function(modelos){
        Carrito.hasMany(modelos.Plato,{
            as:'carrito_plato',
            foreignKey:'plato_id'
        })
    }
    Carrito.associate=function(modelos){
        Carrito.belongsTo(modelos.Usuario,{
            as:'carrito_usuario',
            foreignKey:'usuario_id'
        })
    }
    Carrito.associate=function(modelos){
        Carrito.belongsTo(modelos.Venta,{
            as:'carrito_venta',
            foreignKey:'carrito_id'
        })
    }
    return Carrito;

}