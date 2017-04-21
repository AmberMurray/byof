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
        truck_pic: 'https://images.universe.com/59ec8cf8-7dff-4ec3-9998-4c7ec27880d9/-/format/jpeg/-/scale_crop/500x500/center/-/progressive/yes/-/inline/yes/'},
      {
        id: 2,
        name: 'The Greatest American Gyro',
        food: 'Greek',
        safety: 2,
        safety_url: '',
        truck_pic: 'https://news.boisestate.edu/update/files/2016/08/food-truck.jpg'
      },
      {
        id: 3,
        name: 'Donut Burgers',
        food: 'Burgers',
        safety: 3,
        safety_url: '',
        truck_pic: 'https://images.universe.com/93474d17-dc4d-417f-8784-b651e4ef903b/-/format/jpeg/-/scale_crop/500x500/center/-/progressive/yes/-/inline/yes/'
      },
      {
        id: 4,
        name: 'Chicken World',
        food: 'American',
        safety: 5,
        safety_url: '',
        truck_pic: 'https://c1.staticflickr.com/4/3853/15251753445_a9ba112e74_z.jpg'
      },
      {
        id: 5,
        name: 'Wheely Wheely Good',
        food: 'Asian',
        safety: 4,
        safety_url: '',
        truck_pic: 'https://images-platform.99static.com/d_dUQHkOzhhkjKgdcAKRQFArSTM=/0x0:1860x1860/500x500/top/smart/99designs-contests-attachments/67/67155/attachment_67155482'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('trucks_id_seq', (SELECT MAX(id) FROM trucks))"
    )
  })
}
