const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require ('method-override');
let rutasUsuario= require("./routes/usuario.js")
let rutasProducto=require("./routes/producto.js")
let rutasMain=require("./routes/main.js")
let rutasCarrito=require("./routes/carrito.js")

const publicPath = path.resolve (__dirname, '../public')

app.set('view engine','ejs');
app.set('views','src/views')

app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000")
})

app.use('/',rutasMain)
//app.use('/user',rutasUsuario)
app.use('/productos',rutasProducto)

app.get ('/carrito',rutasCarrito)