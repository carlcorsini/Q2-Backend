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



module.exports = {
  getAllUsers,
  getUserById
}