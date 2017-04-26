'use strict'

const express = require('express')
const knex = require('../db/connection')
const bcrypt = require('bcrypt-as-promised')
const router = express.Router()

// ===== ADD A USER =====
router.post('/users', (req, res, next) => {
  let pw = req.body.password
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
    res.json(user)
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
