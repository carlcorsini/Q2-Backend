exports.up = function (knex, Promise) {
  return knex.schema.createTable('users_groups', table => {
    table.increments()
    table.integer('user_id').references('user.id').onDelete('cascade');
    table.integer('groups_id').references('groups.id').onDelete('cascade');
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users_groups')
}