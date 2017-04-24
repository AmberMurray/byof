'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
  .then(function () {
    // Inserts seed entries
    return knex('trucks').insert([
      {
        id: 1,
        name: 'Don Juan Lunchos',
        food: 'Cuban',
        safety: 1,
        safety_url: '',
        truck_pic: 'https://images.universe.com/59ec8cf8-7dff-4ec3-9998-4c7ec27880d9/-/format/jpeg/-/scale_crop/300x300/center/-/progressive/yes/-/inline/yes/'
      },
      {
        id: 2,
        name: 'The Greatest American Gyro',
        food: 'Greek',
        safety: 2,
        safety_url: '',
        truck_pic: 'https://www.usedvending.com/preview/0/4/23260_6_j_ico.jpg'
      },
      {
        id: 3,
        name: 'Donut Burgers',
        food: 'Burgers',
        safety: 3,
        safety_url: '',
        truck_pic: 'https://images.universe.com/93474d17-dc4d-417f-8784-b651e4ef903b/-/format/jpeg/-/scale_crop/300x300/center/-/progressive/yes/-/inline/yes/'
      },
      {
        id: 4,
        name: 'Chicken World',
        food: 'American',
        safety: 5,
        safety_url: '',
        truck_pic: 'http://wichitafoodtrucks.com/assets/images/trucks/truck-3.jpg'
      },
      {
        id: 5,
        name: 'Wheely Wheely Good',
        food: 'Asian',
        safety: 4,
        safety_url: '',
        truck_pic: 'http://reginafarmersmarket.ca/tinthumb.php?src=userdata/listings/19812ba3d653c651255a33aaa1794202.jpg&h=300&w=300&q=100&zc=1'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('trucks_id_seq', (SELECT MAX(id) FROM trucks))"
    )
  })
}
