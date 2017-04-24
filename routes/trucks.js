var express = require('express');
var router = express.Router();
var knex = require('../db/connection.js')

// ===== GET ALL TRUCKS =====
  router.get('/', function(req, res, next) {
  console.log("In the GET all trucks function")
  knex('trucks').select('*').then(trucks => {
    console.log('trucks is ', trucks);
    res.render('trucks', { trucks })
  })
})

module.exports = router;
