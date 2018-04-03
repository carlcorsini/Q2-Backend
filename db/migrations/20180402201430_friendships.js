exports.up = function(knex, Promise) {
  return knex.schema.createTable('friendships', table => {
    table.increments()
    table.integer('follower_id').references('User.id').onDelete('cascade');
    table.integer('followee_id').references('User.id').onDelete('cascade');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User_groups')
};