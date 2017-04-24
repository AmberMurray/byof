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
    console.log('truck is ', truck)
    res.render('show_truck', { truck })
  })
})

module.exports = router
