const express = require('express')
const Controller = require('../controllers/controller.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})
router.post('/login', Controller.postLogin)
router.post('/register', Controller.postRegister)

module.exports = router