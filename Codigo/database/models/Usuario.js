module.exports=(sequelize,DataTypes)=>{
    const Usuario = sequelize.define("Usuario",{
                id_usuario:{
                    type:DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                DNI:{
                    type:DataTypes.INTEGER.UNSIGNED,
                    allowNull: true
                },
                nombre:{
                    type:DataTypes.TEXT,
                    allowNull: false
                },
                apellido:{
                    type:DataTypes.TEXT,
                    allowNull: false
                },
                fecha_nacimiento:{
                    type:DataTypes.DATE
                },
                direccion:{
                    type:DataTypes.STRING,
                    allowNull: false
                },
                foto_usuario:{
                    type:DataTypes.STRING
                },
                email:{
                    type:DataTypes.STRING,
                    unique: true,
                    allowNull: false
                },
                contraseña:{
                   type:DataTypes.STRING(50),
                   allowNull: false
                },
                tipo_usuario: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    foreignKey: true,
                    references: {
                        model: 'Tipo_Usuario',
                        key: 'id_tipo'
                    }
                },
                // Timestamps
                /* createdAt:{ 
                    type:DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false
                } */
            },
                {
                    //tablename:'usuarios'
                    timestamps: true,
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }         

    );
    Usuario.associate = function(modelos){
        Usuario.belongsTo(modelos.Tipo_Usuario,{
            as:'usuario_tipo',
            foreignKey:'tipo_usuario'
        })
        Usuario.hasMany(modelos.Carrito,{
            as:'usuario_carrito',
            foreignKey:'usuario_id'
        })
    }
    return Usuario;

}