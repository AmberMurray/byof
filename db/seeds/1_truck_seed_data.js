'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
  .then(function () {
    // Inserts seed entries
    return knex('trucks').insert([
      {
        id: 1,
        name: 'Dandy Dogs',
        food: 'American',
        safety: 1,
        safety_url: '',
        truck_pic: 'https://images.universe.com/59ec8cf8-7dff-4ec3-9998-4c7ec27880d9/-/format/jpeg/-/scale_crop/300x300/center/-/progressive/yes/-/inline/yes/',
        business_id: 'PR0083865'
      },
      {
        id: 2,
        name: 'Taqueria El Asadero',
        food: 'Latin',
        safety: 2,
        safety_url: '',
        truck_pic: 'https://www.usedvending.com/preview/0/4/23260_6_j_ico.jpg',
        business_id: 'PR0068900'
      },
      {
        id: 3,
        name: 'WhatUpDog!',
        food: 'American',
        safety: 3,
        safety_url: '',
        truck_pic: 'https://images.universe.com/93474d17-dc4d-417f-8784-b651e4ef903b/-/format/jpeg/-/scale_crop/300x300/center/-/progressive/yes/-/inline/yes/',
        business_id: 'PR0084889'
      },
      {
        id: 4,
        name: 'Mesob at the Curb',
        food: 'Ethopian',
        safety: 5,
        safety_url: '',
        truck_pic: 'http://wichitafoodtrucks.com/assets/images/trucks/truck-3.jpg',
        business_id: 'PR0083733'
      },
      {
        id: 5,
        name: 'Kaosamai Thai Cook Truck',
        food: 'Asian',
        safety: 4,
        safety_url: '',
        truck_pic: 'http://reginafarmersmarket.ca/tinthumb.php?src=userdata/listings/19812ba3d653c651255a33aaa1794202.jpg&h=300&w=300&q=100&zc=1',
        business_id: 'PR0071057'
      },
      {
        id: 6,
        name: 'John Deer Food',
        food: 'Hipster-Fresh',
        safety: 1,
        safety_url: '',
        truck_pic: 'http://www.chinatrucksupplier.com/upfile/large/Foton-mobile-fast-food-truck-price_7.jpg',
        business_id: 'PR0071057'
      },
      {
        id: 7,
        name: 'Whizzle Hizzle',
        food: 'Waffles & Such',
        safety: 3,
        safety_url: '',
        truck_pic: 'http://www.atlantamagazine.com/wp-content/uploads/sites/12/2014/01/117WH-6-cc-photosize--300x300.jpeg',
        business_id: 'PR0071057'
      },
      {
        id: 8,
        name: 'Sacred Burrito Bus',
        food: 'Burritos and Fun',
        safety: 2,
        safety_url: '',
        truck_pic: 'http://foodies.blogs.starnewsonline.com/files/2012/10/FAB-300x300.jpg',
        business_id: 'PR0071057'
      },
      {
        id: 9,
        name: 'Yellow Food',
        food: 'Yellow',
        safety: 1,
        safety_url: '',
        truck_pic: 'https://roaminghunger.com/img/trucks/m_detail/4cdb42eb-21d8-4e42-b377-6dc946204482.jpg',
        business_id: 'PR0071057'
      },
      {
        id: 10,
        name: 'Baja Not-So-Fresh',
        food: 'So-Cal Beach Food',
        safety: 5,
        safety_url: '',
        truck_pic: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/image_300x300/public/local-experts-maui-top-food-trucks.jpg?itok=13pB-6VN',
        business_id: 'PR0071057'
      },
      {
        id: 11,
        name: 'Yum Yum Yummy',
        food: 'Good Stuff',
        safety: 4,
        safety_url: '',
        truck_pic: 'http://image.made-in-china.com/43f34j00bsCaEwZhAlgc/New-Product-Ice-Cream-Cold-Drink-Food-Truck-Food-Van.jpg',
        business_id: 'PR0071057'
      },
      {
        id: 12,
        name: 'Greatest American Gyro',
        food: 'Greek',
        safety: 3,
        safety_url: '',
        truck_pic: 'https://www.caldwellhouse.com/wp-content/uploads/food-truck.jpg',
        business_id: 'PR0071057'
      },
      {
        id: 13,
        name: 'Chicken World',
        food: 'Chicken',
        safety: 4,
        safety_url: '',
        truck_pic: 'https://www.usedvending.com/preview/e/e/21238_1_j_ico.jpg',
        business_id: 'PR0071057'
      },
      {
        id: 14,
        name: 'Don Juan Lunchos',
        food: 'Cuban',
        safety: 4,
        safety_url: '',
        truck_pic: 'https://thesquarepdx.org/wp-content/uploads/2017/01/VooDoo-Web.jpg',
        business_id: 'PR0071057'
      }
      ])
    })
  .then (() => {
    return knex.raw(
      "SELECT setval('trucks_id_seq', (SELECT MAX(id) FROM trucks))"
    )
  })
}
