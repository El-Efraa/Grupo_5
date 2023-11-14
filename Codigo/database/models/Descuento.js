
module.exports=(sequelize,DataTypes)=>{
    const Descuento = sequelize.define("Descuento",{
                id_descuento:{
                    type:DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primarykey:true

                },
                codigo:{
                    type:DataTypes.STRING(100),
                    allowNull: false
                },
                cantidad_productos:{
                    type:DataTypes.INTEGER,
                    allowNull: false
                },
                fecha_inicio:{
                    type:DataTypes.DATE
                },
                fecha_fin:{
                    type:DataTypes.DATE
                },
                porcentaje:{
                    type:DataTypes.REAL,
                    allowNull: false
                },
                estado:{
                    type:DataTypes.STRING(10),
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
                    //tablename:'descuentos'
                    timestamps:true
                }         

    );
    Descuento.associate=function(modelos){
        Descuento.belongsTo(modelos.Venta,{
            as:'descuento_venta',
            foreignKey:'descuento_id'
        })
    }
    return Venta;

}