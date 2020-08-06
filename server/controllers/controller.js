"use strict"

const {User,Photo} = require("../models/index.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

class Controller {
    static async register(req,res,next) {
        try {
            let {email,password} = req.body
            let result = await User.create({email,password})
            res.status(201).json({'id':result.id,'email':result.email})
        } catch (error) {
            // next(error)
            res.status(500).json({'msg':"internal"})
        }
    }
    static async login(req,res,next) {
        try {
            let {email,password} = req.body
            let result = await User.findOne({where:{email}})
            if (result) {
                if (bcrypt.compareSync(password,result.password)) {
                    let access_token = jwt.sign({
                        "id":result.id,
                        "email":result.email
                    },process.env.JWT_SECRET)
                    res.status(200).json({
                        "id":result.id,
                        "email":result.email,
                        access_token
                    })
                }
            } else {
                throw new Error("not found")
            }
        } catch (error) {
            // next(error)
            res.status(500).json({'msg':"internal"})
        }
    }
    static async photos(req,res,next) {
        // req.headers.access_token
        if (req.headers.access_token) {
            try {
                let credential = jwt.verify(req.headers.access_token,process.env.JWT_SECRET)
                let result = await User.findOne({where:{id:credential.id}})
                if (result) {
                    let photos = await Photo.findAll({where:{userId:result.id}})
                    res.status(200).json({photos})
                } else {
                    res.status(404).json({'status':'user not found'})
                }
            } catch (error) {
                // next(error)
                res.status(400).json({'status':'fail'})
            }
        } else {
            res.status(400).json({'status':'Unauthorized access'})

        }
    }
}

module.exports = Controller