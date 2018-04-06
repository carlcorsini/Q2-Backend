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
  return db('friendships').join('User', 'User.id', 'friendships.follower_id').where('friendships.follower_id', id).select('followee_id', 'profile_pic').then(result => {
    return result
    console.log(result);
  })
}

createProfile = (name, email, password) => {
  return db('User').insert({
    name,
    email,
    password
  })
}

updateProfile = (id, bio, profile_pic, interests) => {
  return db('User').where('id', id).update('bio', bio).update('profile_pic', profile_pic).update('interests', interests)
}

uploadImage = (id, url, title, description) => {
  db('Images').insert({
    image_url: url,
    title: title,
    description: description,
    user_id: id
  }).then(result => {
    return db('Images')
  })
}

search = (input) => {
  return db('User').where('name',
    'like', `%${input}%`)
}


module.exports = {
  getAllUsers,
  getUserById,
  getUserImages,
  getFriends,
  createProfile,
  updateProfile,
  uploadImage,
  search
}