exports.up = function (knex, Promise) {
    return knex.schema.createTable('Groups', table => {
      table.increments()
      table.text('name').notNullable()
      table.text('summary').notNullable().defaultTo('')
      table.text('color').notNullable().defaultTo('')
      table.timestamps(true, true)
    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Groups')
};