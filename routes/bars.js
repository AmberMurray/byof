var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')

// ===== GET ALL BARS =====
router.get('/', function(req, res, next) {
  knex('bars').select('*')
  .then(bars => {
    res.render('bars', { bars })
  })
  .catch((err) => {
    next(err)
  })
})

// ===== GET ONE BAR =====
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  knex('bars')
  .select('*')
  .where('id', id)
  .first()
  .then(bar => {
    res.render('show_bar', { bar })
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
