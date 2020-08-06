const {generatePassword, comparePassword} = require('../helpers/bcrypt.js')
const {User,Photo} = require('../models/index.js')
const jwt = require('jsonwebtoken')

class controller {

  static async register(req, res, next) {
    // res.json({hallo:'halo'})
    try {
      let passGen = generatePassword(req.body.password)
      let payload = {
        email : req.body.email,
        password : passGen
      }
      // console.log(payload)
      const register = await User.create(payload)
      res.status(201).json({user:register})

    } catch (err) {
      res.status(500).json({error:err})
    }

  }

  static async login(req, res, next) {

    try{
      // res.json({hallo:'halo'})

      const login = await User.findOne({
        email: req.body.email
      })
      if(comparePassword(req.body.password, login.password)){
        const token = jwt.sign({email:login.email, id:login.id},process.env.JWT_SECRET)
        // console.log(token)
        // res.json({hallo:token})
        res.status(200).json({access_token:token})

      }
    } catch (err) {
      res.status(500).json({error:err})
    }

  }

  static photos(req, res, next) {

  }
}

module.exports = controller