
module.exports=(sequelize,DataTypes)=>{
    const Venta = sequelize.define("Venta",{
                id_venta:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primarykey:true
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
                    //tablename:'ventas'
                    timestamps:true
                }         

    );
    Venta.associate=function(modelos){
        Venta.hasOne(modelos.Carrito,{
            as:'venta_carrito',
            foreignKey:'carrito_id'
        })
    }
    Venta.associate=function(modelos){
            Venta.hasMany(modelos.Descuento,{
                as:'venta_descuento',
                foreignKey:'descuento_id'
            })
    }
    return Venta;

}