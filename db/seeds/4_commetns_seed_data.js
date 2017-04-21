'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
  .then(function () {
    // Inserts seed entries
    return knex('comments').insert([
      {
        id: 1
        user_id: 5,
        truck_id: 2,
        review: 'This atmosphere rocks and the beers are tasty. This is comment id 1.'
      },
      {
        id: 2
        user_id: 4,
        truck_id: 1,
        review: 'I ambushed you with a cup of coffee! This is comment id 2.'
      },
      {
        id: 3,
        user_id: 3,
        truck_id: 3,
        review: 'I really like to hear myself talk. This is comment id 3.'
      },
      {
        id: 4,
        user_id: 2,
        truck_id: 3,
        review: 'I LIKE TO WRITE IN ALL CAPS. This is comment id 4.'
      },
      {
        id: 5,
        user_id: 1,
        truck_id: 5,
        review: 'Draw again. Draw it again. You\'re the ace field man. Draw it again. It\'s a simple diagram. Just draw it again. Draw what you saw. Draw it again! Draw it again!. This is comment id 5.'
      },
      {
        id: 6,
        user_id: 5,
        truck_id: 5,
        review: 'This atmosphere rocks and the beers are tasty. This is comment id 6.'
      },
      {
        id: 7,
        user_id: 4,
        truck_id: 2,
        review: 'I hurt somebody\'s feelings once. This is comment id 7.'
      },
      {
        id: 8,
        user_id: 3,
        truck_id: 4,
        review: 'What\'s the color of the boathouse at Hereford?. This is comment id 8.'
      },
      {
        id: 9,
        user_id: 5,
        truck_id: 3,
        review: 'Draw again. Draw it again. You\'re the ace field man. Draw it again. It\'s a simple diagram. Just draw it again. Draw what you saw. Draw it again! Draw it again! This is comment id 9.'
      },
      {
        id: 10,
        user_id: 4,
        truck_id: 4,
        review: 'Whenever there is any doubt, there is no doubt. That\'s the first thing they teach you. This is comment 10.'
      },
      {
        id: 11,
        user_id: 5,
        truck_id: 1,
        review: 'Nothing pleases me. I just like to complain. This is comment id 0.'
      }
    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments))"
    )
  })
}
