const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

// ===============================================
// MANAGE USER DATA
// ===============================================

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

getUserMedia = (id) => {
  return db('user').where('user.id', id).select('user.id', 'media.id', 'media.url', 'media.type', 'media.title', 'media.description')
    .join('media', 'user.id', 'media.user_id')
    .then(result => {
      // console.log(result);
      return result
    })
}

getFriends = (id) => {
  return db('friendships').join('user', 'user.id', 'friendships.follower_id').where('friendships.followee_id', id).select('follower_id', 'profile_pic').then(result => {
    return result
  })
}

createProfile = (name, email, password) => {
  return db('user').insert({
    name,
    email,
    password,
    profile_pic: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
  })
}

updateProfile = (id, bio, profile_pic) => {
  return db('user').where('id', id).update('bio', bio).update('profile_pic', profile_pic)
}

uploadMedia = (id, url, type, title, description) => {
  return db('media').insert({
    url: url,
    type: type,
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


deleteMedia = (id) => {
  return db('media').where('id', id).del().then(result => {
    return db('media')
  })
}

search = (input) => {
  return db('user').whereRaw(`LOWER(name) LIKE ?`, [`%${input}%`])
}

// qb.whereRaw(`LOWER(name) LIKE ?`, [`%${search}%`])

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