const express = require('express')
const Controller = require('../controllers/controller.js')
const {User} =require('../models/index')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})
router.post('/login', Controller.postLogin)
router.post('/register', Controller.postRegister)
router.get('/photos', function (req,res,next) {
  const token = req.headers.access_token
  try {
    if (!token) {
      throw { name: 'You are unauthenticated to make this request' }
    } else {
      console.log(token)
      const { email } = verifyToken(token)
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw { name: 'Your token invalid' }
      } else {
        req.userLogin = user
        next()
      }
    }
  } catch (err) {
    console.log(err)
    next()
  }
} , Controller.getPhotos)

module.exports = router