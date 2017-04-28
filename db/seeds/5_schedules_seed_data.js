'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
  .then(function () {
    // Inserts seed entries
    return knex('schedules').insert([
      {
        id: 1,
        bar_id: 2,
        truck_id: 3
      },
      {
        id: 2,
        bar_id: 3,
        truck_id: 4
      },
      {
        id: 3,
        bar_id: 4,
        truck_id: 5
      },
      {
        id: 4,
        bar_id: 5,
        truck_id: 6
      },
      {
        id: 5,
        bar_id: 6,
        truck_id: 7
      },
      {
        id: 6,
        bar_id: 7,
        truck_id: 8
      },
      {
        id: 7,
        bar_id: 8,
        truck_id: 9
      },
      {
        id: 8,
        bar_id: 9,
        truck_id: 10
      },
      {
        id: 9,
        bar_id: 10,
        truck_id: 11
      },
      {
        id: 10,
        bar_id: 11,
        truck_id: 12
      },
      {
        id: 11,
        bar_id: 12,
        truck_id: 13
      },
      {
        id: 12,
        bar_id: 1,
        truck_id: 14
      },
      {
        id: 13,
        bar_id: 2,
        truck_id: 15
      },
      {
        id: 14,
        bar_id: 3,
        truck_id: 16
      },
      {
        id: 15,
        bar_id: 4,
        truck_id: 1
      },
      {
        id: 16,
        bar_id: 5,
        truck_id: 2
      },
      {
        id: 17,
        bar_id: 6,
        truck_id: 3
      },
      {
        id: 18,
        bar_id: 7,
        truck_id: 4
      },
      {
        id: 19,
        bar_id: 8,
        truck_id: 5
      },
      {
        id: 20,
        bar_id: 9,
        truck_id: 6
      },
      {
        id: 21,
        bar_id: 10,
        truck_id: 7
      },
      {
        id: 22,
        bar_id: 11,
        truck_id: 8
      },
      {
        id: 23,
        bar_id: 12,
        truck_id: 9
      },
      {
        id: 24,
        bar_id: 1,
        truck_id: 10
      },
      {
        id: 25,
        bar_id: 2,
        truck_id: 11
      },
      {
        id: 26,
        bar_id: 3,
        truck_id: 12
      }

    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('schedules_id_seq', (SELECT MAX(id) FROM schedules))"
    )
  })
}
