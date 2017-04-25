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

  knex('trucks')
  .select('*')
  .innerJoin('schedules', 'trucks.id', 'schedules.truck_id')
  .innerJoin('bars', 'schedules.bar_id', 'bars.id')
  .where('schedules.truck_id', id)
  // .then(truck => {
  .then((bars) => {
    return knex('comments')
      .select('*')
      .innerJoin('trucks', 'comments.truck_id', 'trucks.id')
      .where('comments.truck_id', id)
      .then((comments) => {
        console.log('comments is', comments)
        console.log('bars is', bars)
        console.log()
          let truckWithReviews = {
            bars: bars,
            comments: comments
          }
          console.log('truckWithReviews is ', truckWithReviews)
          console.log('truckWithReview.comment etc', truckWithReviews.comments.truck_pic)
          res.render('show_truck', { truckWithReviews })
      })
    })
  })


module.exports = router
