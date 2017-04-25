var express = require('express')
var router = express.Router();
var knex = require('../db/connection.js')

// ===== GET ALL TRUCKS =====
  router.get('/', function(req, res, next) {
  console.log("In the GET all trucks function")
  knex('trucks').select('*')
  .then(trucks => {
    res.render('trucks', { trucks })
  })
})

// ===== GET ALL BARS NEAR A PARTICULAR TRUCK =====
  router.get('/:id/schedules', function(req, res, next) {
  console.log("In the GET schedule function")
  console.log("req.params.id is ", req.params.id)
  id = req.params.id

  knex('trucks').select('*')
  .innerJoin('schedules', 'trucks.id', 'schedules.truck_id')
  .innerJoin('bars', 'schedules.bar_id', 'bars.id')
   .where('schedules.truck_id', id)
   .then(nearby => {
     console.log('nearby is ', nearby)
     res.render('show_truck', nearby )
   })
})

// ===== GET ONE TRUCK =====
  router.get('/:id', function(req, res, next) {
  console.log("In the GET one truck function")
  var id = req.params.id
  console.log('id is ', id);

  let truckComments = knex('comments').where('truck_id', id)
  .select('comments.review')

  let truckSched = knex('schedules')
  .innerJoin('bars', 'bars.id', 'schedules.bar_id')
  // .select('*', 'bars.id as idBar', 'schedules.bar_id as idSched')
  .where('schedules.truck_id', id)
  .select('bars.name')

  let truckInfo = knex('trucks')
  .where('trucks.id', id)
  .select('*')

Promise.all([truckComments, truckSched, truckInfo])
.then((results) => {
  let monsterTruck = {
    commentDeets: results[0],
    schedDeets: results[1],
    truckDeets: results[2][0]
  }
  console.log('monster truck ', monsterTruck)
  res.render('show_truck', {monsterTruck})
})

})

module.exports = router
