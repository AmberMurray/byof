'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
  .then(function () {
    // Inserts seed entries
    return knex('schedules').insert([
      {
        id: 1,
        bar_id: 1,
        truck_id: 11
      },
      {
        id: 2,
        bar_id: 9,
        truck_id: 4
      },
      {
        id: 3,
        bar_id: 5,
        truck_id: 5
      },
      {
        id: 4,
        bar_id: 1,
        truck_id: 2
      },
      {
        id: 5,
        bar_id: 7,
        truck_id: 2
      },
      {
        id: 6,
        bar_id: 5,
        truck_id: 3
      },
      {
        id: 7,
        bar_id: 1,
        truck_id: 5
      },
      {
        id: 8,
        bar_id: 11,
        truck_id: 4
      },
      {
        id: 9,
        bar_id: 3,
        truck_id: 3
      },
      {
        id: 10,
        bar_id: 9,
        truck_id: 4
      },
      {
        id: 11,
        bar_id: 8,
        truck_id: 5
      },
      {
        id: 12,
        bar_id: 8,
        truck_id: 14
      }
    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('schedules_id_seq', (SELECT MAX(id) FROM schedules))"
    )
  })
}
