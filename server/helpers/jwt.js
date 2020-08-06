const jwt = require('jsonwebtoken')

function signToken(payload){
    const token = jwt.sign(payload, 'rahasia')
}

function verifyToken(){

}

module.exports = { signToken, verifyToken }