var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')
var bcrypt = require('bcrypt-as-promised')


// ===== SHOW LOGIN PAGE
router.get('/', function(req, res, next) {
  res.render('login')
})

// ===== ADD A USER =====
router.post('/', (req, res, next) => {
  let pw = req.body.user_password
  bcrypt.hash(pw, 12)
  .then((hashed_password) => {
    return knex('users')
    .insert({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_pic: req.body.user_pic,
      hashed_password: hashed_password
    }, '*')
  })
  .then((users) => {
    const user = users[0]
    delete user.hashed_password
    req.session.userId = user.id
    res.redirect('/trucks')
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
