const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

getAllUsers = () => {
  return db('User').then(users => {
    return users
  })
}

getUserById = (id) => {
  return db('User').where('id', id).then(result => {
    return result
  })
}

getUserImages = (id) => {
  return db('User').where('User.id', id).select('User.id', 'Images.image_url', 'Images.title', 'Images.description')
    .join('Images', 'User.id', 'Images.user_id')
    .then(result => {
      // console.log(result);
      return result
    })
}

getFriends = (id) => {
  return db('User').where('id', id).select('friends').then(result => {
    return result
  })
}


module.exports = {
  getAllUsers,
  getUserById,
  getUserImages,
  getFriends
}