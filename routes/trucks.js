var express = require('express');
var router = express.Router();
var knex = require('knex')

// ===== GET ALL TRUCKS =====
  router.get('/', function(req, res, next) {
  console.log("In the GET all trucks function")
  knex('trucks').select('*').then(trucks => {
    console.log('inside the knex');
    res.render('trucks', { title: 'ALL TRUCKS' })
  })
})

module.exports = router;
