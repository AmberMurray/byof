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

  knex('schedules').select('*')
  .innerJoin('trucks', 'trucks.id', 'schedules.truck_id')
   .where('schedules.truck_id', id)
   .then(nearby => {
     console.log('nearby is ', nearby)
     res.send(nearby)
   })
})

// ===== GET ONE TRUCK =====
  router.get('/:id', function(req, res, next) {
  console.log("In the GET one truck function")
  var id = req.params.id

  knex('trucks')
  .select('*')
  .where('id', id)
  .first()
  .then(truck => {
    knex('comments')
    .select('*')
    .where('truck_id', truck.id)
    .then(comments => {
      let truckWithReviews = {
        name: truck.name,
        food: truck.food,
        safety: truck.safety,
        truck_pic: truck.truck_pic,
        truckId: req.params.id,
        reviews: comments
      }
      res.render('show_truck', { truckWithReviews })
    })
  })
})

module.exports = router
