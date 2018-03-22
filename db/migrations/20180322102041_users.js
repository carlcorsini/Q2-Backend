exports.up = function(knex, Promise) {
  return knex.schema.createTable('User', table => {
    table.increments()
    table.text('name').notNullable()
    table.text('email').notNullable().unique()
    table.text('password', 'char(16)').notNullable()
    table.text('location').notNullable().defaultTo('')
    table.text('bio').notNullable().defaultTo('')
    table.text('interests').notNullable().defaultTo('')
    table.text('color').notNullable().defaultTo('')
    table.specificType('friends', 'jsonb[]')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User')
};