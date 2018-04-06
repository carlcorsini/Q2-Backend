const model = require('../models/vibe')

// ===============================================
// PROCESS USER DATA MODELS TO READ/SHOW
// ===============================================

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

// ===============================================
// PROCESS USER DATA MODELS TO UPDATE/PUT
// ===============================================

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
  let promise = model.uploadImage(req.params.id, req.body.url, req.body.type, req.body.title, req.body.description)

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

follow = (req, res, next) => {
  let promise = model.follow(req.body.friend, req.body.stashedVariable)

  promise.then((result) => {
    res.status(200).json({
      result,
      message: `Image uploaded to ${req.body.follower} updated`
    })
  })

  // promise.catch((error) => {
  //   res.status().json()
  // })
}

// ===============================================
// PROCESS USER DATA MODELS TO DELETE/DESTROY
// ===============================================

deleteImage = (req, res, next) => {
  let promise = model.deleteImage(req.params.id)

  promise.then((result) => {
    res.status(200).json({
      result,
      message: `Image delete to ${req.params.id} updated`
    })
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserImages,
  getFriends,
  createProfile,
  updateProfile,
  uploadImage,
  follow,
  deleteImage
}