exports.up = function (knex, Promise) {
  // return knex.schema.createTable('User_groups', table => {
  //   table.increments()
  //   table.integer('user_id').references('User.id').onDelete('cascade');
  //   table.integer('groups_id').references('Groups.id').onDelete('cascade');
  //   table.timestamps(true, true)
  // })
};

exports.down = function (knex, Promise) {
  // return knex.schema.dropTable('User_groups')
};