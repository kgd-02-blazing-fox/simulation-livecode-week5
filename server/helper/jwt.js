const jwt = require('jsonwebtoken');

function token(payload){
  const token = jwt.sign(payload,process.env.JWT_SECRET)
  return token
}

module.exports=token