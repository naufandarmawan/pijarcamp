const express = require('express')
const { registerWorker, getWorkers, getMyProfile, updateMyProfile, getWorkerProfile} = require('../controller/workers')
const pool = require('../configs/db')
const route = express.Router()

// /product
route
  .post('/register', registerWorker)
  .get('/', getWorkers)
  .get('/profile', getMyProfile)
  .put('/profile', updateMyProfile)
  .get('/profile/:id', getWorkerProfile)
  // .post('/profile/photo', updateMyPhoto)

module.exports = route