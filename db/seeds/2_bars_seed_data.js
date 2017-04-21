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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
        bar_pic: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97500&w=500&h=150',
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
