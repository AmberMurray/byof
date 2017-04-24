var express = require('express')
var router = express.Router();
var knex = require('../db/connection.js')

// ===== GET ALL COMMENTS =====
//   router.get('/', function(req, res, next) {
//   console.log("In the GET all comments function")
//   knex('comments').select('*')
//   .then(comments => {
//     console.log('comments is ', comments)
//     res.render('comments', { comments })
//   })
// })

// ===== GET ALL COMMENTS FOR ONE TRUCK =====
router.get('/', (req, res, next) => {
  console.log('in th get all comments for a truck function')
  knex('comments')
    .innerJoin('trucks', 'trucks.id', 'comments.truck_id')
    .then((comments) => {
      console.log('get all comments then result is ', comments);
      res.json(comments)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
