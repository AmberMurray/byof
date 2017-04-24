var express = require('express');
var router = express.Router();
var knex = require('../db/connection.js')

const authorize = function(req, res, next) {
  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Unauthorized'
    })
  }
  next()
}

// ===== GET ALL TRUCKS =====
  router.get('/', function(req, res, next) {
  console.log("In the GET all trucks function")
  knex('trucks').select('*')
  .then(trucks => {
    // console.log('trucks is ', trucks)
    res.render('trucks', { trucks })
  })
})


// ===== ADD A TRUCK TO FAVORITES =====
router.post('/favorites', authorize, (req, res, next) => {
  console.log("In the ADD one comment function")
  console.log("req.body is: ", req.body);

  const { userId } = req.session
  const newFavorite = req.body
  const newFavTruckId = req.body.truck_id

knex('favorites')
  .insert({truck_id: newFavTruckId, user_id: userId}, "*")
  .returning(['id', 'truck_id', 'user_id'])
  .then((result) => {
    let sendBack = result[0]
    res.status(200).json(sendBack)
  })
  .catch((err) => {
    next(err)
  })
})

// ===== GET ONE TRUCK =====

module.exports = router;
