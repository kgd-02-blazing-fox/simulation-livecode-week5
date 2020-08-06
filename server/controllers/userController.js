const { User } = require('../models/index.js')
const {comparePassword,hashPassword}=require('../helper/hashPassword')
const token=require('../helper/jwt.js')
const jwt = require('jsonwebtoken')

class UserController {
  static registUser(req, res, next) {
    try {
      let passHash = hashPassword(req.body.password)
      let payload = {
        email: req.body.email,
        password: passHash,
      }
      console.log(payload);
      User.create(payload)
      .then(data=>{
        res.status(201).json({
          email: data.email
        })
      })
      .catch(err=>{
        res.status(500).json(err)
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static loginUser(req, res, next) {
    try {
      let payload = {
        email: req.body.email,
        password: req.body.password,
      }
      User.findOne({
        where:{email:payload.email}
      })
      .then(user=>{
        if(user){
          let valid = comparePassword(payload.password, user.password)
          if(valid){
            let access_token = token(user.email)
            res.status(200).json({
              access_token
            })
          } else {
            res.status(401).json({
              msg:"WRONG PASSWORD/EMAIL"
            })
          }
        } else {
          res.status(401).json({
            msg:"WRONG PASSWORD/EMAIL"
          })
        }
      })
    } catch (err) {
      res.status(500).json({
        msg:"WRONG PASSWORD/EMAIL"
      })
    }
  }
}

module.exports = UserController