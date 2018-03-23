const model = require('../models/vibe')

getAllUsers = (req, res, next) => {
  let result = model.getAllUsers(req.query.limit)
  res.status(200).json({
    result,
    message: 'all users returned succesfully'
  })
}

module.exports = {
  getAllUsers
}