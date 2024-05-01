const express = require('express')
const { createHire, getWorkerHire, getRecruiterHire } = require('../controller/hire')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .post('/', createHire)
  .get('/workers', getWorkerHire)
  .get('/recruiters', getRecruiterHire)

module.exports = route