const express=require('express')
const router=express.Router()

const PhotosController = require('../controllers/photoController.js')

//photos
router.get('/', PhotosController.getPhoto)

module.exports=router