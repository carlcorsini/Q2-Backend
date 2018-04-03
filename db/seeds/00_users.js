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
          profile_pic: 'https://avatars2.githubusercontent.com/u/28901454?s=460&v=4',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and wormholes',
          color: 'Orange',
          friends: [2, 3, 4, 6]
        },
        {
          id: 2,
          name: 'Amy Boudsady',
          email: 'aeimskei@gmail.com',
          password: 'meowmix',
          profile_pic: 'https://avatars2.githubusercontent.com/u/23747060?s=460&v=4',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and food',
          color: 'White',
          friends: [1, 3, 2, 4]
        },
        {
          id: 3,
          name: 'Glen Pegado',
          email: 'glenpgd@gmail.com',
          password: 'password',
          profile_pic: 'https://cdn-images-1.medium.com/max/1200/0*tzjHqs7icyhShRvw.',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and the future',
          color: 'Black',
          friends: [1, 2, 4, 5]
        },
        {
          id: 4,
          name: 'Panda',
          email: 'panda@gmail.com',
          password: 'password',
          profile_pic: 'https://listen-current-prod.s3.amazonaws.com/events/photos/000/000/467/5dc32f692b8388e9e001b1c7c940bb74e17aa1bc/medium/Panda.Square.png?1434136392',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and pandas',
          color: 'Black',
          friends: [1, 2, 3, 5]
        },
        {
          id: 5,
          name: 'Robson',
          email: 'Robson@gmail.com',
          password: 'password',
          profile_pic: 'https://listen-current-prod.s3.amazonaws.com/events/photos/000/000/467/5dc32f692b8388e9e001b1c7c940bb74e17aa1bc/medium/Panda.Square.png?1434136392',
          location: 'San Francisco, CA',
          bio: 'Some really boring information about yourself',
          interests: 'Some cool stuff about yourself and pandas',
          color: 'Black',
          friends: [1, 2, 3, 4]
        },
        {
          id: 6,
          name: 'Michael',
          email: 'michael.alex.guia@gmail.com',
          password: 'password',
          profile_pic: 'http://images1.fanpop.com/images/quiz/2462_1210885994882_446_240.jpg',
          location: 'San Francisco, CA',
          bio: 'I like turtles ',
          interests: 'Some cool stuff about yourself and pandas',
          color: 'Black',
          friends: [1, 2, 3, 4]
        },

      ]);
    }).then(() => knex.raw(`SELECT setval('"User_id_seq"', (SELECT MAX("id") FROM "User"))`))
};