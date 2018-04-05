const model = require('../models/vibe')

getAllUsers = (req, res, next) => {
  let promise = model.getAllUsers(req.query.limit)

  promise.then((users) => {
    // console.log(users)
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

createProfile = (req, res, next) => {
  let promise = model.createProfile(req.body.name, req.body.createEmail, req.body.createPassword)

  promise.then((result) => {
    // console.log(users)
    res.status(200).json({
      result,
      message: `Profile for ${req.params.name} created`
    })
  })

  // promise.catch((error) => {
  //   res.status().json()
  // })
}

//update profile_pic

updateProfile = (req, res, next) => {
  let promise = model.updateProfile(req.params.id, req.body.bio, req.body.profile_pic, req.body.interests)

  promise.then((result) => {

    res.status(200).json({
      result,
      message: `Friends of ${req.params.id} updated`
    })
  })

  // promise.catch((error) => {
  //   res.status().json()
  // })
}

uploadImage = (req, res, next) => {
  let promise = model.uploadImage(req.params.id, req.body.image_url, req.body.title, req.body.description)

  promise.then((result) => {
    res.status(200).json({
      result,
      message: `Image uploaded to ${req.params.id} updated`
    })
  })

  // promise.catch((error) => {
  //   res.status().json()
  // })
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserImages,
  getFriends,
  createProfile,
  updateProfile,
  uploadImage
}