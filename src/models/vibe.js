const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

getAllUsers = () => {
  return db('User').then((users) => {
    console.log("users", users);
    return users
  })
}

module.exports = {
  getAllUsers
}