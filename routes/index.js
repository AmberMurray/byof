var express = require('express')
var router = express.Router()

// ===== LANDING PAGE =====
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})


module.exports = router;
