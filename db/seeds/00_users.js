exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          name: 'Carl Corsini',
          email: 'carl.c.1192@gmail.com',
          password: 'yahoo',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and wormholes',
          color: 'Orange',
          friends: [2, 3]
        },
        {
          id: 2,
          name: 'Amy Boudsady',
          email: 'aeimskei@gmail.com',
          password: 'meowmix',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and food',
          color: 'White',
          friends: [1, 3]
        },
        {
          id: 3,
          name: 'Glen Pegado',
          email: 'glenpgd@gmail.com',
          password: 'password',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and the future',
          color: 'Black',
          friends: [1, 3]
        }
      ]);
    }).then(() => knex.raw(`SELECT set('"User_id_seq"', (SELECT MAX("id") FROM "User"))`))
};