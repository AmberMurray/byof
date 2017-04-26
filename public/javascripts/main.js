// FUNCTION TO DO AJAX CALL
/*
query should look like this:
 https://data.kingcounty.gov/resource/gkhn-e8mn.json?Business_ID=PR0084889
 */

function makeCall(businessId) {
  let queryRoot = 'https://data.kingcounty.gov/resource/gkhn-e8mn.json\?'
  let queryParam = `Business_ID=${businessId}`
  let fullQuery = queryRoot + queryParam
  let testQuery = 'https://data.kingcounty.gov/resource/gkhn-e8mn.json?Business_ID=PR0084889'
  console.log('fullQuery is ', fullQuery)

  // MAKE THE QUERY
  $.ajax ({
    method: 'GET',
    url: testQuery
    // beforeSend: function(xhr) {
    //   xhr.setRequestHeader('Access-Control-Allow-Headers', '*')
    },
    success: function(results) {
      console.log('results are ', results);

    },
    error: function (error) {
      console.log('nope')
    }
  })
})
