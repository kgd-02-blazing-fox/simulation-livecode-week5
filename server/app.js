require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

const indexRoute = require('./routes/index.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(indexRoute)

app.listen(PORT, function () {
  console.log(`Welcome to port https://localhost:${PORT}`)
})
