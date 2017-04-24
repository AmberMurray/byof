var express = require('express');
var router = express.Router();
var knex = require('../db/connection.js')

// ===== GET ALL BARS =====
  router.get('/', function(req, res, next) {
  console.log("In the GET all bars function")
  knex('bars').select('*')
  .then(bars => {
    console.log('bars is ', bars)
    res.render('bars', { bars })
  })
})

// ===== GET ONE BAR (SHOW PAGE) =====
// router.get('/:id', (req, res, next) => {
//   console.log("In the GET one bar function")
//   var id = req.params.id
//   console.log("req.params is ", req.param, '\n')
//
//   knex('bars')
//   .select('*')
//   .where({ id })
//   .first()
//   .then(bar => {
//     res.render('show', { bar })
//   })
// })

module.exports = router

// ===== GET ONE BAR =====
  router.get('/:id', function(req, res, next) {
  console.log("In the GET one bar function")
  var id = req.params.id
  knex('bars')
  .select('*')
  .where('id', id)
  .first()
  .then(bar => {
    console.log('bar is ', bar)
    res.render('show_bar', { bar })
  })
})

module.exports = router;
>>>>>>> re-fixed the app.use for bars in app.js, redid bars get all route
