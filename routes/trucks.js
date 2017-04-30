var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')
var rp = require('request-promise')

// ===== GET ALL TRUCKS =====
router.get('/', function(req, res, next) {
  knex('trucks').select('*')
  .orderBy('name')
  .then(trucks => {
    res.render('trucks', { trucks })
  })
  .catch((err) => {
    next(err)
  })
})

// ===== GET ONE TRUCK =====
router.get('/:id', function(req, res, next) {
  var truckId = req.params.id

  let truckComments = knex('comments').where('truck_id', truckId)
  .select('comments.review', 'comments.user_id')
  .innerJoin('users', 'users.id', 'comments.user_id')
  .select('users.user_pic', 'users.user_name')

  let truckSched = knex('schedules')
  .innerJoin('bars', 'bars.id', 'schedules.bar_id')
  .where('schedules.truck_id', truckId)
  .select('bars.name', 'schedules.bar_id')

  let truckInfo = knex('trucks')
  .where('trucks.id', truckId)
  .select('*')

  knex('trucks')
  .where('id', truckId)
  .select('business_id')
  .returning('*')
  .then((businessIdObj) => {
    const businessId = businessIdObj[0].business_id
    return businessId
  })
  .then((businessId) => {
    let queryRoot = 'https://data.kingcounty.gov/resource/gkhn-e8mn.json\?'
    let queryParam = `Business_ID=${businessId}`
    let fullQuery = queryRoot + queryParam

    // make the query
    const sodaQuery = rp({
      method: 'GET',
      uri: fullQuery,
      json: true
    })

    Promise.all([truckComments, truckSched, truckInfo, sodaQuery])
    .then((results) => {
      let uglyDate = results[3][0].inspection_date
      let monsterTruck = {
        commentDeets: results[0],
        schedDeets: results[1],
        truckDeets: results[2][0],
        inspectionResult: results[3][0].inspection_result,
        inspectionDate: uglyDate.slice(0, 10)
      }
      res.render('show_truck', {monsterTruck})
    })
    .catch((err) => {
      next(err)
    })
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
