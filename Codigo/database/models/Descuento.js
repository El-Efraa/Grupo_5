//const Venta = require('../models/Venta.js');

module.exports=(sequelize,DataTypes)=>{
    const Descuento = sequelize.define("Descuento",{
                id_descuento:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true
                },
                codigo:{
                    type:DataTypes.STRING
                },
                cantidad_productos:{
                    type:DataTypes.INTEGER
                },
                fecha_inicio:{
                    type:DataTypes.DATE
                },
                fecha_fin:{
                    type:DataTypes.DATE
                },
                porcentaje:{
                    type:DataTypes.REAL
                },
                estado:{
                    type:DataTypes.BOOLEAN
                },
                // Timestamps
                createdAt:{ type:DataTypes.DATE},
                updatedAt: {type: DataTypes.DATE}},
                {
                    //tablename:'Descuento'
                    timestamps:true
                }         

    );
    Descuento.associate=function(modelos){
        Descuento.belongsTo(modelos.Venta,{
            as:'descuento_venta',
            foreignKey:'id_descuento'
        })
    }
    return Venta;

}