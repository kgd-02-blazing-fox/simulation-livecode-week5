const express=require('express')
const router=express.Router()
// const authentication =

const photos=require('./photos.js')
const users=require('./user.js')

router.use('/photos', photos)
router.use('/users', users)

module.exports=router