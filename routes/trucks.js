var express = require('express')
var router = express.Router();
var knex = require('../db/connection.js')

// ===== GET ALL TRUCKS =====
  router.get('/', function(req, res, next) {
  console.log("In the GET all trucks function")
  knex('trucks').select('*')
  .then(trucks => {
    // console.log('trucks is ', trucks)
    res.render('trucks', { trucks })
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
      console.log('comments is', comments)
      console.log('comments.review is', comments.review)
      console.log('truck is ', truck)
      
      let truckWithReviews = {
        name: truck.name,
        food: truck.food,
        safety: truck.safety,
        truck_pic: truck.truck_pic,
        truckId: req.params.id,
        reviews: comments
      }
      console.log('truckWithReviews is', truckWithReviews);
      res.render('show_truck', { truckWithReviews })
    })
  })
})

module.exports = router
