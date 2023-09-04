let controller={
    regionales:(req, res)=>{
       return  res.render('products/producto')
    },
    create: (req, res)=>{
        return  res.render('products/form-creacion-de-producto')
     },
   edit: (req, res) => {
      return res.render('products/form-editar-producto')
   }
     
}

module.exports=controller;