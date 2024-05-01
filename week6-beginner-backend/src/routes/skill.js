const express = require('express')
const { addMySkill, getMySkill, deleteMySkill, getWorkerSkill } = require('../controller/skill')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .post('/', addMySkill)
  .get('/', getMySkill)
  .delete('/:skill_id', deleteMySkill)
  .get('/:worker_id', getWorkerSkill)

module.exports = route