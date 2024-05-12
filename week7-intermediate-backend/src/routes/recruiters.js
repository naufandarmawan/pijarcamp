const express = require('express')
const { registerRecruiter, getMyProfile, updateMyProfile} = require('../controller/recruiters')
const pool = require('../configs/db')
const route = express.Router()
const { protect, checkRole } = require('../middlewares/auth')

// /product
route
  .post('/register', registerRecruiter)
  .get('/profile', protect, checkRole('Recruiter'), getMyProfile)
  .put('/profile', protect, checkRole('Recruiter'), updateMyProfile)

module.exports = route