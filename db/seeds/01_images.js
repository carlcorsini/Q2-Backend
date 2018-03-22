exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Images').del()
    .then(function () {
      // Inserts seed entries
      return knex('Images').insert([{
          id: 1,
          image_url: 'http://via.placeholder.com/275x275',
          user_id: 1
        },
        {
          id: 2,
          image_url: 'http://via.placeholder.com/275x275',
          user_id: 2
        },
        {
          id: 3,
          image_url: 'http://via.placeholder.com/275x275',
          user_id: 3
        }
      ]);
    }).then(() => knex.raw(`SELECT setval('"Images_id_seq"', (SELECT MAX("id") FROM "Images"))`))
};