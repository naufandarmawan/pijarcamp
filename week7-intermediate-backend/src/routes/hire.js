const express = require('express')
const { createHire, getWorkerHire, getRecruiterHire } = require('../controller/hire')
const pool = require('../configs/db')
const { protect, checkRole } = require('../middlewares/auth')
const route = express.Router()

// /product
route
  .post('/', protect, checkRole('Recruiter'), createHire)
  .get('/workers', protect, checkRole('Worker'), getWorkerHire)
  .get('/recruiters', protect, checkRole('Recruiter'), getRecruiterHire)

module.exports = route

// Set mau bikin sesuatu taro sini.