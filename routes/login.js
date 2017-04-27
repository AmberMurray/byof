var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')


//SHOW LOGIN PAGE
router.get('/', function(req, res, next) {
  console.log('===============');
    res.render('login')
})


module.exports = router
