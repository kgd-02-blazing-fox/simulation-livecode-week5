const express = require('express')
const routes = require('./routes/index')
var cors = require('cors')

const port = 3000
var app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`App listen at http://localhost:${port}`)
})