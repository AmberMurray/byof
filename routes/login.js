var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')
var bcrypt = require('bcrypt-as-promised')


// ===== SHOW LOGIN PAGE
router.get('/', function(req, res, next) {
  console.log('===============');
    res.render('login')
})

// ===== ADD A USER =====
router.post('/', (req, res, next) => {
  console.log('in the router add user')
  let pw = req.body.user_password
  console.log('req.body is ', req.body);
  bcrypt.hash(pw, 12)
  .then((hashed_password) => {
    console.log('here in then');
    return knex('users')
    .insert({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_pic: req.body.user_pic,
      hashed_password: hashed_password
    }, '*')
  })
  .then((users) => {
    console.log('in the .then for posting a new user');
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
