const db = require('../../db')
const uuid = require('uuid/v4')
const path = require('path')

getAllUsers = () => {
  return db('User').then((record) => {
    // console.log("RECORD", record);
    record
  })
}

module.exports = {
  getAllUsers
}