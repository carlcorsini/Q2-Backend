exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function() {
      // Inserts seed entries
      return knex('groups').insert([{
          id: 1,
          name: 'Galvanize',
          summary: 'This group is for Galvanize alumni',
          color: "orange"
        },
        {
          id: 2,
          name: 'Cat-Loverz',
          summary: 'This group is for people who LOVE cats',
          color: "brown"
        },
        {
          id: 3,
          name: 'Cat-Haterz',
          summary: 'This group is for people who HATE cats',
          color: "black"
        }
      ]);
    }).then(() => knex.raw(`SELECT setval('"groups_id_seq"', (SELECT MAX("id") FROM "groups"))`))
};