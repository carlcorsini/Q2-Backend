require('dotenv').load()
const chai = require('chai')
const expect = chai.expect
const vibe = require('../src/models/vibe')
const config = require('../knexfile').test
chai.use(require('chai-as-promised'))

describe('The Vibe', function() {
  before(function() {
    const tmpConnection = require('knex')({
      client: 'pg',
      connection: config.connection
    })
    return tmpConnection.raw(`CREATE DATABASE ${config.connection.database};`)
      .catch((errr) => {
        //console.log(errr);
        Promise.resolve('Everything is OK')
      })
      .then(() => global.knex = require('../db'))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#getAllUsers()', function() {
    it('should return a list of all the users in the database', function() {
      return vibe.getAllUsers().then(result => {
        expect(result.length).to.equal(6)

        const user = result[0]
        expect(user.id).to.be.ok
        expect(user.name).to.be.ok
      })
    })
  })

  describe('#getUserById()', function() {
    it('should return one user from the database', function() {
      return vibe.getUserById(1).then(result => {
        expect(result.length).to.equal(1)

        const row = result[0]
        expect(row.id).to.be.ok
        expect(row.name).to.be.ok
        expect(row.profile_pic).to.be.ok
        expect(row.bio).to.be.ok
      })
    })
  })

  describe('#getUserImages()', function() {
    it('should return a list of all images in the database associated with that user', function() {
      return vibe.getUserImages(1).then(result => {
        expect(result.length).to.equal(3)

        const row = result[0]
        expect(row.title).to.be.ok
        expect(row.description).to.be.ok

      })
    })
  })

  describe('#getFriends()', function() {
    it('should return a list of all friends associated with that user', function() {
      return vibe.getFriends(1).then(result => {
        expect(result.length).to.equal(2)

        const row = result[0]
        expect(row.followee_id).to.be.ok
        expect(row.profile_pic).to.be.ok
      })
    })
  })

  describe('#uploadMedia()', function() {
    it('should upload an media to the database', function() {
      return vibe.uploadMedia(1, 'example.com', 'image', 'title', 'description').then(images => {
        expect(images.length).to.equal(10)

        const row = images[images.length - 1]
        expect(row.url).to.equal('example.com')
      })
    })
  })

  describe('#createProfile()', function() {
    it('should create a profile and add it to the database', function() {
      return vibe.createProfile('chad bradley', 'example@email.com', 'password').then(users => {
        console.log(users)
        expect(users.length).to.equal(5)

        // const row = images[images.length - 1]
        // expect(row.url).to.equal('example.com')
      })
    })
  })


})