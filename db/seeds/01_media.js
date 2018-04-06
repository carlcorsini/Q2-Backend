exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('media').del()
    .then(function () {
      // Inserts seed entries
      return knex('media').insert([{
          id: 1,
          url: 'https://espnfivethirtyeight.files.wordpress.com/2017/01/gettyimages-121661345.png?w=575&quality=90&strip=info',
          type: 'image',
          title: 'Barry Bonds',
          description: 'Best hitter of all time',
          user_id: 1
        },
        {
          id: 2,
          url: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
          type: 'image',
          title: 'Caats',
          description: 'Cats r chill',
          user_id: 2
        },
        {
          id: 3,
          url: 'http://kayhanvarzeshi.ir/files/fa/news/1397/1/7/5905_935.jpg',
          type: 'image',
          title: 'Messi',
          description: 'messi is the greatest',
          user_id: 3
        },
        {
          id: 4,
          url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
          type: 'image',
          title: 'Steph',
          description: 'steph steph curry curry',
          user_id: 3
        },
        {
          id: 5,
          url: 'http://a.espncdn.com/photo/2018/0118/r315795_2_600x400_3-2.jpg',
          type: 'image',
          title: 'Stephen',
          description: 'the greatest 3 point shooter of all time',
          user_id: 1
        },
        {
          id: 6,
          url: 'https://static1.squarespace.com/static/5759eb66f850825cdd4defba/t/577ed1f5d482e9a42759c88a/1467929081439/beer.jpg?format=1500w',
          type: 'image',
          title: 'Beer',
          description: 'the greatest drink of all time',
          user_id: 1
        },
        {
          id: 7,
          url: 'https://cdn.albanesecandy.com/candy-store/images/products/popup/12-flavor-gummi-bears_7.jpg',
          type: 'image',
          title: 'Gummy Bears',
          description: 'My favorite food',
          user_id: 2
        },
        {
          id: 8,
          url: 'https://static1.squarespace.com/static/5759eb66f850825cdd4defba/t/577ed1f5d482e9a42759c88a/1467929081439/beer.jpg?format=1500w',
          type: 'image',
          title: 'Beer',
          description: 'the greatest drink of all time',
          user_id: 2
        },
        {
          id: 9,
          url: 'http://www-file.huawei.com/-/media/CORPORATE/Images/Magazine/WinWin/augmented-innovation/a-robotic-vision-of-the-future-5.jpg?la=en',
          type: 'image',
          title: 'The Future',
          description: '2020 baby!',
          user_id: 3
        },


      ]);
    }).then(() => knex.raw(`SELECT setval('"media_id_seq"', (SELECT MAX("id") FROM "media"))`))
};