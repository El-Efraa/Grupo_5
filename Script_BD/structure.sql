CREATE DATABASE db_comidasRegionales;
USE db_comidasRegionales;
CREATE TABLE Recetas (
    id_receta int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    descripcion varchar(500) NOT NULL,
    ingredientes varchar(255) NOT NULL,
    tiempo_preparacion time NOT NULL,
    dificultad text
);
CREATE TABLE Categoria_platos (
    id_categoria int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre varchar(100) NOT NULL,
    descripcion varchar(255)
);
CREATE TABLE Tipo_Usuarios (
    id_tipo int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo varchar(100) NOT NULL,
    descripcion varchar(255)
);
CREATE TABLE Descuentos(
	id_descuento int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    codigo varchar(100) NOT NULL,
    cantidad_productos int not null,
    fecha_inicio date,
    fecha_fin date,
    porcentaje real not null,
    estado varchar(10) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Usuarios(
	id_usuario int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    DNI int UNSIGNED NOT NULL,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    fecha_nacimiento DATE,
    direccion VARCHAR(255) NOT NULL,
    foto_usuario VARCHAR(255),
    email varchar(50) NOT NULL UNIQUE,
    contraseña varchar(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_usuario int UNSIGNED,
    FOREIGN KEY(tipo_usuario) REFERENCES tipo_Usuarios(id_tipo)
);
CREATE TABLE Platos (
    id_plato int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre varchar(255) NOT NULL,
    descripcion varchar(255) NOT NULL,
    imagen varchar(255) NOT NULL,
    precio real NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    receta_id int UNSIGNED NOT NULL,
    categoria_id int UNSIGNED NOT NULL,
	FOREIGN KEY(receta_id) REFERENCES recetas(id_receta),
	FOREIGN KEY(categoria_id) REFERENCES categoria_platos(id_categoria)
);
CREATE TABLE Carritos (
    id_carrito int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cantidad int NOT NULL,
    importe real NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    plato_id int UNSIGNED ,
    usuario_id int  UNSIGNED ,
	FOREIGN KEY(plato_id) REFERENCES platos(id_plato),
	FOREIGN KEY(usuario_id) REFERENCES usuarios(id_usuario)
);
CREATE TABLE Ventas(
	id_venta int UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    detalle varchar(500) NOT NULL,
    fecha date NOT NULL,
    subtotal real NOT NULL,
    total real NOT NULL,
    descuento real,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    carrito_id int UNSIGNED ,
    descuento_id int UNSIGNED ,
	FOREIGN KEY(carrito_id) REFERENCES carritos(id_carrito),
	FOREIGN KEY(descuento_id) REFERENCES descuentos(id_descuento)
);