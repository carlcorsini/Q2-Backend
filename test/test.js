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
        console.log(errr);
        Promise.resolve('Everything is OK')
      })
      .then(() => global.knex = require('../db'))
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

  xdescribe('#getAllGlassesWithCocktailsNested()', function() {
    it('should return a list of all the glasses in the database with associated cocktails nested inside', function() {
      return main.getAllGlassesWithCocktailsNested().then(result => {
        expect(result.length).to.equal(3)

        const row = result[0]
        expect(row.id).to.be.ok
        expect(row.name).to.be.ok

        const cocktails = row.cocktails
        expect(cocktails).to.be.ok

        const cocktail = cocktails[0]
        expect(cocktail.id).to.be.ok
        expect(cocktail.name).to.be.ok
        expect(cocktail.instructions).to.be.ok
        expect(cocktail.garnish).to.be.ok
      })
    })
  })

  xdescribe('#getCocktailsAndIngredients()', function() {
    it('should return a list of all the cocktails and ingredients in the database', function() {
      return main.getCocktailsAndIngredients().then(result => {
        expect(result.length).to.equal(11)

        const row = result[0]
        expect(row.id).to.be.ok
        expect(row.name).to.be.ok
        expect(row.instructions).to.be.ok
        expect(row.garnish).to.be.ok
        expect(row.glass_id).to.be.ok
        expect(row.cocktail_id).to.be.ok
        expect(row.ingredient_id).to.be.ok
        expect(row.amount).to.be.ok
      })
    })
  })

  xdescribe('#getCocktailsWithNestedIngredients()', function() {
    it('should return a list of all the cocktails with nested ingredients', function() {
      return main.getCocktailsWithNestedIngredients().then(cocktails => {
        expect(cocktails.length).to.equal(3)

        const manhattan = cocktails.find(cocktail => cocktail.name === 'Manhattan')
        expect(manhattan.id).to.be.ok
        expect(manhattan.name).to.be.ok
        expect(manhattan.instructions).to.be.ok
        expect(manhattan.garnish).to.be.ok

        const ingredients = manhattan.ingredients
        expect(ingredients).to.be.ok

        const ingredient = ingredients[0]
        expect(ingredient.id).to.be.ok
        expect(ingredient.name).to.be.ok
        expect(ingredient.amount).to.be.ok
      })
    })
  })

  xdescribe('BONUS: #getCocktailsWithNestedIngredientsAndGlass()', function() {
    it('should return a list of all the cocktails with their ingredients and associated glass', function() {
      return main.getCocktailsWithNestedIngredientsAndGlass().then(cocktails => {
        expect(cocktails.length).to.equal(3)

        const manhattan = cocktails.find(cocktail => cocktail.name === 'Manhattan')
        expect(manhattan.id).to.be.ok
        expect(manhattan.name).to.be.ok
        expect(manhattan.instructions).to.be.ok
        expect(manhattan.garnish).to.be.ok

        const glass = manhattan.glass
        expect(glass).to.be.ok
        expect(glass.id).to.be.ok
        expect(glass.name).to.be.ok

        const ingredients = manhattan.ingredients
        expect(ingredients).to.be.ok

        const ingredient = ingredients[0]
        expect(ingredient.id).to.be.ok
        expect(ingredient.name).to.be.ok
        expect(ingredient.amount).to.be.ok
      })
    })
  })
})