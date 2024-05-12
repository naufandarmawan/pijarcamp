const express = require('express')
const pool = require('../configs/db')
const { protect } = require('../middlewares/auth')
const { uploadImage, deleteImage } = require('../controller/assets')
const upload = require("../middlewares/assets");
const { uploadCloudinary, deleteCloudinary } = require("../middlewares/cloudinary")
const route = express.Router()


route
  .post('/upload', protect, upload.single('file'), uploadCloudinary, uploadImage)
  .delete('/delete/', protect, deleteCloudinary, deleteImage)

module.exports = route