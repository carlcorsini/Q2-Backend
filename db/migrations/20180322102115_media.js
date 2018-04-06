exports.up = function (knex, Promise) {
  return knex.schema.createTable('media', table => {
    table.increments()
    table.text('url').notNullable()
    table.text('type').notNullable()
    table.text('title').notNullable()
    table.text('description').notNullable()
    table.integer('user_id').references('user.id').onDelete('cascade');
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('media')
};