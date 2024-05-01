const express = require('express')
const { registerRecruiter, getMyProfile, updateMyProfile} = require('../controller/recruiters')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .post('/register', registerRecruiter)
  .get('/profile', getMyProfile)
  .put('/profile', updateMyProfile)

module.exports = route