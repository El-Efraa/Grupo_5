const db = require('../../../database/models')
const sequelize = require('sequelize')
const { Op } = require('sequelize');

let controller={
   index: async (req, res) => {
      
      
      const products = await db.Plato.findAll()
      const countByCategory = await db.Categoria_plato.findAll({
         attributes: [
            'nombre',
            [sequelize.fn('COUNT', sequelize.col('cat_plato.categoria_id')),'count']
         ], 
         
         include: [{
            model: db.Plato,
            attributes: [],
            as: 'cat_plato',
            required: false,
            on: {
               '$cat_plato.categoria_id$': {[Op.eq]: sequelize.col('categoria_plato.id_categoria')}
            }
         }],
         group: ['nombre']
      }) 
     
      let productsArray = []
      await db.Plato.findAll({
         include: [{association: 'plato_cat'}]
      })
         .then( (platos) => { 
            platos.forEach((plat)=>productsArray.push({
               id: plat.id_plato,
               name: plat.nombre,
               description: plat.descripcion,
               imagen: plat.imagen,
               precio: plat.precio,
               category: [{
                  id: plat.categoria_id,
                  nombre: plat.plato_cat.nombre,
                  descripcion: plat.plato_cat.descripcion
               }],
               detail: "http://localhost:3002/productos/detail/"+plat.id_plato
         }))  
         
         
      })
           return res.status(200).json({   
               count: products.length,
               countByCategory,
               url: 'api/productos',
               products: productsArray,
               status: res.statusCode,
            })
      

            
      
   },
   detalle: (req, res) => {
      db.Plato.findByPk(req.params.id, {
         include: [{association: 'plato_cat'},{association: 'plato_receta'}]
      })
      .then(plato => {

      res.status(200).json({
         id: plato.id_plato,
         nombre: plato.nombre,
         descripcion: plato.descripcion,
         imagen: plato.imagen,
         precio: plato.precio,
         categoria: [{
            id: plato.plato_cat.id_categoria,
            nombre: plato.plato_cat.nombre,
            descripcion: plato.plato_cat.descripcion
         }],
         receta: [{
            id: plato.plato_receta.id_receta,
            descripcion: plato.plato_receta.descripcion,
            ingredientes: plato.plato_receta.ingredientes, 
            tiempo_preparacion: plato.plato_receta.tiempo_preparacion,
            dificultad: plato.plato_receta.dificultad

         }]
      })
      
   })
     
}}

module.exports=controller;