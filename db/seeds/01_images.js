exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Images').del()
    .then(function() {
      // Inserts seed entries
      return knex('Images').insert([{
          id: 1,
          image_url: 'https://espnfivethirtyeight.files.wordpress.com/2017/01/gettyimages-121661345.png?w=575&quality=90&strip=info',
          user_id: 1
        },
        {
          id: 2,
          image_url: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
          user_id: 2
        },
        {
          id: 3,
          image_url: 'http://kayhanvarzeshi.ir/files/fa/news/1397/1/7/5905_935.jpg',
          user_id: 3
        },
        {
          id: 4,
          image_url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
          user_id: 3
        }
      ]);
    }).then(() => knex.raw(`SELECT setval('"Images_id_seq"', (SELECT MAX("id") FROM "Images"))`))
};