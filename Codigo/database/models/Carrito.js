
module.exports=(sequelize,DataTypes)=>{
    const Carrito = sequelize.define("Carrito",{
                id_carrito:{
                    type:DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                cantidad:{
                    type:DataTypes.INTEGER,
                    allowNull: false
                    
                },
                importe:{
                    type:DataTypes.REAL,
                    allowNull: false
                },
                plato_id:{
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Plato',
                        key: 'id_plato'
                    }
                },
                usuario_id:{
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Usuario',
                        key: 'id_usuario'
                    }
                }},
                {
                    tableName:'carritos',
                    timestamps:true,
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }         

    );
    Carrito.associate=function(modelos){
        Carrito.belongsTo(modelos.Usuario,{
            as:'carrito_usuario',
            foreignKey:'usuario_id'
        })
        Carrito.belongsTo(modelos.Plato,{
            as:'carrito_plato',
            foreignKey:'plato_id'
        })
        Carrito.hasOne(modelos.Venta,{
            as:'carrito_venta',
            foreignKey:'carrito_id'
        })
    }
    return Carrito;

}