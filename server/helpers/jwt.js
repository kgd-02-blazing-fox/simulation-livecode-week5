const jwt = require('jsonwebtoken')

function signToken(payload) {
  const token = jwt.sign(payload, 'rahasia')
  return token
}

function verifyToken(token) {
  const payload = jwt.verify(token, 'rahasia')
  return payload
}

module.exports = {
  signToken,
  verifyToken
}