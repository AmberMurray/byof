var express = require('express')
var router = express.Router()

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
module.exports = authorization
