//const Carrito = require('../models/Carrito.js');
//const Descuento = require('../models/Descuento');


module.exports=(sequelize,DataTypes)=>{
    const Venta = sequelize.define("Venta",{
                id_venta:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                detalle:{
                    type:DataTypes.STRING
                },
                fecha:{
                    type:DataTypes.DATE
                },
                subtotal:{
                    type:DataTypes.REAL
                },
                total:{
                    type:DataTypes.REAL
                },
                descuento:{
                    type:DataTypes.REAL
                },
                // Timestamps
                createdAt:{ type:DataTypes.DATE},
                updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'Venta'
                    timestamps:true
                }         

    );
    Venta.associate=function(modelos){
        Venta.hasOne(modelos.Carrito,{
            as:'venta_carrito',
            foreignKey:'id_carrito'
        })
    }
    Venta.associate=function(modelos){
            Venta.hasMany(modelos.Descuento,{
                as:'venta_descuento',
                foreignKey:'id_descuento'
            })
    }
    return Venta;

}