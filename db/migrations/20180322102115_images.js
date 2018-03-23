exports.up = function(knex, Promise) {
  return knex.schema.createTable('Images', table => {
    table.increments()
    table.text('image_url').notNullable()
    table.integer('user_id').references('User.id').onDelete('cascade');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Images')
};