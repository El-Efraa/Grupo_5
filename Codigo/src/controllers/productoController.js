const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../../database/models')
const { Op } = require('sequelize')

let controller={
   index: (req, res) => {
      db.Plato.findAll({
         include: [{association: 'plato_cat'}]
      })
         .then(products => {
            return res. render('products/products_list', {products: products})
         })
      
      
   },
   detalle: (req, res) => {
      db.Plato.findByPk(req.params.id, {
         include: [{association: 'plato_cat'},{association: 'plato_receta'}]
      })
      .then(products => {
         /*idProducto = req.params.id;

      let detalleProducto

      for(let i = 0; i < products.length; i++){
         if (idProducto == products[i].id){
            detalleProducto = products[i]
         }
      }*/

      res.render('products/detalle-producto', {products: products})
      })
      
   },
   /* regionales:(req, res)=>{
       return  res.render('products/detalle_producto')
   }, */
   create: (req, res)=>{
      db.Categoria_plato.findAll().then(categorias => {
         return  res.render('products/form-creacion-de-producto', {categorias: categorias})
      })
        
     },
    store: (req, res)=> {
      db.Plato.create(
         {include: [{association: 'plato_cat'},{association: 'plato_receta'}]},
         {
         nombre: req.body.name,
         descripcion: req.body.description,
         imagen: req.body.image,
         precio: req.body.price,
         receta_id: req.body.ingredients,
         categoria_id: req.body.category
      }).then(()=>{
         res.redirect('/productos')
      }
         
      )

      /*idNuevoProducto= 0;
      for(let i=0; i<products.length; i++){
         if(idNuevoProducto<products[i].id){
            idNuevoProducto++
         }
         
      }
      idNuevoProducto= idNuevoProducto+1
      
      let nuevoProducto= {
         id: idNuevoProducto, 
         name: req.body.name,
         description: req.body.description,
         image: req.body.image,
         category: req.body.category,
         ingredients: req.body.ingrredients,
         price: req.body.price
      }

      products.push(nuevoProducto);

      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))

      console.log(products)*/

      

    },
   edit: (req, res) => {
      let comida= products.find(comida => comida.id == req.params.id)
      return res.render('products/form-editar-producto',{comida})
   },
   update: (req,res)=>{
      db.Plato.findByPk(req.params.id, {
         
      })
      /*req.body.id= parseInt(req.params.id);
      req.body.price= parseInt(req.body.price);
      req.body.image= req.file ? req.file.filename : req.body.oldImage;
      let productosUpdate= products.map(comida =>{
         if(comida.id == req.body.id){
            return comida=req.body;
         }
         return comida;
      })
      let comidaActualizar= JSON.stringify(productosUpdate,null,2);
      fs.writeFileSync(productsFilePath,comidaActualizar);*/
      res.redirect('/productos')
   },
   mostrarEliminar: (req, res) => {
      db.Plato.findByPk(req.params.id, {
         include: [{association: 'plato_cat'},{association: 'plato_receta'}]
      })
      let comida= products.find(comida => comida.id == req.params.id)
      return res.render('products/form-eliminar-producto',{comida})
   },
   destroy:(req,res) =>{
      
      const productosFinal = products.filter(comida => comida.id != req.params.id)
      let productosGuardar = JSON.stringify(productosFinal,null,2)
      fs.writeFileSync(productsFilePath,productosGuardar);
      res.redirect('/productos')
   },
   search: (req,res) => {
      let plato = req.body.fname

      db.Plato.findAll(
         {
            include: [{association: 'plato_cat'},{association: 'plato_receta'}],
            where: {
            nombre: {
               [Op.like]: `%${plato}%`
            }
         }
      }).then( plat => {
         return res.render('products/productos-encontrados', {plat: plat})}
         //return res.json(plat)}
      )
   }
     
}

module.exports=controller;