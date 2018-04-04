const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

// ===============================================
// MANAGE USER DATA
// ===============================================

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
  return db('friendships').join('User', 'User.id', 'friendships.follower_id').where('friendships.follower_id', id).select('followee_id', 'profile_pic').then(result => {
    return result
    console.log(result);
  })
}

createProfile = (id) => {
  return db('User')
}

updateProfile = (id) => {
  return db('User').where('id', id).update('name', 'new-name')
}


module.exports = {
  getAllUsers,
  getUserById,
  getUserImages,
  getFriends,
  createProfile,
  updateProfile
}