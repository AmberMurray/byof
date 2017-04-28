'use strict'

exports.seed = function(knex) {
  return knex('users').del()
  .then(function () {
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
        user_pic: 'http://img4.bdbphotos.com/images/50x50/l/7/l7b7kgz92c8yc2.jpg?skj2io4l',
        user_email: 'cbronte@gmail.com',
        hashed_password: '$2a$12$blqT2IdQqqzsV9zZ3G6eVuRBHMdOPssYI5qU9GowTENPZBHopvIva'
      },
      {
        id: 13,
        user_name: 'mrthornton',
        user_pic: 'https://www.potterforums.com/download/file.php?avatar=18783_1358727137.png',
        user_email: 'maggiehale@milton.org',
        hashed_password: '$2a$12$Blk8Q6.qdmv6lwrkUl8SiOsy9WBILeazEb/pmeeW644GYqudiePxK'
      },
      {
        id: 14,
        user_name: 'badbecky',
        user_pic: 'https://cdn.meme.am/images/50x50/16536858.jpg',
        user_email: 'bsharp@vfair.com',
        hashed_password: '$2a$12$ZZgtIfYASMGdlngA2hIsIOARmd6Hpd6VFq7IUTP0Gfv0EUpVTdVFq'
      },
      {
        id: 15,
        user_name: 'test',
        user_pic: 'http://getapuppy.ca/wp-content/uploads/2017/01/145481-50x50.jpeg',
        user_email: 'test@test.com',
        hashed_password: '$2a$12$.IHJRkbj67QIedUTLQBHc.700oDyYUNb9kLmqSG1FzO6Rpzy5NDW2'
      },
      {
        id: 16,
        user_name: 'catch22',
        user_pic: 'https://resizing.flixster.com/1knnZbbfq70-_cKguRcJ321Y6tc=/50x50/v1.bjszMTQ3ODA7ajsxNzMyODsxMjAwOzE1MzY7MjA0OA',
        user_email: 'yossarian@nowin.org',
        hashed_password: '$2a$12$zoEa9/lzz5eE4jRwtTuPOuvbP3sQVWn4po4csxAUasc3fUKIwVUJO'
      },
      {
        id: 17,
        user_name: 'justbegunn5',
        user_pic: 'http://www.coolmenhairstyles.com/wp-content/uploads/Celebrity-Hairstyles-and-The-Trends-2014-1-50x50.jpg',
        user_email: 'bgunn@spyglass.edu',
        hashed_password: '$2a$12$tnihvB1bKTBt6We/Qkd5lOd61x2WzBp2Fhrjn8kmF3bJxBCI3z1WK'
      },
      {
        id: 18,
        user_name: 'rerun',
        user_pic: 'http://www.kabc.com/wp-content/uploads/sites/320/2017/02/Rick-Astley-50x50.jpg',
        user_email: 'whatshappenin@clarememont.gov',
        hashed_password: '$2a$12$2BVy/VUEoOxRjC1C6NdVReOS4oagW1LHbMSxp2jDnfeu.MQLKPoxe'
      },
      {
        id: 19,
        user_name: 'mrsnoot',
        user_pic: 'http://www.internetphenomenon.co.uk/images/24686x50.jpg',
        user_email: 'jcotton@niagara.com',
        hashed_password: '$2a$12$B2u3PpuhUnVccNxhohKe9.0IWD67zvLFdtjyKMvzpuVKCcpu.drM.'
      },
      {
        id: 20,
        user_name: 'sherlock3',
        user_pic: 'https://cdn.meme.am/cache/images/folder693/50x50/9887693.jpg',
        user_email: 'bcumberbatch@bakerst.com',
        hashed_password: '$2a$12$WkaL89STkYyRshgK5EQDEOPVOj9gFJljud9Q8gXtJ/a8l.B0Rza/6'
      },
      {
        id: 21,
        user_name: 'imontoya',
        user_pic: 'https://cdn.meme.am/cache/images/folder183/50x50/4704183.jpg',
        user_email: 'prepare2die@pbride.org',
        hashed_password: '$2a$12$Eg/tdXwMatQNqg4bZvbd5exCrGnQw/OvYLOZPGiM1./vKUKOlbjvK'
      },
      {
        id: 22,
        user_name: 'greendocklight',
        user_pic: 'https://static.raru.co.za/cover/2015/11/05-44/3307523-xs.jpg?v=1446678000',
        user_email: 'jgatsby@bigegg.org',
        hashed_password: '$2a$12$Xrva/PXUtutIi7f.LdYLnehnO2z1IMRppA5jR44xqWdfJe6Jf7mne'
      },
      {
        id: 23,
        user_name: 'neuromancer',
        user_pic: 'http://a.deviantart.net/avatars/r/i/rickastleyplz.jpg',
        user_email: 'wgibson@overdrive.com',
        hashed_password: '$2a$12$t5kBgSb/O.uWMmuz/ma5uuP54GQInXIUzFIQCEHlDLKGTKFmCFZLu'
      },
      {
        id: 24,
        user_name: 'lottasalem',
        user_pic: 'http://northiowatoday.com/wp-content/uploads/2015/05/ANDREW-REED-BABBITT-50x50.jpg',
        user_email: 'rflagg@letmein.com',
        hashed_password: '$2a$12$7QBqdFBDICDZAKp4ic7SC.d86kwG1OYisLiuIapwYFyTpF13Tsmku'
      },
      {
        id: 25,
        user_name: 'majormajor',
        user_pic: 'http://northiowatoday.com/wp-content/uploads/2015/05/ANDREW-REED-BABBITT-50x50.jpg',
        user_email: 'majormajor@c22.gov',
        hashed_password: '$2a$12$KTbqDZGKUwBOXUXgb4Gqx.EBbZhcImdokxPLrSGqviHR/XJF/g4k.'
      },
      {
        id: 26,
        user_name: 'klear',
        user_pic: 'http://img4.bdbphotos.com/images/50x50/c/7/c7p20bcybs9zy0s2.jpg?skj2io4l',
        user_email: '3kids@noclue.org',
        hashed_password: '$2a$12$igzd0jKdbCw8xQS.FcRR4eAw4.w0bnbauxr/k8VzuCPBIeTQhnJ6K'
      },
      {
        id: 27,
        user_name: 'hardyheroine',
        user_pic: 'http://www.quoteswave.com/wp-content/uploads/2012/11/Paul-Lynde-50x50.jpg',
        user_email: 'eustaciav@moors.edu',
        hashed_password: '$2a$12$DdsprjhShnh3UpL/rEZune3eNlbnT3UK3UyVkkQDM6fReyvrHo0aK'
      },
      {
        id: 28,
        user_name: 'missaitch',
        user_pic: 'https://i.warosu.org/data/tg/thumb/0411/75/1436723371818s.jpg',
        user_email: 'mhavisham@spookyhouse.com',
        hashed_password: '$2a$12$VsoVf1mt7A.Wy2kZEkjLo.Kb89NrJ44BVzJQV4EvykXBadRa6YGmi'
      },
      {
        id: 29,
        user_name: 'shrugging1',
        user_pic: 'http://guyslonghair.com/wp-content/uploads/2017/01/white-guys-with-dreadlocks-hairstyles-50x50.jpg?a127b9',
        user_email: 'jgalt@heh.gov',
        hashed_password: '$2a$12$R9K75MyqRAKsplbIXYz1AO2ai1/D0tCf4bnlNMEe5lE7/4/7JLbD.'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
    )
  })
}
