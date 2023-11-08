//const Usuario = require('../models/Usuario.js');
//const Plato = require('../models/Plato.js');
//const Venta = require('../models/Venta.js');

module.exports=(sequelize,DataTypes)=>{
    const Carrito = sequelize.define("Carrito",{
                id_carrito:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                cantidad:{
                    type:DataTypes.INTEGER
                },
                importe:{
                    type:DataTypes.REAL
                },
                // Timestamps
                createdAt:{ type:DataTypes.DATE},
                updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'Carrito'
                    timestamps:true
                }         

    );
    Carrito.associate=function(modelos){
        Carrito.hasMany(modelos.Plato,{
            as:'carrito_plato',
            foreignKey:'id_plato'
        })
    }
    Carrito.associate=function(modelos){
        Carrito.belongsTo(modelos.Usuario,{
            as:'carrito_usuario',
            foreignKey:'id_usuario'
        })
    }
    Carrito.associate=function(modelos){
        Carrito.belongsTo(modelos.Venta,{
            as:'carrito_venta',
            foreignKey:'id_carrito'
        })
    }
    return Carrito;

}