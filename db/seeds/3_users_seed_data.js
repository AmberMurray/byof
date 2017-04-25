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
        user_pic: 'https://forum.zdoom.org/download/file.php?avatar=8320_1363803693.png',
        user_email: 'hungryman231@aol.com',
        hashed_password: '$2a$12$W6r62jykowifvOwrEfWsTe/KMsOlvYbjZrMQQsJrp39BUQ5C7efIy'
      },
      {
        id: 2,
        user_name: 'foodiechick',
        user_pic: 'http://forums.redflagdeals.com/avatar/x1384546_1489841738.png.pagespeed.ic.ah1AdZQwRz.png',
        user_email: 'foodiechick2@gmail.com',
        hashed_password: '$2a$12$OPI6Db8tQz.c/CDGVCS4AOc6La/YFAX9GZtq1vCKR6xyiFXdc.jL6'
      },
      {
        id: 3,
        user_name: 'eateateater',
        user_pic: 'http://www.colonial-marines.com/download/file.php?avatar=2192_1490732810.png',
        user_email: 'eaterguy@gmail.com',
        hashed_password: '$2a$12$Jy3mc7k8DL/DFE3uPRX3zeRv8pGIDTvqmQQg4PsAxdli9gV0HWgyS'
      },
      {
        id: 4,
        user_name: 'greenfood4u',
        user_pic: 'https://a.ppy.sh/4575676?1428151740.png',
        user_email: 'iluvfood@comcast.net',
        hashed_password: '$2a$12$JM0YBEYybzhvTu71AWVNfeOdtIt.Dwps9W/xf9Q4B3onm0n.u6X0O'
      },
      {
        id: 5,
        user_name: 'lovemesomegrub',
        user_pic: 'https://www.potterforums.com/download/file.php?avatar=18783_1358727137.png',
        user_email: 'grubby1@outlook.com',
        hashed_password: '$2a$12$LWkZKbe/SuwjeL7rVMGUSugxouvQcx5RAxpiUgBXy9XVBfrb2SzeO'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
    )
  })
}
