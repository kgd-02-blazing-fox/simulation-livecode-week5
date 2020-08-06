const { User } = require('../models/index')

const {comparePassword} = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class Controller {
  static async postLogin(req, res) {
    let { email, password } = req.body
    try {
      const user = await User.findOne({
        where: { email }
      })
      if (user) {
        if (!comparePassword) {
          throw 'Email or password not valid'
        } else {
          const token = signToken({ email })
          res.status(200).json({
            id: user.id,
            email: user.email,
            access_token: token
          })
        }
      }

    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: err
      })
    }
  }

  static async postRegister(req, res) {
    let { email, password } = req.body
    console.log('hai' + email, password)

    try {
      const user = await User.create({ email, password }) 
      res.status(201).json({
        id: user.id,
        email: user.email
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: err
      })
    }
  }
}

module.exports = Controller