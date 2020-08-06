const jwt = require('jsonwebtoken')


const authentication = (req, res, next) => {
  try {
    const token = req.headers.access_token
    if(token) {
      const decoded = jwt.verify(token,process.env.JWT_TOKEN)
      req.UserId = decoded.id
    }
  }catch (err) {

  }
}