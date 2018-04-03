exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friendships').del()
    .then(function() {
      // Inserts seed entries
      return knex('friendships').insert([{
          id: 1,
          follower_id: 1,
          followee_id: 2
        },
        {
          id: 2,
          follower_id: 2,
          followee_id: 1
        },
        {
          id: 3,
          follower_id: 3,
          followee_id: 1
        },
        {
          id: 4,
          follower_id: 1,
          followee_id: 3
        },
        {
          id: 5,
          follower_id: 1,
          followee_id: 4
        },
      ]);
    }).then(() => knex.raw(`SELECT setval('"User_groups_id_seq"', (SELECT MAX("id") FROM "User_groups"))`))
};