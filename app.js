// if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
//   require('dotenv').config();
// }

var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
// var cookieSession = require('cookie-session')
var methodOverride = require('method-override')
var hbs = require('hbs')
var index = require('./routes/index')
var trucks = require('./routes/trucks')
var bars = require('./routes/bars')
var comments = require('./routes/comments')
var favorites = require('./routes/favorites')
var users = require('./routes/users')
// var session = require('./routes/session')
var app = express()

// app.disable('x-powered-by')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieSession({
//   name: 'byof_dev',
//   secret: process.env.SESSION_SECRET,
//   secure: app.get('env') === 'production'
// }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// CSRF protection
// app.use((req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//   res.sendStatus(406)
// })

app.use('/', index)
app.use('/trucks', trucks)
app.use('/bars', bars)
app.use('/comments', comments)
app.use('/users', users)
app.use('/favorites', favorites)
// app.use('/session', session)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
