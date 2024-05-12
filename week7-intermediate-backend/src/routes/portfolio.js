const express = require('express')
const { addMyPortfolio, getMyPortfolio, deleteMyPortfolio, updateMyPortfolio, getWorkerPortfolio } = require('../controller/portfolio')
const pool = require('../configs/db')
const { protect, checkRole } = require('../middlewares/auth')
const route = express.Router()

// /product
route
.post('/', protect, checkRole('Worker'), addMyPortfolio)
.get('/', protect, checkRole('Worker'), getMyPortfolio)
.delete('/:portfolio_id', protect, checkRole('Worker'), deleteMyPortfolio)
.put('/:portfolio_id', protect, checkRole('Worker'), updateMyPortfolio)
.get('/:worker_id', protect, getWorkerPortfolio)

module.exports = route