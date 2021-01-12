const express = require('express')
const routes     = express.Router() 

const productController = require('./controllers/productController')

routes.get('/products', productController.index)
routes.get('/products/:id', productController.show)
routes.post('/products', productController.store) 
routes.put('/products/:id', productController.update) 
routes.delete('/products/:id', productController.destroy) 

//Serve para dar a acesso aos outros files que acessarem a rota
module.exports = routes; 
