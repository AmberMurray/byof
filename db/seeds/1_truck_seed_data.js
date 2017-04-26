'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
  .then(function () {
    // Inserts seed entries
    return knex('trucks').insert([
      {
        id: 1,
        name: 'Dandy Dogs',
        food: 'American',
        safety: 1,
        safety_url: '',
        truck_pic: 'https://images.universe.com/59ec8cf8-7dff-4ec3-9998-4c7ec27880d9/-/format/jpeg/-/scale_crop/300x300/center/-/progressive/yes/-/inline/yes/',
        business_id: 'PR0083865'
      },
      {
        id: 2,
        name: 'Taqueria El Asadero',
        food: 'Latin',
        safety: 2,
        safety_url: '',
        truck_pic: 'https://www.usedvending.com/preview/0/4/23260_6_j_ico.jpg',
        business_id: 'PR0068900'
      },
      {
        id: 3,
        name: 'WhatUpDog!',
        food: 'American',
        safety: 3,
        safety_url: '',
        truck_pic: 'https://images.universe.com/93474d17-dc4d-417f-8784-b651e4ef903b/-/format/jpeg/-/scale_crop/300x300/center/-/progressive/yes/-/inline/yes/',
        business_id: 'PR0084889'
      },
      {
        id: 4,
        name: 'Mesob at the Curb',
        food: 'Ethopian',
        safety: 5,
        safety_url: '',
        truck_pic: 'http://wichitafoodtrucks.com/assets/images/trucks/truck-3.jpg',
        business_id: 'PR0083733'
      },
      {
        id: 5,
        name: 'Kaosamai Thai Cook Truck',
        food: 'Asian',
        safety: 4,
        safety_url: '',
        truck_pic: 'http://reginafarmersmarket.ca/tinthumb.php?src=userdata/listings/19812ba3d653c651255a33aaa1794202.jpg&h=300&w=300&q=100&zc=1',
        business_id: 'PR0071057'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('trucks_id_seq', (SELECT MAX(id) FROM trucks))"
    )
  })
}
