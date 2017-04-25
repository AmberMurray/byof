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

  let truckComments = knex('trucks').innerJoin('comments', 'comments.truck_id', 'trucks.id').where('comments.truck_id', id).returning('*')

  let truckSched =
  knex('trucks')
  .innerJoin('schedules', 'trucks.id', 'schedules.truck_id')
  .where('schedules.truck_id', id)
  .then((result) => {

    console.log(' first results are ', result)
    return knex('bars')
    .innerJoin('schedules', 'schedules.bar_id', 'bars.id')
    .returning('*')
  })

  console.log('truckComments is ', truckComments)
  console.log('truckSched is ', truckSched)

  Promise.all([truckComments, truckSched])
    .then((other) => {
      truckComments = other[0]
      truckSchedule = other[1]

      console.log('results', other);

      res.send('hi')
      })
    })

module.exports = router
