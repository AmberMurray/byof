'use strict'

const bcrypt = require('bcrypt-as-promised')
const express = require('express')
const knex = require('../db/connection')
const router = express.Router()

router.post('/', (req, res, next) => {
  const { email, password } = req.body
  if (!email || !email.trim()) {
    return next({
      status: 400,
      message: 'Please enter a valid email address.'
    })
  }
  if (!password) {
    return next({
      status: 400,
      message: 'Please enter a valid password.'
    })
  }

  let user;
  knex('users')
    .where('user_email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw {
          status: 400,
          message: 'Bad email or password'
        }
      }
      user = row
      return bcrypt.compare(password, user.hashed_password)
    })
    .then(() => {
      delete user.hashed_password
      // req.session.userId = user.id
      // res.json(user)
      res.send(user)
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw {
        status: 400,
        message: 'Bad email or password'
      }
    })
    .catch((err) => {
      next(err)
    })
})

// router.delete('/session', (req, res, next) => {
//   req.session = null
//   res.sendStatus(200)
// })

module.exports = router
