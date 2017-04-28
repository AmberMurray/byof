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
        truck_id: 5,
        review: 'I AM SHOUTY MCSHOUTSTER.'
      },
      {
        id: 2,
        user_id: 4,
        truck_id: 4,
        review: 'I don’t know what could have saved limp, dispiriting yam dumplings, but it definitely was not a lukewarm matsutake mushroom bouillon as murky and appealing as bong water.'
      },
      {
        id: 3,
        user_id: 3,
        truck_id: 3,
        review: 'I really like to hear myself talk.'
      },
      {
        id: 4,
        user_id: 1,
        truck_id: 3,
        review: 'I LIKE TO WRITE IN ALL CAPS.'
      },
      {
        id: 5,
        user_id: 2,
        truck_id: 5,
        review: 'I love jujubes marshmallow wafer gingerbread pie candy canes. Jujubes pudding lollipop dessert. Sugar plum chupa chups I love chocolate bonbon pie gingerbread.'
      },
      {
        id: 6,
        user_id: 3,
        truck_id: 5,
        review: 'It would be generous to say that the food is adequate but overpriced.'
      },
      {
        id: 7,
        user_id: 4,
        truck_id: 11,
        review: 'I wouldn’t wish a fire on anybody’s business, but at least if we had been evacuated by a false alarm I wouldn’t have had to eat their food.'
      },
      {
        id: 8,
        user_id: 5,
        truck_id: 1,
        review: 'The food is mostly serviceable, minus a dry and beefy-tasting lamb burger, a sad salmon tartare prepared without an ounce of love, and the desserts, which are uniformly bad.'
      },
      {
        id: 9,
        user_id: 6,
        truck_id: 9,
        review: 'The fries were like overcooked woody batons.'
      },
      {
        id: 10,
        user_id: 7,
        truck_id: 10,
        review: 'Umm...who puts ketchup on pancakes? That is just nasty.'
      },
      {
        id: 11,
        user_id: 8,
        truck_id: 12,
        review: 'The risotto with scallops is where hope goes to die.'
      },
      {
        id: 12,
        user_id: 10,
        truck_id: 7,
        review: 'They ran-over my foot, but the food is tasty.'
      },
      {
        id: 13,
        user_id: 10,
        truck_id: 8,
        review: 'My cousin owns this, so eat there.'
      },
      {
        id: 14,
        user_id: 11,
        truck_id: 8,
        review: 'Fruitcake dragée tootsie roll muffin tiramisu. Soufflé pudding macaroon bonbon cake dragée soufflé bear claw dragée. Danish cake chupa chups donut sesame snaps.'
      },
      {
        id: 15,
        user_id: 12,
        truck_id: 10,
        review: 'I will never eat here again.'
      },
      {
        id: 16,
        user_id: 13,
        truck_id: 12,
        review: 'Expensive but good.'
      },
      {
        id: 17,
        user_id: 14,
        truck_id: 11,
        review: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'
      },
      {
        id: 18,
        user_id: 15,
        truck_id: 6,
        review: 'The seafood risotto was as mushy as wallpaper paste.'
      },
      {
        id: 19,
        user_id: 16,
        truck_id: 9,
        review: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'
      },
      {
        id: 20,
        user_id: 17,
        truck_id: 8,
        review: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.'
      },
      {
        id: 21,
        user_id: 18,
        truck_id: 16,
        review: 'IPie candy canes carrot cake tart brownie liquorice marzipan. Liquorice marshmallow oat cake. Donut wafer donut. Tootsie roll wafer brownie brownie biscuit.'
      },
      {
        id: 22,
        user_id: 19,
        truck_id: 15,
        review: 'I was expecting it to be better.'
      },
      {
        id: 23,
        user_id: 20,
        truck_id: 11,
        review: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.'
      },
      {
        id: 24,
        user_id: 21,
        truck_id: 6,
        review: 'Tri-tip picanha jowl cupim pork chop. Capicola alcatra fatback, drumstick pork spare ribs landjaeger shoulder venison bacon filet mignon. Meatloaf chicken sausage bresaola boudin picanha porchetta.'
      },
      {
        id: 25,
        user_id: 22,
        truck_id: 7,
        review: 'No. Just no.'
      },
      {
        id: 26,
        user_id: 23,
        truck_id: 8,
        review: 'Topping carrot cake danish marshmallow. Croissant cupcake cookie pastry tart. Fruitcake toffee fruitcake topping pie gummies. Jujubes liquorice caramels croissant. Sweet biscuit tootsie roll sesame snaps chupa chups brownie candy. Candy cotton candy chupa chups oat cake. Gummies biscuit muffin liquorice topping dessert cupcake. Jelly beans toffee lemon drops candy sugar plum chocolate liquorice cotton candy fruitcake.'
      },
      {
        id: 27,
        user_id: 24,
        truck_id: 9,
        review: 'Negative, bossy meat creature.'
      },
      {
        id: 28,
        user_id: 25,
        truck_id: 10,
        review: 'Yeah. No.'
      },
      {
        id: 29,
        user_id: 26,
        truck_id: 11,
        review: 'Ham hock andouille tenderloin hamburger sirloin doner jowl. Flank pork loin pork belly burgdoggen. Pastrami t-bone tongue cupim ball tip, porchetta corned beef chuck andouille ham hock venison ribeye ham.'
      },
      {
        id: 30,
        user_id: 27,
        truck_id: 12,
        review: 'Nom nom nom.'
      },
      {
        id: 31,
        user_id: 28,
        truck_id: 14,
        review: 'Gummi bears icing bonbon. Candy canes cheesecake chocolate chocolate cake pudding biscuit chocolate bar cake sesame snaps. Danish oat cake gummies. Marshmallow toffee brownie topping carrot cake jelly-o dessert tiramisu. Sugar plum tart chupa chups. Ice cream tart wafer. Pudding dessert lollipop. Bonbon cookie apple pie. Gummi bears powder macaroon.'
      },
      {
        id: 32,
        user_id: 29,
        truck_id: 13,
        review: 'Bonbon cookie gingerbread fruitcake wafer croissant gingerbread sweet chocolate cake. Powder pie bonbon icing dragée jujubes. Soufflé jelly-o cupcake biscuit croissant caramels muffin. Tiramisu fruitcake chocolate dragée bonbon wafer soufflé candy canes.'
      },
      {
        id: 33,
        user_id: 9,
        truck_id: 1,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 34,
        user_id: 9,
        truck_id: 2,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 35,
        user_id: 14,
        truck_id: 3,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 36,
        user_id: 9,
        truck_id: 13,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 37,
        user_id: 9,
        truck_id: 5,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 38,
        user_id: 9,
        truck_id: 6,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 39,
        user_id: 9,
        truck_id: 7,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 40,
        user_id: 9,
        truck_id: 8,
        review: 'I liked Donut Burger better.'
      },
      {
        id: 41,
        user_id: 9,
        truck_id: 1,
        review: 'Check out the onion rings - out of this world!'
      },
      {
        id: 42,
        user_id: 13,
        truck_id: 2,
        review: 'Fruitcake dragée tootsie roll muffin tiramisu. Soufflé pudding macaroon bonbon cake dragée soufflé bear claw dragée. Danish cake chupa chups donut sesame snaps.'
      },
      {
        id: 43,
        user_id: 9,
        truck_id: 3,
        review: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'
      },
      {
        id: 44,
        user_id: 9,
        truck_id: 4,
        review: 'Tri-tip picanha jowl cupim pork chop. Capicola alcatra fatback, drumstick pork spare ribs landjaeger shoulder venison bacon filet mignon. Meatloaf chicken sausage bresaola boudin picanha porchetta.'
      },
      {
        id: 45,
        user_id: 3,
        truck_id: 13,
        review: 'Gummi bears icing bonbon. Candy canes cheesecake chocolate chocolate cake pudding biscuit chocolate bar cake sesame snaps. Danish oat cake gummies. Marshmallow toffee brownie topping carrot cake jelly-o dessert tiramisu. Sugar plum tart chupa chups. Ice cream tart wafer. Pudding dessert lollipop. Bonbon cookie apple pie. Gummi bears powder macaroon.'
      },
      {
        id: 46,
        user_id: 20,
        truck_id: 14,
        review: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.'
      },
      {
        id: 47,
        user_id: 11,
        truck_id: 14,
        review: 'FAIL.'
      },
      {
        id: 48,
        user_id: 15,
        truck_id: 14,
        review: 'I don’t know what could have saved limp, dispiriting yam dumplings, but it definitely was not a lukewarm matsutake mushroom bouillon as murky and appealing as bong water.'
      }

    ])
  })
  .then (() => {
    return knex.raw(
      "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments))"
    )
  })
}
