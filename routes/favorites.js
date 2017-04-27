var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')


// ===== AUTHORIZATION =====
let authorize = function(req, res, next) {
  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Unauthorized'
    })
  }
  next()
}

// ===== GET FAVORITE TRUCKS =====
router.get('/', authorize, (req, res, next) => {
  let { userId } = req.session
  knex('favorites')
    .innerJoin('trucks', 'trucks.id', 'favorites.truck_id')
    .where('favorites.user_id', userId)
    .then((favorites) => {
      res.render('favorites', { favorites })
    })
    .catch((err) => {
      next(err)
    })
})

// ===== CHECK TO SEE IF TRUCK IS A FAVORITE =====
router.get('/check', authorize, (req, res, next) => {
  let { userId } = req.session
  // let userId = 5
  let query = req.query
  let queryId = req.query.id

  knex('favorites')
    .innerJoin('trucks', 'trucks.id', 'favorites.truck_id')
    .where(query)
    .orderBy('trucks.name', 'food')
    .then((favorite) => {
      if (favorite == 0) {
        res.status(200).send(false)
      }
      else {
        res.status(200).send(true)
      }
    })
    .catch((err) => {
      next(err)
    })
})

// ====== ADD A TRUCK TO FAVORITES =====
router.post('/', authorize, (req, res, next) => {
  let { userId } = req.session
  let newFavorite = req.body.truck_id
  console.log(newFavorite);

knex('favorites')
  .insert({truck_id: newFavorite, user_id: userId}, "*")
  .returning(['id', 'truck_id', 'user_id'])
  .then((result) => {
    let sendBack = result[0]
    res.redirect('/favorites')
  })
  .catch((err) => {
    next(err)
  })
})

// ====== DELETE A TRUCK FROM FAVORITES LIST =====
router.delete('/:id', authorize, (req, res, next) => {
  let { userId } = req.session
  // let userId = 5
  let toBeRemoved = req.body
  let id = req.body.truck_id

  if (!userId) {
    return next({
      status: 401,
      message: 'Unauthorized'
    })
  }
    knex('favorites')
    .where('id', id)
    .delete()
    .returning(['truck_id', 'user_id'])
    .then((result) => {
      res.json(result[0])
    })
})

module.exports = router
