'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
  .then(function () {
    // Inserts seed entries
    return knex('comments').insert([
      {
        id: 1,
        user_id: 5,
        truck_id: 2,
        review: 'I AM SHOUTY MCSHOUTSTER.'
      },
      {
        id: 2,
        user_id: 4,
        truck_id: 1,
        review: 'I ambushed you with a cup of coffee!'
      },
      {
        id: 3,
        user_id: 3,
        truck_id: 3,
        review: 'I really like to hear myself talk.'
      },
      {
        id: 4,
        user_id: 2,
        truck_id: 3,
        review: 'I LIKE TO WRITE IN ALL CAPS.'
      },
      {
        id: 5,
        user_id: 1,
        truck_id: 5,
        review: 'Draw again. Draw it again. You\'re the ace field man. Draw it again. It\'s a simple diagram. Just draw it again. Draw what you saw. Draw it again! Draw it again!.'
      },
      {
        id: 6,
        user_id: 5,
        truck_id: 5,
        review: 'This atmosphere rocks and the beers are tasty.'
      },
      {
        id: 7,
        user_id: 4,
        truck_id: 11,
        review: 'I hurt somebody\'s feelings once.'
      },
      {
        id: 8,
        user_id: 3,
        truck_id: 9,
        review: 'What\'s the color of the boathouse at Hereford?.'
      },
      {
        id: 9,
        user_id: 5,
        truck_id: 9,
        review: 'Draw again. Draw it again. You\'re the ace field man. Draw it again. It\'s a simple diagram. Just draw it again. Draw what you saw. Draw it again! Draw it again!'
      },
      {
        id: 10,
        user_id: 4,
        truck_id: 10,
        review: 'Umm...who puts ketchup on pancakes? That\'s just nasty.'
      },
      {
        id: 11,
        user_id: 4,
        truck_id: 12,
        review: 'Completely synthesize principle-centered information after ethical communities. Efficiently innovate open-source infrastructures via inexpensive materials.'
      },{
        id: 12,
        user_id: 4,
        truck_id: 7,
        review: 'I liked Donut Burger better.'
      },{
        id: 13,
        user_id: 4,
        truck_id: 8,
        review: 'My cousin owns this, so eat there.'
      },{
        id: 14,
        user_id: 4,
        truck_id: 8,
        review: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.'
      },{
        id: 15,
        user_id: 4,
        truck_id: 10,
        review: 'I will never eat here again.'
      },{
        id: 16,
        user_id: 4,
        truck_id: 9,
        review: 'Expensive but good.'
      },{
        id: 17,
        user_id: 4,
        truck_id: 11,
        review: 'Globally network focused materials vis-a-vis cost effective manufactured products.'
      },{
        id: 18,
        user_id: 4,
        truck_id: 6,
        review: 'Rapaciously seize adaptive infomediaries and user-centric intellectual capital.'
      },{
        id: 19,
        user_id: 4,
        truck_id: 9,
        review: 'Whenever there is any doubt, there is no doubt. That\'s the first thing they teach you. This is comment 10.'
      },{
        id: 20,
        user_id: 4,
        truck_id: 8,
        review: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
      },{
        id: 21,
        user_id: 4,
        truck_id: 7,
        review: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
      },{
        id: 22,
        user_id: 4,
        truck_id: 6,
        review: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line'
      },
      {
        id: 23,
        user_id: 4,
        truck_id: 11,
        review: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.'
      },
      {
        id: 24,
        user_id: 4,
        truck_id: 6,
        review: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'
      },
      {
        id: 25,
        user_id: 4,
        truck_id: 7,
        review: 'No. Just no.'
      },
      {
        id: 26,
        user_id: 4,
        truck_id: 8,
        review: 'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.'
      },
      {
        id: 27,
        user_id: 4,
        truck_id: 9,
        review: 'Negative, bossy meat creature.'
      },
      {
        id: 28,
        user_id: 4,
        truck_id: 10,
        review: 'Yeah. No.'
      },
      {
        id: 29,
        user_id: 4,
        truck_id: 11,
        review: 'Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than client-centric imperatives. Efficiently initiate world-class applications after client-centric infomediaries.'
      },
      {
        id: 30,
        user_id: 4,
        truck_id: 12,
        review: 'Nom nom nom.'
      },
      {
        id: 31,
        user_id: 4,
        truck_id: 14,
        review: 'Enthusiastically engage fully tested process improvements before top-line platforms.'
      },
      {
        id: 32,
        user_id: 5,
        truck_id: 13,
        review: 'Soothe us with sweet lies.'
      }
    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments))"
    )
  })
}
