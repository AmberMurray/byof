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
   //
   // // MAKE THE QUERY
   $.ajax ({
     method: 'GET',
     url: testQuery,

     success: function(results)
     {
       let obj = results[0]
       let businessDeets =
       business_id: obj.business_id

       console.log('results are ', results)
     }, // success

     error: function (error)
     {
       console.log('nope')
     } // error
   }) // ajax
   return fullQuery
 } // function makeCall
