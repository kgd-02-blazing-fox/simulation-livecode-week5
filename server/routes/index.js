const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller.js')

// POST /register
router.post('/register',controller.register)
// POST /login
router.post('/login',controller.login)
// GET /photos
router.get('/photos',controller.photos)

module.exports = router