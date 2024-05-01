const express = require('express')
const { login, logout, checkRole} = require('../controller/auth')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .post('/login', login)
  .get('/logout', logout )
  .get('/checkrole', checkRole )

module.exports = route