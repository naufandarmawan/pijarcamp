const express = require('express')
const { registerWorker, getWorkers, getMyProfile, updateMyProfile, getWorkerProfile, updateMyPhoto } = require('../controller/workers')
const pool = require('../configs/db')
const { protect, checkRole } = require('../middlewares/auth')
const upload = require("../middlewares/assets");
const { uploadCloudinary } = require("../middlewares/cloudinary")
const route = express.Router()


// /product
route
  .post('/register', registerWorker)
  .get('/', protect, getWorkers)
  .get('/profile', protect, checkRole('Worker'), getMyProfile)
  .put('/profile', protect, checkRole('Worker'), updateMyProfile)
  .get('/profile/:id', protect, getWorkerProfile)
  .put('/profile/photo', protect, checkRole('Worker'), upload.single('file'), uploadCloudinary, updateMyPhoto)

module.exports = route