exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_groups').del()
    .then(function() {
      // Inserts seed entries
      return knex('users_groups').insert([{
          id: 1,
          user_id: 1,
          groups_id: 1
        },
        {
          id: 2,
          user_id: 2,
          groups_id: 1
        },
        {
          id: 3,
          user_id: 3,
          groups_id: 2
        }
      ]);
    }).then(() => knex.raw(`SELECT setval('"users_groups_id_seq"', (SELECT MAX("id") FROM "users_groups"))`))
};