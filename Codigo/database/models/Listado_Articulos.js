module.exports=(sequelize,DataTypes)=>{
    const Listado_Articulos = sequelize.define("Listado_Articulos",{
                id_listadoArticulos:{
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
                carrito_id:{
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Carrito',
                        key: 'id_carrito'
                    }
                }},
                {
                    tableName:'art_carrito',
                    timestamps:true,
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }         

    );
    Listado_Articulos.associate=function(modelos){
        Listado_Articulos.belongsTo(modelos.Carrito,{
            as:'articulos_carrito',
            foreignKey:'carrito_id'
        })
        Listado_Articulos.belongsTo(modelos.Plato,{
            as:'carrito_plato',
            foreignKey:'plato_id'
        })
    }
    return Listado_Articulos;

}