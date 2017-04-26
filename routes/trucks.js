var express = require('express')
var router = express.Router()
var knex = require('../db/connection.js')
var rp = require('request-promise')

// ===== GET HEALTH INSPECTION DATA =====

// ===== GET ALL TRUCKS =====
router.get('/', function(req, res, next) {
  console.log("In the GET all trucks function")
  knex('trucks').select('*')
  .then(trucks => {
    res.render('trucks', { trucks })
  })
})

// // ===== GET ALL BARS NEAR A PARTICULAR TRUCK =====
//   router.get('/:id/schedules', function(req, res, next) {
//   console.log("In the GET schedule function")
//   console.log("req.params.id is ", req.params.id)
//   id = req.params.id
//
//   knex('trucks').select('*')
//   .innerJoin('schedules', 'trucks.id', 'schedules.truck_id')
//   .innerJoin('bars', 'schedules.bar_id', 'bars.id')
//    .where('schedules.truck_id', id)
//    .then(nearby => {
//      console.log('nearby is ', nearby)
//      res.render('show_truck', nearby )
//    })
// })

// ===== GET ONE TRUCK =====
router.get('/:id', function(req, res, next) {
  console.log("In the GET one truck function")
  var truckId = req.params.id

  let truckComments = knex('comments').where('truck_id', truckId)
  .select('comments.review', 'comments.user_id')

  let truckSched = knex('schedules')
  .innerJoin('bars', 'bars.id', 'schedules.bar_id')
  .where('schedules.truck_id', truckId)
  .select('bars.name')

  let truckInfo = knex('trucks')
  .where('trucks.id', truckId)
  .select('*')

  knex('trucks')
  .where('id', truckId)
  .select('business_id')
  .returning('*')
  .then((businessIdObj) => {
    console.log('bus id is now ', businessIdObj[0].business_id)
    const businessId = businessIdObj[0].business_id
    return businessId
  })
  .then((businessId) => {
    let queryRoot = 'https://data.kingcounty.gov/resource/gkhn-e8mn.json\?'
    let queryParam = `Business_ID=${businessId}`
    let fullQuery = queryRoot + queryParam

    console.log('full query is ', fullQuery);

    // make the query
    const sodaQuery = rp({
      method: 'GET',
      uri: fullQuery,
      json: true
    })

    Promise.all([truckComments, truckSched, truckInfo, sodaQuery])
    .then((results) => {
      console.log('results', results)

      let monsterTruck = {
        commentDeets: results[0],
        schedDeets: results[1],
        truckDeets: results[2][0],
        inspectionResult: results[3][0].inspection_result,
        inspectionDate: results[3][0].inspection_date
      }
      console.log('monster truck ', monsterTruck)
      res.render('show_truck', {monsterTruck})
    })

  })

})

module.exports = router
