// const {Photo} = require('../models/index.js')

class UserController{
    static postRegister(req, res){
        const payload = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(payload)
        //error saat require model


    }
    static postLogin(req,res){

    }
    
}

module.exports = UserController