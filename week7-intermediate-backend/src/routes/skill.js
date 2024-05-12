const express = require('express')
const { addMySkill, getMySkill, deleteMySkill, getWorkerSkill } = require('../controller/skill')
const pool = require('../configs/db')
const { protect, checkRole } = require('../middlewares/auth')
const route = express.Router()

// /product
route
  .post('/', protect, checkRole('Worker'), addMySkill)
  .get('/', protect, checkRole('Worker'), getMySkill)
  .delete('/:skill_id', protect, checkRole('Worker'), deleteMySkill)
  .get('/:worker_id', protect, getWorkerSkill)

module.exports = route