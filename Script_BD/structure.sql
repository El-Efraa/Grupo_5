CREATE DATABASE db_comidasRegionales;
USE db_comidasRegionales;
CREATE TABLE Recetas (
    id_receta int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descripcion varchar(500) NOT NULL,
    ingredientes varchar(255),
    tiempo_preparacion time,
    dificultad varchar(50)
);
CREATE TABLE Categoria_platos (
    id_categoria int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre_cat varchar(100) NOT NULL,
    descripcion varchar(255)
);
CREATE TABLE tipo_Usuarios (
    id_tipo int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo varchar(100) NOT NULL,
    descripcion varchar(255)
);
CREATE TABLE descuentos(
	id_descuento int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    codigo varchar(100) NOT NULL,
    cant_productos int not null,
    fecha_inic date,
    fecha_fin date,
    porcentaje real not null,
    estado boolean not null
);
CREATE TABLE Usuarios(
	id_usuario int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    DNI int UNSIGNED NOT NULL,
    Nombre TEXT NOT NULL,
    Apellido TEXT NOT NULL,
    Fecha_Nacimiento DATE,
    Direccion VARCHAR(255) NOT NULL,
    Foto_usuario VARCHAR(255),
    Email varchar(50) NOT NULL,
    Contraseña varchar(50) NOT NULL,
    tipo_usuario int UNSIGNED,
    FOREIGN KEY(tipo_usuario) REFERENCES tipo_Usuarios(id_tipo)
);
CREATE TABLE Platos (
    id_plato int UNSIGNED AUTO_INCREMENT,
    nombre_plato varchar(500) NOT NULL,
    descripcion_plato varchar(255) NOT NULL,
    imagen varchar(255) NOT NULL,
    precio real NOT NULL,
    receta_id int UNSIGNED ,
    categoria_id int  UNSIGNED ,
	PRIMARY KEY(id_plato),
	FOREIGN KEY(receta_id) REFERENCES recetas(id_receta),
	FOREIGN KEY(categoria_id) REFERENCES categoria_platos(id_categoria)
);
CREATE TABLE Carritos (
    id_carrito int UNSIGNED AUTO_INCREMENT,
    cantidad int NOT NULL,
    importe real NOT NULL,
    plato_id int UNSIGNED ,
    usuario_id int  UNSIGNED ,
	PRIMARY KEY(id_carrito),
	FOREIGN KEY(plato_id) REFERENCES platos(id_plato),
	FOREIGN KEY(usuario_id) REFERENCES usuarios(id_usuario)
);
CREATE TABLE Ventas(
	id_venta int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    detalle_carrito varchar(500) NOT NULL,
    fecha_venta date NOT NULL,
    subtotal_venta real NOT NULL,
    descuento_aplic real,
    total_venta real NOT NULL,
    carrito_id int UNSIGNED ,
    descuento_id int UNSIGNED ,
	FOREIGN KEY(carrito_id) REFERENCES carritos(id_carrito),
	FOREIGN KEY(descuento_id) REFERENCES descuentos(id_descuento)
);