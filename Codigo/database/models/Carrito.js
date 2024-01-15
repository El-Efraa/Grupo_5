module.exports=(sequelize,DataTypes)=>{
    const Carrito = sequelize.define("Carrito",{
                id_carrito:{
                    type:DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
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
        Carrito.hasOne(modelos.Venta,{
            as:'carrito_venta',
            foreignKey:'carrito_id'
        })
        //CAMBIAR LA RELACION MUCHOS A MUCHOS POR LA TABLA INTERMEDIA
        Carrito.belongsToMany(modelos.Plato,{
            as:'carrito_Platos',
            through:'art_carrito',
            foreignKey:'carrito_id',
            otherKey:'plato_id',
            foreignKeyConstraint: true
        })
    }
    return Carrito;

}