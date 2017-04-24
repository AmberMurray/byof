var express = require('express');
var router = express.Router();
var knex = require('../db/connection.js')

// ===== AUTHORIZATION =====
const authorize = function(req, res, next) {
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
  const { userId } = req.session

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

// ====== ADD A TRUCK TO FAVORITES =====
router.post('/favorites', authorize, (req, res, next) => {
  const { userId } = req.session
  const newFavorite = req.body
  const newFavId = req.body.truck_id

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
