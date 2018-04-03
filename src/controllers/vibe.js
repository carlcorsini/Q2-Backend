const model = require('../models/vibe')

// ===============================================
// PROCESS USER DATA MODELS TO READ/SHOW
// ===============================================

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

getUserById = (req, res, next) => {
  let promise = model.getUserById(req.params.id)

  promise.then((result) => {
    // console.log(users)
    res.status(200).json({
      result,
      message: `id of ${req.params.id} returned`
    })
  })

  promise.catch((error) => {
    res.status().json()
  })
}

getUserImages = (req, res, next) => {
  let promise = model.getUserImages(req.params.id)

  promise.then((result) => {
    // console.log(users)
    res.status(200).json({
      result,
      message: `Images of ${req.params.id} returned`
    })
  })

  promise.catch((error) => {
    res.status().json()
  })
}

getFriends = (req, res, next) => {
  let promise = model.getFriends(req.params.id)

  promise.then((result) => {
    // console.log(users)
    res.status(200).json({
      result,
      message: `Friends of ${req.params.id} returned`
    })
  })

  promise.catch((error) => {
    res.status().json()
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserImages,
  getFriends
}