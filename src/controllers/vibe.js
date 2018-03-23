const model = require('../models/vibe')

getAllUsers = (req, res, next) => {
  let promise = model.getAllUsers(req.query.limit)

  promise.then((users) => {
    console.log(users)
    res.status(200).json({
      users,
      message: 'all users returned succesfully'
    })
  })

  promise.catch((error) => {
    res.status().json()
  })
}

module.exports = {
  getAllUsers
}