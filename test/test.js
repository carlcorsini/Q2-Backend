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

  describe('#getUserMedia()', function() {
    it('should return a list of all media in the database associated with that user', function() {
      return vibe.getUserMedia(1).then(result => {
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
        expect(result.length).to.equal(4)

        const user = result[0]
        expect(user.follower_id).to.be.ok
        expect(user.profile_pic).to.be.ok
      })
    })
  })

  describe('#uploadMedia()', function() {
    it('should upload an media to the database', function() {
      return vibe.uploadMedia(1, 'example.com', 'image', 'title', 'description').then(media => {
        expect(media.length).to.equal(4)

        const row = media[media.length - 1]
        expect(row.url).to.equal('example.com')
        expect(row.title).to.equal('title')
      })
    })
  })

  describe('#createProfile()', function() {
    it('should create a profile and add it to the database', function() {
      return vibe.createProfile('chad bradley', 'example@email.com', 'password').then(users => {
        // console.log(users)
        expect(users.length).to.equal(7)

        const user = users[users.length - 1]
        expect(user.name).to.equal('chad bradley')
        expect(user.email).to.equal('example@email.com')
      })
    })
  })

  describe('#updateProfile()', function() {
    it('should update users profile', function() {
      return vibe.updateProfile(1, 'i like rice', 'newprofilepic.com').then(result => {
        expect(result.length).to.equal(1)

        const user = result[0]
        expect(user.name).to.equal('Carl Corsini')
        expect(user.bio).to.equal('i like rice')
        expect(user.profile_pic).to.equal('newprofilepic.com')
      })
    })
  })

  describe('#search()', function() {
    it('should search through the database with input and return results', function() {
      return vibe.search('carl').then(result => {
        expect(result.length).to.equal(1)

        const user = result[0]
        expect(user.name).to.equal('Carl Corsini')
        expect(user.email).to.equal('carl.c.1192@gmail.com')
      })
    })
  })

  describe('#follow()', function() {
    it('should add a friendship to the frienship database', function() {
      return vibe.follow(1, 5).then(result => {
        // console.log(users)
        expect(result.length).to.equal(5)

        const user = result[result.length - 1]
        expect(user.followee_id).to.equal(1)
        expect(user.follower_id).to.equal(5)
      })
    })
  })

  describe('#deleteMedia()', function() {
    it('should add a friendship to the frienship database', function() {
      return vibe.deleteMedia(1, 5).then(media => {
        // console.log(users)
        expect(media.length).to.equal(9)

        const item = media[media.length - 1]
        expect(item.type).to.equal('image')
        expect(item.title).to.equal('title')
      })
    })
  })

})