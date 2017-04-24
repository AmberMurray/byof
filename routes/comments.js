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

// ===== GET ALL COMMENTS FOR ONE TRUCK =====
// router.get('/', (req, res, next) => {
//   console.log('in th get all comments for a truck function')
//   knex('comments')
//     .innerJoin('trucks', 'trucks.id', 'comments.truck_id')
//     .then((comments) => {
//       // console.log('get all comments then result is ', comments)
//       res.json(comments)
//     })
//     .catch((err) => {
//       next(err)
//     })
// })

// ===== ADD A COMMENT ABOUT A TRUCK =====
router.post('/', (req, res, next) => {
  console.log('in the Add a comment function, req.body is ', req.body)
  console.log('req.params is ', req.params)

  // let { userId } = req.session
  let comment = req.body
  let userId = 2
  const addComment = { user_id: userId, truck_id: comment.truck_id, review: comment.review }

  knex('comments')
    .insert(addComment, '*')
    .then((rows) => {
      let comment = rows[0]
      console.log('adding a comment ', comment)
      res.redirect(`/trucks/${comment.truck_id}` )
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
