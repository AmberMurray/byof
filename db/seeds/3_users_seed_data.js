'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        user_name: 'hungryman231',
        user_pic: 'https://forum.zdoom.org/download/file.php?avatar=8320_1363803693.png'
      },
      {
        id: 2,
        user_name: 'foodiechick',
        user_pic: 'http://forums.redflagdeals.com/avatar/x1384546_1489841738.png.pagespeed.ic.ah1AdZQwRz.png'
      },
      {
        id: 3,
        user_name: 'eateateater',
        user_pic: 'http://www.colonial-marines.com/download/file.php?avatar=2192_1490732810.png'
      },
      {
        id: 4,
        user_name: 'greenfood4u',
        user_pic: 'https://a.ppy.sh/4575676?1428151740.png'
      },
      {
        id: 5,
        user_name: 'lovemesomegrub',
        user_pic: 'https://www.potterforums.com/download/file.php?avatar=18783_1358727137.png'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
    )
  })
}
