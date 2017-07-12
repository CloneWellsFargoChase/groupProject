////// REQUIRED //////
const axios = require('axios');


////// EXPORTS //////
module.exports = {


////// TEST //////
  test: function(req, res){
    req.app.get('db').test().then(function(r){
      res.status(200).send(r)
    })

  }


////// END EXPORTS //////
}
