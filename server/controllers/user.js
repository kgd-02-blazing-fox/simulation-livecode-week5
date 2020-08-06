const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static register(req, res){
        const objUser = {
            email: req.body.email,
            password: req.body.password
        }
        User
            .create(objUser)
            .then(data => {
                res.status(201).json({
                    email: data.email,
                    password: data.password
                })
            })
            .catch(err => {
                res.status(500).json()
            })
    }
    static login(req, res){
        const email = req.body.email
        const inputPassword = req.body.password

        User
            .findOne({
                where: {
                    email
                }
            })
            .then(data => {
                const dbPassword = data.password

                if(!data){
                    throw 'invalid email/username'
                }
                else if(comparePassword(inputPassword, dbPassword)){
                    throw 'invalid email/username'
                }
                else {
                    const payload = {
                        email: data.email
                    }
                    const token = signToken(payload)

                    res.status(200).json(token)
                }
            })
            .catch(err => {
                res.status(500).json()
            })
    }
}

module.exports = UserController