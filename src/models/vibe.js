const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

getAllUsers = () => {
  return db('user').then(users => {
    return users
  })
}

getUserById = (id) => {
  return db('user').where('id', id).then(result => {
    return result
  })
}

getUserImages = (id) => {
  return db('user').where('user.id', id).select('user.id', 'media.url', 'media.title', 'media.description')
    .join('media', 'user.id', 'media.user_id')
    .then(result => {
      // console.log(result);
      return result
    })
}

getFriends = (id) => {
  return db('friendships').join('user', 'user.id', 'friendships.follower_id').where('friendships.follower_id', id).select('followee_id', 'profile_pic').then(result => {
    return result
    console.log(result);
  })
}

createProfile = (name, email, password) => {
  return db('user').insert({
    name,
    email,
    password
  })
}

updateProfile = (id, bio, profile_pic, interests) => {
  return db('user').where('id', id).update('bio', bio).update('profile_pic', profile_pic).update('interests', interests)
}

uploadImage = (id, url, title, description) => {
  return db('media').insert({
    url: url,
    title: title,
    description: description,
    user_id: id
  }).then(result => {
    return db('media')
  })
}

follow = (followee, follower) => {
  return db('friendships').insert({
    followee_id: followee,
    follower_id: follower
  }).then(result => {
    return db('friendships')
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
  search,
  follow
}