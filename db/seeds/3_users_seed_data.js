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
        user_name: '2muchfreetime',
        user_pic: 'https://images-na.ssl-images-amazon.com/images/I/51SeGTnbVlL._SS40_.jpg',
        user_email: 'ihavenolife@comcast.net',
        hashed_password: '$2a$12$sLNU9DOiEqdXf57xMLXD5umfCVRbzXv3eNCB3VDv.nImelIT31O/q'
      },
      {
        id: 6,
        user_name: 'mom2five',
        user_pic: 'https://i0.wp.com/jdgreening.files.wordpress.com/2017/02/mullet-hairstyle.jpg?resize=40%2C40&ssl=1',
        user_email: 'fivekids@stuff.org',
        hashed_password: '$2a$12$kRd0/O8K9xbEjXabC4rzy.A27I5fkoT9gGm1E1HQkR9Bq1xlBhy2C'
      },
      {
        id: 7,
        user_name: 'iheartpuppies',
        user_pic: 'http://www.rkomedia.net/wp-content/uploads/ktz/mullet-haircuts-cool-32o066m2hp48rkxoonmive.jpg',
        user_email: 'joeschmo@somedomain.net',
        hashed_password: '$2a$12$oXD8JohcR3pyzkcCHvgjFOG9.sZKq1G8zSGHOxBd1baWF9BXIqWJi'
      },
      {
        id: 8,
        user_name: 'qwerty',
        user_pic: 'https://wfmu.org/Gfx/user_images/72_Mullet_3572404794909106_pc.jpg',
        user_email: 'qwerty6@urochester.edu',
        hashed_password: '$2a$12$Iusqu28j2jd1Og0KqU4ebO2zS.vJTR9qrc.uyJ2BwUgq2kVRez/O6'
      },
      {
        id: 9,
        user_name: 'reviewsare4me',
        user_pic: 'https://us.v-cdn.net/5020142/uploads/userpics/429/n7E6C1YL83PNS.jpg',
        user_email: 'ovcalhoun@babson.edu',
        hashed_password: '$2a$12$VWpW1U.oGpinFKA8psxzGuIqBvXtks35Hc.zklbuRtN5/jGlQmFpq'
      },
      {
        id: 10,
        user_name: 'harrylime',
        user_pic: 'https://1.gravatar.com/avatar/489ca974a9d84e6e52f35e79254f850a?s=40&d=identicon&r=G',
        user_email: 'thisisaword@notredame.edu',
        hashed_password: '$2a$12$8kSKce9STmrr0Ad9vGqhT.MUrnF.b02d0xfKEPXpPZd1eMSY05IYy'
      },
      {
        id: 11,
        user_name: 'paid2review',
        user_pic: 'https://i1.wp.com/awakeblackwoman.files.wordpress.com/2013/10/locs-and-twist-curl.jpg?resize=40%2C40',
        user_email: 'saltyhash@bcrypt.net',
        hashed_password: '$2a$12$KXJ9SdFlOMiTfaK33w04QOIytSzLYEfZw52zJiEXzGlibQzZHPcdO'
      },
      {
        id: 12,
        user_name: 'mrrochester',
        user_pic: 'https://a.ppy.sh/4575676?1428151740.png',
        user_email: 'cbronte@gmail.com',
        hashed_password: '$2a$12$blqT2IdQqqzsV9zZ3G6eVuRBHMdOPssYI5qU9GowTENPZBHopvIva'
      },
      {
        id: 13,
        user_name: 'mrthornton',
        user_pic: 'https://www.potterforums.com/download/file.php?avatar=18783_1358727137.png',
        user_email: 'maggiehale@milton.org',
        hashed_password: '$2a$12$Blk8Q6.qdmv6lwrkUl8SiOsy9WBILeazEb/pmeeW644GYqudiePxK'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
    )
  })
}
