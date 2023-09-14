const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller={
   index: (req, res) => {
      return res. render('products/products_list', {products: products})
      
   },
   show: (req,res) =>{
      let comidaAux;
      products.forEach(comida =>{
         if(req.params.id==comida.id){
            comidaAux=comida;
         }
      });
      return res.render('products/producto',{comida:comidaAux})
   },
   create: (req, res)=>{
        return  res.render('products/form-creacion-de-producto')
   },
   edit: (req, res) => {
      return res.render('products/form-editar-producto')
   }
     
}

module.exports=controller;