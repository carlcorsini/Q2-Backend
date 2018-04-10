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

getUserMedia = (req, res, next) => {
  let promise = model.getUserMedia(req.params.id)

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
  let promise = model.updateProfile(req.params.id, req.body.bio, req.body.profile_pic)

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

uploadMedia = (req, res, next) => {
  let promise = model.uploadMedia(req.params.id, req.body.url, req.body.type, req.body.title, req.body.description)

  promise.then((result) => {
    res.status(200).json({
      result,
      message: `Image uploaded to ${req.params.id} updated`
    })
  })
}

search = (req, res, next) => {
  console.log(req.params.input);
  let promise = model.search(req.params.input)

  promise.then((result) => {
    res.status(200).json({
      result,
      // message: `Image uploaded to ${req.params.id} updated`
    })
  })

  // promise.catch((error) => {
  //   res.status().json()
  // })
}

follow = (req, res, next) => {
  let promise = model.follow(req.body.friend, req.body.userId)

  promise.then((result) => {
    res.status(200).json({
      result,
      message: `${req.body.friend} followed!`
    })
  })

  // promise.catch((error) => {
  //   res.status().json()
  // })
}

// ===============================================
// PROCESS USER DATA MODELS TO DELETE/DESTROY
// ===============================================

deleteMedia = (req, res, next) => {
  let promise = model.deleteMedia(req.params.id)

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
  getUserMedia,
  getFriends,
  createProfile,
  updateProfile,
  uploadMedia,
  follow,
  deleteMedia,
  search
}