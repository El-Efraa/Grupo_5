const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller={
   index: (req, res) => {
      return res. render('products/products_list', {products: products})
      
   },
    regionales:(req, res)=>{
       return  res.render('products/producto')
    },
    create: (req, res)=>{
        return  res.render('products/form-creacion-de-producto')
     },
    store: (req, res)=> {

      idNuevoProducto= 0;
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

      console.log(products)

      res.redirect('/producto')

    },
   edit: (req, res) => {
      return res.render('products/form-editar-producto')
   }
     
}

module.exports=controller;