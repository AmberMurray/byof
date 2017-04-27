var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')

// ===== AUTHORIZATION =====
let authorize = function(req, res, next) {
  if (!req.session.userId) {
    res.redirect('/login')
  }
  next()
}

// ===== ADD A COMMENT ABOUT A TRUCK =====
router.post('/', authorize, (req, res, next) => {
  let { userId } = req.session
  let comment = req.body

  const addComment = { user_id: userId, truck_id: comment.truck_id, review: comment.review }

  knex('comments')
    .insert(addComment, '*')
    .then((rows) => {
      let comment = rows[0]
      res.redirect(`/trucks/${comment.truck_id}` )
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
