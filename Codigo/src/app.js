const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const session = require('express-session');
const userLoggedMid =require('../middlewares/loggMiddleware.js')
const methodOverride = require ('method-override');
const cookie = require('cookie-parser');

app.use(cors());

let rutasUsuario= require("./routes/usuario.js")

let rutasMain=require("./routes/main.js")
let rutasCarrito=require("./routes/carrito.js")
let rutasProducto=require('./routes/producto.js')

let apiRutasProducto=require("./routes/api/apiProducto.js")
let apiRutasUsuario = require('./routes/api/apiUsuario.js')



const publicPath = path.resolve (__dirname, '../public')

app.set('view engine','ejs');
app.set('views','src/views');

app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(3002, () =>{
    console.log("Servidor corriendo en el puerto 3002")
})
app.use(session({secret:"Nuestro msj secreto",
                resave:false,
                saveUninitialized:false
}))
app.use(cookie());
app.use(userLoggedMid);
app.use('/',rutasMain)
app.use('/user',rutasUsuario)
app.use('/productos',rutasProducto)

app.use('/api/productos', apiRutasProducto)
app.use('/api/users', apiRutasUsuario)

app.get ('/carrito',rutasCarrito)   