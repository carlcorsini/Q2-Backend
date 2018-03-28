exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function() {
      // Inserts seed entries
      return knex('User').insert([{
          id: 1,
          name: 'Carl Corsini',
          email: 'carl.c.1192@gmail.com',
          password: 'yahoo',
          profile_pic: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          profile_pic: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350',
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
          profile_pic: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and the future',
          color: 'Black',
          friends: [1, 3]
        }
      ]);
    }).then(() => knex.raw(`SELECT setval('"User_id_seq"', (SELECT MAX("id") FROM "User"))`))
};