require('dotenv').config()
const express=require('express')
const app = express()
const index = require('./routes/index.js')
// const errorHandler =
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/', index)
// app.use(errorHandler)

app.listen(process.env.PORT,()=>{
  console.log('ONLINE!');
})