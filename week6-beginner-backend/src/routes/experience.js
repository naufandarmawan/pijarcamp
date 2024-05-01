const express = require('express')
const { addMyExperience, getMyExperience, deleteMyExperience, updateMyExperience, getWorkerExperience } = require('../controller/experience')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .post('/', addMyExperience)
  .get('/', getMyExperience)
  .delete('/:experience_id', deleteMyExperience)
  .put('/:experience_id', updateMyExperience)
  .get('/:worker_id', getWorkerExperience)

module.exports = route