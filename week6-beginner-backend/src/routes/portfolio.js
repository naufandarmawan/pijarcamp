const express = require('express')
const { addMyPortfolio, getMyPortfolio, deleteMyPortfolio, updateMyPortfolio, getWorkerPortfolio } = require('../controller/portfolio')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
.post('/', addMyPortfolio)
.get('/', getMyPortfolio)
.delete('/:portfolio_id', deleteMyPortfolio)
.put('/:portfolio_id', updateMyPortfolio)
.get('/:worker_id', getWorkerPortfolio)

module.exports = route