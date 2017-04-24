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
router.get('/favorites', authorize, (req, res, next) => {
  let { userId } = req.session

  knex('favorites')
    .innerJoin('trucks', 'trucks.id', 'favorites.truck_id')
    .where('favorites.user_id', userId)
    .orderBy('books.title', 'ASC')
    .then((favorites) => {
      res.json(favorites)
    })
    .catch((err) => {
      next(err)
    })
})

// ===== CHECK TO SEE IF TRUCK IS A FAVORITE =====
router.get('/favorites/check', authorize, (req, res, next) => {
  let { userId } = req.session
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
router.post('/favorites', authorize, (req, res, next) => {
  let { userId } = req.session
  let newFavorite = req.body
  let newFavId = req.body.truck_id

knex('favorites')
  .insert({truck_id: newFavId, user_id: userId}, "*")
  .returning(['id', 'truck_id', 'user_id'])
  .then((result) => {
    let sendBack = result[0]
    res.status(200).json(sendBack)
  })
  .catch((err) => {
    next(err)
  })
})

// ====== DELETE A TRUCK FROM FAVORITES LIST =====
router.delete('/favorites', authorize, (req, res, next) => {
  let { userId } = req.session
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
