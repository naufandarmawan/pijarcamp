const express = require('express')
const { getProducts, createProduct, updateProduct, dropProduct, detailProduct } = require('../controller/products')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .get('/', getProducts)
  .post('/', createProduct)
  .delete('/:id', dropProduct)
  .put('/:id', updateProduct)
  .get('/:id', detailProduct )

module.exports = route