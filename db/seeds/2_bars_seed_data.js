'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bars').del()
  .then(function () {
    // Inserts seed entries
    return knex('bars').insert([
      {
        id: 1,
        name: 'Fremont Brewing',
        address: '1050 N 34th St',
        city: 'Seattle',
        state: 'WA',
        zip: 98103,
        bar_pic: 'https://s-media-cache-ak0.pinimg.com/originals/d1/9c/7a/d19c7aa07d3b719b540d30b0c2e88bb9.jpg',
        beer: true,
        liquor: false
      },
      {
        id: 2,
        name: 'Reuben\'s Brews',
        address: '5010 14th Ave NW',
        city: 'Seattle',
        state: 'WA',
        zip: 98107,
        bar_pic: 'https://thepourfooldotcom.files.wordpress.com/2016/01/hoptropic-e1452810875445.jpg',
        beer: true,
        liquor: false
      },
      {
        id: 3,
        name: 'Hellbent Brewing',
        address: '13035 Lake City Way NE',
        city: 'Seattle',
        state: 'WA',
        zip: 98125,
        bar_pic: 'https://wandsandspoons.files.wordpress.com/2014/07/20140725-113403-41643601.jpg?w=560',
        beer: true,
        liquor: false
      },
      {
        id: 4,
        name: 'Beveridge Place Pub',
        address: '6413 California Ave SW',
        city: 'Seattle',
        state: 'WA',
        zip: 98136,
        bar_pic: 'https://s-media-cache-ak0.pinimg.com/736x/a4/35/84/a43584bfb9e3c99b19ec0ca34df1e56b.jpg',
        beer: true,
        liquor: true
      },
      {
        id: 5,
        name: 'The Stumbling Monk',
        address: '1635 E Olive Way',
        city: 'Seattle',
        state: 'WA',
        zip: 98102,
        bar_pic: 'https://igx.4sqi.net/img/general/300x300/6933748_EAiinqD3qSMAbZyklpn_8BuYR3kwhp_UuQgC_mGK438.jpg',
        beer: true,
        liquor: true
      },
      {
        id: 6,
        name: 'Flying Bike Cooperative Brewery',
        address: '8570 Greenwood Ave N',
        city: 'Seattle',
        state: 'WA',
        zip: 98103,
        bar_pic: 'https://iotm-uploads.s3.amazonaws.com/takoma282993_333819590031342_12544243_n_300x300.jpg',
        beer: true,
        liquor: false
      },
      {
        id: 7,
        name: 'Optimism Brewing Company',
        address: '1924 Post Alley',
        city: 'Seattle',
        state: 'WA',
        zip: 98101,
        bar_pic: 'https://s-media-cache-ak0.pinimg.com/736x/e5/b0/81/e5b0816fb41294a23bd0ca332c4b8390.jpg',
        beer: true,
        liquor: false
      },
      {
        id: 8,
        name: 'Ballard Beer Company',
        address: '2050 NW Market St',
        city: 'Seattle',
        state: 'WA',
        zip: 98107,
        bar_pic: 'http://www.abbottsvillagetavern.com/s/cc_images/cache_6514330.jpg?t=1417833845',
        beer: true,
        liquor: false
      },
      {
        id: 9,
        name: 'Ballard Station Public House',
        address: '2236 NW Market St',
        city: 'Seattle',
        state: 'WA',
        zip: 98107,
        bar_pic: 'https://s-media-cache-ak0.pinimg.com/736x/9b/36/7f/9b367f84c58f8d8472d524749d04e694.jpg',
        beer: true,
        liquor: false
      },
      {
        id: 10,
        name: 'The Electric Boat Company',
        address: '2046 Westlake Ave N',
        city: 'Seattle',
        state: 'WA',
        zip: 98109,
        bar_pic: 'http://paraphernalia.co/wp-content/uploads/2016/08/image-31-300x300.jpeg',
        beer: false,
        liquor: false
      },
      {
        id: 11,
        name: 'Hale\’s Ales Brewery & Pub',
        address: '4301 Leary Way NW',
        city: 'Seattle',
        state: 'WA',
        zip: 98107,
        bar_pic: 'http://www.thesuntavern.co.uk/wp-content/uploads/2015/05/the-sun-tavern-gallery-05-300x300.jpg',
        beer: true,
        liquor: true
      }

    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('bars_id_seq', (SELECT MAX(id) FROM bars))"
    )
  })
}
