let bcrypt = require('bcryptjs')

function hashSync(password){
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

function compareHash(password, hash){
    let result = bcrypt.compareSync(password, hash)
    return result
}

module.exports = {hashSync, compareHash}