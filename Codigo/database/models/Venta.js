
module.exports=(sequelize,DataTypes)=>{
    const Venta = sequelize.define("Venta",{
                id_venta:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                detalle:{
                    type:DataTypes.STRING,
                    allowNull: false
                },
                fecha:{
                    type:DataTypes.DATE,
                    allowNull: false
                },
                subtotal:{
                    type:DataTypes.REAL,
                    allowNull: false
                },
                total:{
                    type:DataTypes.REAL,
                    allowNull: false
                },
                descuento:{
                    type:DataTypes.REAL
                },
                carrito_id:{
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Carrito',
                        key: 'id_carrito'
                    }
                },
                descuento_id:{
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Descuento',
                        key: 'id_descuento'
                    }
                }
                },
                {
                    tableName:'ventas',
                    timestamps:true,
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }         

    );
    Venta.associate=function(modelos){
        Venta.belongsTo(modelos.Carrito,{
            as:'venta_carrito',
            foreignKey:'carrito_id'
        })
        Venta.belongsTo(modelos.Descuento,{
            as:'venta_descuento',
            foreignKey:'descuento_id'
        })
    }
   
    return Venta;

}