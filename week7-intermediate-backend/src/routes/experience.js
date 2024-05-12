const express = require('express')
const { addMyExperience, getMyExperience, deleteMyExperience, updateMyExperience, getWorkerExperience } = require('../controller/experience')
const pool = require('../configs/db')
const { protect, checkRole } = require('../middlewares/auth')
const { hitCacheMyExperience, clearCacheMyExperience } = require('../middlewares/redis')
const route = express.Router()

// // Redis
// route
//   .post('/', protect, checkRole('Worker'), clearCacheMyExperience, addMyExperience)
//   .get('/', protect, checkRole('Worker'), hitCacheMyExperience, getMyExperience)
//   .delete('/:experience_id', protect, checkRole('Worker'), clearCacheMyExperience, deleteMyExperience)
//   .put('/:experience_id', protect, checkRole('Worker'), clearCacheMyExperience, updateMyExperience)
//   .get('/:worker_id', protect, getWorkerExperience)

// Tidak menggunakan Redis
route
  .post('/', protect, checkRole('Worker'), addMyExperience)
  .get('/', protect, checkRole('Worker'), getMyExperience)
  .delete('/:experience_id', protect, checkRole('Worker'), deleteMyExperience)
  .put('/:experience_id', protect, checkRole('Worker'), updateMyExperience)
  .get('/:worker_id', protect, getWorkerExperience)

module.exports = route