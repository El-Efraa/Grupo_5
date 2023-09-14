const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller={
   index: (req, res) => {
      return res. render('products/products_list', {products: products})
      
   },
   detalle: (req, res) => {
      idProducto = req.params.id;

      let detalleProducto

      for(let i = 0; i < products.length; i++){
         if (idProducto == products[i].id){
            detalleProducto = products[i]
         }
      }

      res.render('products/detalle_producto', {products: detalleProducto})

   },
   /* regionales:(req, res)=>{
       return  res.render('products/detalle_producto')
   }, */
   create: (req, res)=>{
        return  res.render('products/form-creacion-de-producto')
   },
   edit: (req, res) => {
      let comida= products.find(comida => comida.id == req.params.id)
      return res.render('products/form-editar-producto',{comida})
   },
   update: (req,res)=>{
      req.body.id= parseInt(req.params.id);
      req.body.price= parseInt(req.body.price);
      req.body.image= req.file ? req.file.filename : req.body.oldImage;
      let productosUpdate= products.map(comida =>{
         if(comida.id == req.body.id){
            return comida=req.body;
         }
         return comida;
      })
      let comidaActualizar= JSON.stringify(productosUpdate,null,2);
      fs.writeFileSync(productsFilePath,comidaActualizar);
      res.redirect('/productos')
   }
     
}

module.exports=controller;