"use strict"

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const port = process.env.PORT
const app = express()
const Controller = require("./controllers/controller.js")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.post("/register",Controller.register)
app.post("/login",Controller.login)
app.get("/photos",Controller.photos)
// app.use(Error.errorhandling)




app.listen(port,()=>console.log(`listening at:${port}`))