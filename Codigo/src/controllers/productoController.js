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
      return res.render('products/form-editar-producto')
   }
     
}

module.exports=controller;