'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
  .then(function () {
    // Inserts seed entries
    return knex('favorites').insert([
      {
        id: 1,
        user_id: 5,
        truck_id: 1,
      },
      {
        id: 2,
        user_id: 4,
        truck_id: 2,
      },
      {
        id: 3,
        user_id: 3,
        truck_id: 3,
      },
      {
        id: 4,
        user_id: 2,
        truck_id: 4,
      },
      {
        id: 5,
        user_id: 1,
        truck_id: 5,
      },
      {
        id: 6,
        user_id: 5,
        truck_id: 2,
      },
      {
        id: 7,
        user_id: 4,
        truck_id: 1,
      },
      {
        id: 8,
        user_id: 3,
        truck_id: 1,
      },
      {
        id: 9,
        user_id: 5,
        truck_id: 5,
      },
      {
        id: 10,
        user_id: 4,
        truck_id: 5,
      },
      {
        id: 11,
        user_id: 5,
        truck_id: 3,
      }
    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))"
    )
  })
}
